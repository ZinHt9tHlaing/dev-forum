"use server";

import { prisma } from "@/lib/prisma";
import { PATHS } from "@/path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createPostSchema, updatePostSchema } from "@/schema/post-schema";
import { actionClient } from "@/lib/safe-action";

export const createPostAction = actionClient
  .inputSchema(createPostSchema)
  .action(async ({ parsedInput: { title, description } }) => {
    await prisma.post.create({
      data: {
        title,
        body: description,
      },
    });

    revalidatePath(PATHS.POSTS);
    redirect(PATHS.POSTS);
  });

export const updatePostAction = actionClient
  .inputSchema(updatePostSchema)
  .action(async ({ parsedInput: { id, title, description, status } }) => {
    await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title,
        body: description,
        status,
      },
    });

    revalidatePath(PATHS.POSTS);
    redirect(PATHS.POSTS);
  });

export const deletePostAction = async (id: string) => {
  await prisma.post.delete({
    where: {
      id,
    },
  });

  redirect(PATHS.POSTS);
};
