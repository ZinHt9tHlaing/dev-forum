"use client";

import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CardWrapper from "@/components/CardWrapper";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostSchema } from "@/schema/post-schema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useAction } from "next-safe-action/hooks";
import { createPostAction } from "../actions/post-actions";
import { toast } from "sonner";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";
import { PATHS } from "@/path";

type formInput = z.infer<typeof createPostSchema>;

const CreatePostForm = () => {
  const router = useRouter();

  const { execute, isPending, hasSucceeded, hasErrored } =
    useAction(createPostAction);

  const form = useForm<formInput>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(data: formInput) {
    const { title, description } = data;
    execute({ title, description });
  }

  useEffect(() => {
    if (hasSucceeded) {
      toast.success("Post created successfully");
      form.reset();
      router.push(PATHS.POSTS);
    }

    if (hasErrored) {
      toast.error("Failed to create post");
    }
  }, [form, hasSucceeded, hasErrored ]);

  return (
    <div>
      <CardWrapper title="Create Post" description="This will create new post.">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FieldGroup>
            <Controller
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="title">Title</FieldLabel>
                  <Input {...field} type="text" id="title" name="title" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <FieldGroup>
            <Controller
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="description">Description</FieldLabel>
                  <Textarea {...field} id="description" name="description" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <SubmitButton
            label="Create"
            pendingLabel="Creating..."
            isPending={isPending}
          />
        </form>
      </CardWrapper>
    </div>
  );
};

export default CreatePostForm;
