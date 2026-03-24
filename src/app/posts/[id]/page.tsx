import { FAKE_POSTS } from "@/data";
import PostItem from "@/features/post/components/PostItem";
import Link from "next/link";

interface SinglePostPageProps {
  params: Promise<{ id: string }>;
}

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
  const { id } = await params;

  const post = FAKE_POSTS.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return <PostItem {...post} isCard={false} />;
};

export default SinglePostPage;
