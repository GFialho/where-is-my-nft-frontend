"use client";

import { useQueryGetNFTBalance } from "@/queries/getNFTBalance";
import { INFT } from "@/utils/interfaces/nft";
import { useEffect } from "react";
import NFT from "../Nft";

export default function Collection({
  nftData,
  primaryColor,
  secondaryColor,
  textColor,
}: {
  nftData: INFT[];
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}) {
  return (
    <div className="flex flex-col justify-start w-full h-full">
      <div className="flex flex-wrap justify-start sm:w-[1040px]">
        {nftData?.map((data: INFT, index: number) => {
          return (
            <NFT
              data={data}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              textColor={textColor}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
