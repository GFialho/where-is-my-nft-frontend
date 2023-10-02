"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Menu from "@/components/Menu";
import TextArea from "@/components/TextArea";
import * as Form from "@radix-ui/react-form";

export default function Config() {
  return (
    <div className="flex flex-col h-full items-center justify-start p-16 w-full">
      <Menu />
      <Form.Root
        onSubmit={(event) => {
          onSubmit(event);
          event.preventDefault();
        }}
        className="py-4 flex flex-col justify-start w-96"
      >
        <Form.Field name="nickname">
          <div className="flex flex-col">
            <Form.Label>Nickname</Form.Label>
            <Form.Message className="text-red-500 text-sm" match="valueMissing">
              Please enter your nickname
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input type="text" required defaultValue={""} />
          </Form.Control>
        </Form.Field>

        <Form.Field name="description">
          <div className="flex flex-col">
            <Form.Label>Description</Form.Label>
          </div>
          <Form.Control asChild>
            <TextArea defaultValue={""} />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <div className="flex justify-center">
            <Button
              style={{ marginTop: 10 }}
              color="primary"
              //   disabled={isMutationLoading}
              //   isLoading={isMutationLoading}
            >
              Update
            </Button>
          </div>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
