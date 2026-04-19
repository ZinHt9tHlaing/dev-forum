import * as z from "zod";

export const postBaseSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title must be at most 100 characters long"),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long")
    .max(1000, "Description must be at most 1000 characters long"),
});

export const createPostSchema = z.object({
  ...postBaseSchema.shape,
});

export const updatePostSchema = z.object({
  id: z.string(),
  ...postBaseSchema.shape,
});

export const deletePostSchema = z.object({
  id: z.string(),
});
