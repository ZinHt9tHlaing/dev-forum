import { prisma } from "@/lib/prisma";
import { Post } from "../../../../generated/prisma/client";

export const getPosts = async (): Promise<Post[]> => {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getPostById = async (id: string): Promise<Post | null> => {
  return await prisma.post.findUnique({
    where: {
      id,
    },
  });
};
