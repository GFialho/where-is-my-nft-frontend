"use client";

import { INFT } from "@/utils/interfaces/nft";
import Image from "next/image";
import discordIcon from "../../../assets/icons/discord.svg";
import xIcon from "../../../assets/icons/x.svg";
import websiteIcon from "../../../assets/icons/website.svg";

export default function NFT({ data }: { data: INFT }) {
  console.log({ data });

  return (
    <div className="flex flex-col justify-center p-4 drop-shadow-lg max-w-xs">
      <div className="flex rounded-t-lg bg-white p-4">
        <img
          src={data.rawMetadata?.image?.replace(
            "ipfs://",
            "https://ipfs.io/ipfs/"
          )}
          height={280}
          width={280}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://placehold.co/280x280?text=No+Available+\nMedia";
          }}
        />
      </div>
      <div className="bg-blue-900 rounded-b-lg p-2">
        <h1 className="text-center text-lg font-bold mb-2">{data.title}</h1>

        <div className="flex justify-between">
          <h1 className="font-bold text-sm">Collection</h1>
          <span className="text-sm">{data.contract?.name}</span>
        </div>

        <div className="flex justify-between">
          <h1 className="font-bold  text-sm">Contract</h1>
          <a href={`https://etherscan.io/address/${data.contract?.address}`}>
            <span className="text-sm">{data.tokenType}</span>
          </a>
        </div>

        {data.contract?.openSea && (
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="font-bold  text-sm">Floor price</h1>
              <span className="text-sm">
                {data.contract.openSea.floorPrice}
              </span>
            </div>

            <div className="flex justify-center">
              {data.contract.openSea.twitterUsername && (
                <a
                  href={`https://twitter.com/${data.contract.openSea.twitterUsername}`}
                  className="px-1"
                >
                  <Image src={xIcon} height={24} width={24} alt="X Icon" />
                </a>
              )}
              {data.contract.openSea.discordUrl && (
                <a href={data.contract.openSea.discordUrl} className="px-1">
                  <Image
                    src={discordIcon}
                    height={24}
                    width={24}
                    alt="Discord Icon"
                  />
                </a>
              )}

              {data.contract.openSea.externalUrl && (
                <a href={data.contract.openSea.externalUrl} className="px-1">
                  <Image
                    src={websiteIcon}
                    height={24}
                    width={24}
                    alt="Website Icon"
                  />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
