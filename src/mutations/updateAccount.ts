import { getSdkInstance, UpdateAccountInput } from "@/utils/backend/sdk";
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";

export const useMutationUpdateAccount = (
  options: UseMutationOptions<any, Error, UpdateAccountInput> = {}
): any => {
  const sdk = getSdkInstance();
  const queryClient = useQueryClient();

  return useMutation<any, Error, UpdateAccountInput>(
    async ({ address, data, signature }) => {
      const response = await sdk.updateAccount(address, data, signature);
      return response;
    },
    {
      onSettled: (_, error) => {
        if (!error) {
          queryClient.invalidateQueries({
            queryKey: ["get-account"],
          });
        }
      },

      ...options,
    }
  );
};
