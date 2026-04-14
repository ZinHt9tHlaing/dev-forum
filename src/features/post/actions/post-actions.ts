"use server";

import { prisma } from "@/lib/prisma";
import { PATHS } from "@/path";
import { redirect } from "next/navigation";

export const deletePost = async (id: string) => {
  await prisma.post.delete({
    where: {
      id,
    },
  });

  redirect(PATHS.POSTS);
};
