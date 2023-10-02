"use client";
import Filters from "@/components/Filters";
import Collection from "@/components/Collection";
import Banner from "@/components/Banner";
import { useQueryGetNFTBalance } from "@/queries/getNFTBalance";
import { useEffect, useState } from "react";
import { INFT } from "@/utils/interfaces/nft";
import Menu from "@/components/Menu";
import { Spinner } from "@/components/Spinner";
import { useQueryGetAccount } from "@/queries/getAccount";

export default function Home({ params }: { params: { address: string } }) {
  const { data: nftData, isLoading } = useQueryGetNFTBalance({
    address: params.address,
  });

  const { data: accountData, isLoading: isGetAccountLoading } =
    useQueryGetAccount(params.address as string, {
      enabled: !!params.address,
    });

  const [nfts, setNfts] = useState<INFT[]>([]);

  useEffect(() => {
    if (nftData && !nfts?.length) {
      setNfts(nftData.ownedNfts);
    }
  }, [nftData, nfts]);

  return (
    <div className="flex flex-col h-full items-center justify-start p-16 w-full">
      <Menu />

      {!isGetAccountLoading && (
        <Banner
          nickname={accountData?.user?.nickname}
          description={accountData?.user?.description}
          address={params.address}
          totalCount={nftData?.totalCount}
        />
      )}

      {isLoading && <Spinner />}
      {!isLoading && (
        <div>
          <div>
            {nftData && (
              <div className="flex flex-col sm:flex-row justify-around  mt-10">
                <Filters
                  nftData={nftData}
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
            )}
            {!nftData && <span>No NFTs found.</span>}
          </div>
        </div>
      )}
    </div>
  );
}
