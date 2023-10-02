import { alchemy } from "@/utils/alchemy/sdk";
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

export const useQueryGetNFTBalance = (
  { address }: { address: string },
  options: UseInfiniteQueryOptions = {}
): any => {
  return useInfiniteQuery({
    queryKey: ["get-nft-balance"],
    queryFn: ({ pageParam }) =>
      alchemy.nft.getNftsForOwner(address, { pageKey: pageParam?.pageKey }),
    getNextPageParam: (lastPage: any) => lastPage.pageKey,
    ...options,
  });
};
