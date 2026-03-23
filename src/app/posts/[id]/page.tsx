import { FAKE_POSTS } from "@/data";
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

  return (
    <div>
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <Link href="/" className="underline text-blue-500">Back to Home</Link>
      <p className="text-sm font-medium text-gray-500 line-clamp-1">
        {post.body}
      </p>
    </div>
  );
};

export default SinglePostPage;
