import Link from "next/link";
import { getSession } from "@/lib/session";
import SignOut from "./SignOut";

export default async function Navbar() {
  const session = await getSession();

  return (
    <nav className="py-4">
      <div className="max-w-6xl px-6 mx-auto flex flex-row justify-between align-center">
        <Link href="/"><h1 className="text-xl font-bold">My Blogs</h1></Link>
        <Link href="/blogs" className="text-blue-600">Blogs</Link>

        {!session ? <Link href="/login">Login</Link> : <SignOut />}
      </div>
    </nav>
  );
}
