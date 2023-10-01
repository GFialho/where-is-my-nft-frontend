import { alchemy } from "@/utils/alchemy/sdk";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useQueryGetNFTBalance = (
  { address }: { address: string },
  options: UseQueryOptions = {}
): any => {
  return useQuery({
    queryKey: ["get-nft-balance"],
    queryFn: () => alchemy.nft.getNftsForOwner(address),
    ...options,
  });
};
