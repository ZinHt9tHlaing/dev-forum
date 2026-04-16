import EditPostForm from "@/features/post/components/EditPostForm";
import { getPostById } from "@/features/post/queries/post-queries";
import { notFound } from "next/navigation";

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}

const EditPostPage = async ({ params }: EditPostPageProps) => {
  const { id } = await params;

  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return <EditPostForm post={post} />;
};

export default EditPostPage;
