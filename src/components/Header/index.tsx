import { PATHS } from "@/path"
import Link from "next/link"

const Header = () => {
  return (
    <div><h2>Dev Forum</h2>
    <div className="flex gap-2 underline text-blue-500">
        <Link href={PATHS.HOME}>Home</Link>
        <Link href={PATHS.ABOUT}>About</Link>
        <Link href={PATHS.POSTS}>Posts</Link>
      </div>
    </div>
  )
}

export default Header