import Heading from "@/components/Heading";
import PostList from "@/components/PostList";
import CreatePostForm from "@/features/post/components/CreatePostForm";
import { Suspense } from "react";

const PostPage = async () => {
  return (
    <main>
      <Heading title="All Posts" description="Here are all forum posts." />

      <CreatePostForm />

      <Suspense
        fallback={
          <div className="text-xl font-semibold text-center animate-pulse">
            Loading...
          </div>
        }
      >
        <PostList />
      </Suspense>
    </main>
  );
};

export default PostPage;
