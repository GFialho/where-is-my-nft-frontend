import { getSdkInstance } from "@/utils/backend/sdk";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useQueryGetAccount = (
  address: string,
  options: UseQueryOptions = {}
): any => {
  const sdk = getSdkInstance();
  return useQuery({
    queryKey: ["get-account"],
    queryFn: () => sdk.getAccount(address),
    ...options,
  });
};
