"use client";

import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Post } from "../types/post";
import { updatePostAction } from "../actions/post-actions";
import CardWrapper from "@/components/CardWrapper";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useAction } from "next-safe-action/hooks";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePostSchema } from "@/schema/post-schema";
import { toast } from "sonner";
import SubmitButton from "@/components/SubmitButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditPostFormProps {
  post: Post;
}

type formInput = z.infer<typeof updatePostSchema>;

const EditPostForm = ({
  post: { id, title, body, status },
}: EditPostFormProps) => {
  const { execute, isPending, hasSucceeded, hasErrored } =
    useAction(updatePostAction);

  const form = useForm<formInput>({
    resolver: zodResolver(updatePostSchema),
    defaultValues: {
      id: id.toString(),
      title: title,
      description: body,
      status: status,
    },
  });

  function onSubmit(data: formInput) {
    const { id, title, description, status } = data;
    execute({ id, title, description, status });
  }

  useEffect(() => {
    if (hasSucceeded) {
      toast.success("Post updated successfully");
      form.reset();
    }

    if (hasErrored) {
      toast.error("Failed to update post");
    }
  }, [form, hasSucceeded, hasErrored]);

  return (
    <div>
      <CardWrapper
        title="Update existing post"
        description="This will update these existing post."
      >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Id */}
          <FieldGroup>
            <Controller
              control={form.control}
              name="id"
              render={({ field, fieldState }) => (
                <Field className="hidden">
                  <FieldLabel htmlFor="id">Id</FieldLabel>
                  <Input {...field} type="text" id="id" name="id" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          {/* Title */}
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

          {/* Description */}
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

          {/* Status */}
          <FieldGroup>
            <Controller
              control={form.control}
              name="status"
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="status">Status</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                      <SelectItem value="DONE">Done</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <SubmitButton
            label="Update"
            pendingLabel="Updating..."
            isPending={isPending}
          />
        </form>
      </CardWrapper>
    </div>
  );
};

export default EditPostForm;
