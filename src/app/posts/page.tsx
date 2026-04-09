import Heading from "@/components/Heading";
import PostList from "@/components/PostList";
import { Suspense } from "react";

const PostPage = async () => {

  return (
    <main>
      <Heading title="All Posts" description="Here are all forum posts." />
      <Suspense fallback={<div className="text-xl font-semibold text-center animate-pulse">Loading...</div>}>
        <PostList />
      </Suspense>
   
    </main>
  );
};

export default PostPage;
