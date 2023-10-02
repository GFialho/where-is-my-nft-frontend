"use client";

import { useQueryGetNFTBalance } from "@/queries/getNFTBalance";
import { INFT } from "@/utils/interfaces/nft";
import { useEffect } from "react";
import NFT from "../Nft";

export default function Collection({ nftData }: { nftData: INFT[] }) {
  // console.log({ nftData });

  return (
    <div className="flex flex-col justify-start w-full h-full">
      <div className="flex flex-wrap justify-start sm:w-[1040px]">
        {nftData?.map((data: INFT) => {
          return <NFT data={data} />;
        })}
      </div>
    </div>
  );
}
