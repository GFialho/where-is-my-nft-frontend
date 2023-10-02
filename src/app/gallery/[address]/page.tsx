"use client";
import Filters from "@/components/Filters";
import Collection from "@/components/Collection";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { useQueryGetNFTBalance } from "@/queries/getNFTBalance";
import { useEffect, useState } from "react";
import { INFT } from "@/utils/interfaces/nft";
import Menu from "@/components/Menu";
import { Spinner } from "@/components/Spinner";
import { useQueryGetAccount } from "@/queries/getAccount";
import Button from "@/components/Button";

export default function Home({ params }: { params: { address: string } }) {
  const {
    data: nftData,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useQueryGetNFTBalance({
    address: params.address,
  });
  const [data, setData] = useState<any>({ ownedNfts: [] });

  const { data: accountData, isLoading: isGetAccountLoading } =
    useQueryGetAccount(params.address as string, {
      enabled: !!params.address,
    });

  const [nfts, setNfts] = useState<INFT[]>([]);

  console.log({ data });

  useEffect(() => {
    if (!nftData) return;

    const allPagesData: { ownedNfts: INFT[] } = {
      ownedNfts: [],
    };

    nftData?.pages?.forEach((page: any) => {
      allPagesData.ownedNfts.push(...page.ownedNfts);
    });

    setData({
      totalCount: nftData?.pages?.[0]?.totalCount,
      ownedNfts: [...data.ownedNfts, ...allPagesData.ownedNfts],
    });
  }, [nftData]);

  useEffect(() => {
    if (data && !nfts?.length) {
      setNfts(data.ownedNfts);
    }
  }, [data, nfts]);

  return (
    <div className="flex flex-col h-full items-center justify-start p-16 w-full">
      <Menu />

      {!isGetAccountLoading && (
        <Banner
          nickname={accountData?.user?.nickname}
          description={accountData?.user?.description}
          address={params.address}
          totalCount={data?.totalCount}
        />
      )}

      {isLoading && <Spinner />}
      {!isLoading && (
        <div>
          <div>
            {data && (
              <div className="flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row justify-around  mt-10">
                  <Filters
                    nftData={data}
                    setNfts={setNfts}
                    primaryColor={accountData?.user?.primaryColor}
                    secondaryColor={accountData?.user?.secondaryColor}
                    textColor={accountData?.user?.textColor}
                  />
                  <Collection
                    nftData={nfts}
                    primaryColor={accountData?.user?.primaryColor}
                    secondaryColor={accountData?.user?.secondaryColor}
                    textColor={accountData?.user?.textColor}
                  />
                </div>
                {!data?.pageKey && (
                  <div className="flex self-center mt-6">
                    <Button
                      onClick={() => fetchNextPage()}
                      isLoading={isFetchingNextPage}
                      disabled={!hasNextPage || isFetchingNextPage}
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </div>
            )}
            {!data && <span>No NFTs found.</span>}
          </div>
        </div>
      )}
    </div>
  );
}
