import { PATHS } from "@/path";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggler } from "../ThemeToggler";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-4 mb-8">
      <Link href={PATHS.HOME}>
        <h2 className="text-4xl font-bold my-4">Dev.io</h2>
      </Link>
      <div>
        <Button variant="link" asChild>
          <Link href={PATHS.POSTS} className="hover:text-blue-600">
            Posts
          </Link>
        </Button>

        <Button variant="link" asChild>
          <Link href={PATHS.ABOUT} className="hover:text-blue-600">
            About
          </Link>
        </Button>

        <ThemeToggler />
      </div>
    </div>
  );
};

export default Navbar;
