import { FAKE_POSTS } from "@/data";
import { Post } from "../types/post";

export const getPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await new Promise((resolve) => resolve(FAKE_POSTS));
};

export const getPostById = async (id: string): Promise<Post | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await new Promise((resolve) =>
    resolve(FAKE_POSTS.find((post) => post.id === parseInt(id))),
  );
};
