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

export default function Home({ params }: { params: { address: string } }) {
  const { data: nftData, isLoading } = useQueryGetNFTBalance({
    address: params.address,
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
      <Banner />
      <Header />
      {isLoading && <Spinner />}
      {!isLoading && (
        <div>
          <div className="flex flex-col sm:flex-row justify-around w-full h-full mt-10">
            <Filters nftData={nftData} setNfts={setNfts} />
            <Collection nftData={nfts} />
          </div>
        </div>
      )}
    </div>
  );
}
