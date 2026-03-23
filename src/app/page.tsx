import { FAKE_POSTS } from "@/data";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link href="/posts">Posts</Link>

      <div>
        {FAKE_POSTS.map((post) => (
          <div key={post.id} className="p-4 border-b border-gray-200">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-sm font-medium text-gray-500 line-clamp-1">{post.body}</p>
            <Link href={`/posts/${post.id}`} className="underline text-blue-500">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
