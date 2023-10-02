import { INFT } from "@/utils/interfaces/nft";
import { cn } from "@/utils/tailwind/classes";
import { useEffect, useState } from "react";

export default function Filters({
  nftData,
  setNfts,
  primaryColor,
  secondaryColor,
  textColor,
}: {
  nftData: { ownedNfts: INFT[] };
  setNfts: (nfts: INFT[]) => void;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}) {
  const [collectionNames, setCollectionNames] = useState<string[]>([]);
  const [filterNames, setFilterNames] = useState<string[]>([]);

  useEffect(() => {
    if (nftData) {
      const namesSet = new Set<string>();

      nftData.ownedNfts?.forEach((nft) => {
        if (nft.contract?.openSea?.collectionName)
          namesSet.add(nft.contract?.openSea?.collectionName);
      });
      setCollectionNames(Array.from(namesSet));
    }
  }, [nftData]);

  const filterNfts = (newFilterNames: string[]) => {
    const filteredNfts = nftData?.ownedNfts?.filter((nft) =>
      newFilterNames.includes(nft.contract?.openSea?.collectionName)
    );
    setNfts(filteredNfts);
  };

  const handleChange = (event: any) => {
    const isOnFilters = filterNames.includes(event.target.value);
    let newFilterNames: string[];

    if (isOnFilters)
      newFilterNames = filterNames.filter(
        (name) => name !== event.target.value
      );
    else newFilterNames = [...filterNames, event.target.value];

    setFilterNames(newFilterNames);
    filterNfts(newFilterNames);
  };

  return (
    <div className="flex flex-col w-auto p-4 sm:w-96">
      <div
        className="rounded-t-lg"
        style={{ backgroundColor: secondaryColor || "#000000" }}
      >
        <h1
          className="text-center text-lg font-bold p-1"
          style={{ color: textColor || "white" }}
        >
          Collections
        </h1>
      </div>
      <div
        className={`rounded-b-lg p-4 flex flex-col`}
        style={{ backgroundColor: primaryColor || "#000000" }}
      >
        {collectionNames?.map((name, index: number) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                className="p-1"
                value={name}
                onChange={handleChange}
              />
              <label className="ml-1" style={{ color: textColor || "white" }}>
                {name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
