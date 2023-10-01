"use client";

import { useQueryGetNFTBalance } from "@/queries/getNFTBalance";
import { INFT } from "@/utils/interfaces/nft";
import { useEffect } from "react";
import NFT from "../Nft";

export default function Collection({ nftData }: { nftData: INFT[] }) {
  // console.log({ nftData });

  return (
    <div className="flex flex-col justify-start items-start self-start w-full">
      <div className="flex flex-wrap w-full h-full justify-start">
        {nftData?.map((data: INFT) => {
          return <NFT data={data} />;
        })}
      </div>
    </div>
  );
}
