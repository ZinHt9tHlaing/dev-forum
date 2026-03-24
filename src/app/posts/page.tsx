import Heading from "@/components/Heading";
import { FAKE_POSTS } from "@/data";
import PostItem from "@/features/post/components/PostItem";

const PostPage = () => {
  return (
    <main>
      <Heading title="All Posts" description="Here are all forum posts." />
      <div className="space-y-6">
        {FAKE_POSTS.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
};

export default PostPage;
