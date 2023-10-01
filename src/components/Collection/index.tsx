"use client";

import { useQueryGetNFTBalance } from "@/queries/getNFTBalance";
import { INFT } from "@/utils/interfaces/nft";
import { useEffect } from "react";
import NFT from "../Nft";

export default function Collection({ address }: { address: string }) {
  const { data: nftData, isLoading } = useQueryGetNFTBalance({ address });
  // console.log({ nftData });

  return (
    <div className="flex flex-wrap">
      {nftData?.ownedNfts?.map((data: INFT) => {
        return <NFT data={data} />;
      })}
    </div>
  );
}
