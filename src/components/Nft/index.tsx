"use client";

import { INFT } from "@/utils/interfaces/nft";
import Image from "next/image";
import discordIcon from "../../../assets/icons/discord.svg";
import xIcon from "../../../assets/icons/x.svg";
import websiteIcon from "../../../assets/icons/website.svg";

export default function NFT({ data }: { data: INFT }) {
  if (data.title === "Furlin") console.log(data);
  return (
    <div className="flex flex-col justify-start p-4 w-86 h-86">
      <div className="flex rounded-t-lg bg-white p-4 shadow-2xl	">
        <a
          href={`https://opensea.io/assets/ethereum/${data.contract?.address}/${data.tokenId}`}
        >
          <img
            src={
              data.rawMetadata?.image?.replace(
                "ipfs://",
                "https://ipfs.io/ipfs/"
              ) ||
              data.rawMetadata?.image_url?.replace(
                "ipfs://",
                "https://ipfs.io/ipfs/"
              ) ||
              "https://placehold.co/280x280?text=No+Available+\nMedia"
            }
            height={280}
            width={280}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://placehold.co/280x280?text=No+Available+\nMedia";
            }}
            className="h-64 w-64"
          />
        </a>
      </div>
      <div className="flex flex-col bg-blue-900 rounded-b-lg p-2 shadow-2xl	">
        <h1 className="text-center items-center justify-center text-lg font-bold mb-2 w-64 text-clip">
          {data.title}
        </h1>

        <div className="flex justify-between text-clip">
          <h1 className="font-bold text-sm">Collection</h1>
          <a
            href={`https://opensea.io/assets/ethereum/${data.contract?.address}/${data.tokenId}`}
            className="w-32 truncate  text-end"
          >
            <span className="text-sm w-32 truncate">{data.contract?.name}</span>
          </a>
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
