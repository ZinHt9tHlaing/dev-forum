import { FAKE_POSTS } from "@/data";
import { PATHS } from "@/path";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <div className="flex gap-2 underline text-blue-500">
        <Link href={PATHS.ABOUT}>About</Link>
        <Link href={PATHS.POSTS}>Posts</Link>
      </div>

      <div>
        {FAKE_POSTS.map((post) => (
          <div key={post.id} className="p-4 border-b border-gray-200">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-sm font-medium text-gray-500 line-clamp-1">
              {post.body}
            </p>
            <Link
              href={PATHS.SINGLE_POST(post.id.toString())}
              className="underline text-blue-500"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
