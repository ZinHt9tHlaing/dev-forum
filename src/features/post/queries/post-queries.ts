import { Post } from "../types/post";
import { prisma } from "@/lib/prisma";

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
