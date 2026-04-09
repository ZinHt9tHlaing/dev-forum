import PostItem from "@/features/post/components/PostItem";
import { getPosts } from "@/features/post/queries/post-queries";

const PostList = async () => {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
