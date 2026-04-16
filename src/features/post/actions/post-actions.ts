"use server";

import { prisma } from "@/lib/prisma";
import { PATHS } from "@/path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPost = async (formData: FormData) => {
  const data = {
    title: formData.get("title") as string,
    body: formData.get("description") as string,
  };

  await prisma.post.create({
    data: {
      title: data.title,
      body: data.body,
    },
  });

  revalidatePath(PATHS.POSTS);
  redirect(PATHS.POSTS);
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
