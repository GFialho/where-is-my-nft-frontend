"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Menu from "@/components/Menu";
import TextArea from "@/components/TextArea";
import { useMutationUpdateAccount } from "@/mutations/updateAccount";
import { useQueryGetAccount } from "@/queries/getAccount";
import * as Form from "@radix-ui/react-form";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useAccount, useSignMessage } from "wagmi";

export default function Config() {
  const { signMessageAsync } = useSignMessage();

  const { mutateAsync, isLoading: isMutationLoading } =
    useMutationUpdateAccount();

  const { address } = useAccount();

  const { data: accountData } = useQueryGetAccount(address as string, {
    enabled: !!address,
  });

  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const signature = await signMessageAsync({ message: JSON.stringify(data) });
    await mutateAsync({ address, data, signature });
    router.push(`gallery/${address}`);
  };

  return (
    <div className="flex flex-col h-full items-center justify-start p-16 w-full">
      <Menu />
      <Header />
      <Form.Root
        onSubmit={(event) => {
          onSubmit(event);
          event.preventDefault();
        }}
        className="py-4 flex flex-col justify-start sm:w-96 w-full self-start sm:ml-96 mt-10"
      >
        <Form.Field name="nickname">
          <div className="flex flex-col">
            <Form.Label>Nickname</Form.Label>
            <Form.Message className="text-red-500 text-sm" match="valueMissing">
              Please enter your nickname
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input
              type="text"
              required
              defaultValue={accountData?.user?.nickname}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field name="description">
          <div className="flex flex-col">
            <Form.Label>Description</Form.Label>
          </div>
          <Form.Control asChild>
            <TextArea defaultValue={accountData?.user?.description} />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <div className="flex justify-center">
            <Button
              style={{ marginTop: 10 }}
              color="primary"
              disabled={isMutationLoading}
              isLoading={isMutationLoading}
            >
              Update
            </Button>
          </div>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
