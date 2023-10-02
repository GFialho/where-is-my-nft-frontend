import { INFT } from "@/utils/interfaces/nft";
import { useEffect, useState } from "react";

export default function Filters({
  nftData,
  setNfts,
}: {
  nftData: { ownedNfts: INFT[] };
  setNfts: (nfts: INFT[]) => void;
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
    <div className="flex flex-col w-auto p-4 sm:w-96 text-white">
      <div className="rounded-t-lg bg-blue-300">
        <h1 className="text-center text-lg font-bold p-1">Collections</h1>
      </div>
      <div className="bg-blue-900 rounded-b-lg p-4 flex flex-col">
        {collectionNames?.map((name) => {
          return (
            <div>
              <input
                type="checkbox"
                className="p-1"
                value={name}
                onChange={handleChange}
              />
              <label className="ml-1">{name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
