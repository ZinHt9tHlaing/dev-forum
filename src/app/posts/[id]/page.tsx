interface SinglePostPageProps {
  params: Promise<{ id: string }>;
}

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
  const { id } = await params;

  return <div>SinglePostPage {id}</div>;
};

export default SinglePostPage;
