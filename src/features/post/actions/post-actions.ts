"use server";

import { prisma } from "@/lib/prisma";
import { PATHS } from "@/path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createPostSchema } from "@/schema/post-schema";
import { ActionStateTypes, actionStateFilter } from "@/lib/action-state-filter";

export const createPost = async (
  _actionState: ActionStateTypes,
  formData: FormData,
) => {
  try {
    const data = createPostSchema.parse({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    });

    await prisma.post.create({
      data: {
        title: data.title,
        body: data.description,
      },
    });

    revalidatePath(PATHS.POSTS);
    redirect(PATHS.POSTS);
  } catch (error) {
    console.log("create post error", error);
    return actionStateFilter(error, formData);
  }
};

export const updatePost = async (id: string, formData: FormData) => {
  const data = {
    // id: formData.get("id") as string,
    id,
    title: formData.get("title") as string,
    body: formData.get("description") as string,
  };

  await prisma.post.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      body: data.body,
    },
  });

  revalidatePath(PATHS.POSTS);
  redirect(PATHS.POSTS);
};

export const deletePost = async (id: string) => {
  await prisma.post.delete({
    where: {
      id,
    },
  });

  redirect(PATHS.POSTS);
};
