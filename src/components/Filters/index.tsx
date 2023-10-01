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

  useEffect(() => {
    if (nftData)
      setCollectionNames(
        nftData.ownedNfts?.map((nft) => nft.contract?.openSea?.collectionName)
      );
  }, [nftData]);

  const filterNfts = (newCollectionNames: string[]) => {
    if (!newCollectionNames.length) {
      setNfts([]);
      return;
    }

    const filteredNfts = nftData?.ownedNfts?.filter((nft) =>
      newCollectionNames.includes(nft.contract?.openSea?.collectionName)
    );
    setNfts(filteredNfts);
  };

  const handleChange = (event: any) => {
    const isOnCollectionNames = collectionNames.includes(event.target.value);
    let newCollectionNames: string[];

    if (isOnCollectionNames)
      newCollectionNames = collectionNames.filter(
        (name) => name !== event.target.value
      );
    else newCollectionNames = [...collectionNames, event.target.value];

    setCollectionNames(newCollectionNames);
    filterNfts(newCollectionNames);
  };

  return (
    <div className="flex flex-col w-auto p-4">
      <div className="rounded-t-lg bg-blue-300">
        <h1 className="text-center text-lg font-bold p-1">Collections</h1>
      </div>
      <div className="bg-blue-900 rounded-b-lg p-4 flex flex-col">
        {nftData?.ownedNfts?.map((nft) => {
          return (
            <div>
              <input
                type="checkbox"
                className="p-1"
                value={nft.contract?.openSea?.collectionName}
                onChange={handleChange}
                defaultChecked
              />
              <label className="ml-1">
                {nft.contract?.openSea?.collectionName}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
