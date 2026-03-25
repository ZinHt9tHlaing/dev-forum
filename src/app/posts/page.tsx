"use client";

import Heading from "@/components/Heading";
import PostItem from "@/features/post/components/PostItem";
import { getPosts } from "@/features/post/queries/post-queries";
import { Post } from "@/features/post/types/post";
import { useEffect, useState } from "react";

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center animate-pulse">Loading...</div>;
  }

  return (
    <main>
      <Heading title="All Posts" description="Here are all forum posts." />
      <div className="space-y-6">
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
};

export default PostPage;
