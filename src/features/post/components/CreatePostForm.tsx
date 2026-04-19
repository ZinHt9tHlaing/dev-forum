"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createPost } from "@/features/post/actions/post-actions";
import SubmitButton from "@/components/SubmitButton";
import CardWrapper from "@/components/CardWrapper";
import { useActionState } from "react";
import { ActionStateTypes } from "@/lib/action-state-filter";

const CreatePostForm = () => {
  // const [isPending, startTransition] = useTransition();

  // const createPostAction = async (formData: FormData) => {
  //   startTransition(async () => {
  //     await createPost(formData);
  //   });
  // };

  const [actionState, formAction] = useActionState<ActionStateTypes, FormData>(
    createPost,
    {
      message: "",
    },
  );

  return (
    <div>
      <CardWrapper title="Create Post" description="This will create new post.">
        <form action={formAction} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              name="title"
              defaultValue={
                (actionState?.payload?.get("title") as string) ?? ""
              }
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={
                (actionState?.payload?.get("description") as string) ?? ""
              }
            />
          </div>

          <SubmitButton label="Create" pendingLabel="Creating..." />
          {actionState?.message && (
            <p className="text-red-500">{actionState.message}</p>
          )}
        </form>
      </CardWrapper>
    </div>
  );
};

export default CreatePostForm;
