import PostItem from "@/features/post/components/PostItem";
import { getPostById } from "@/features/post/queries/post-queries";

interface SinglePostPageProps {
  params: Promise<{ id: string }>;
}

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <PostItem {...post} isCard={false} />;
};

export default SinglePostPage;
