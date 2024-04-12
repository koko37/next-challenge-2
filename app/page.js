import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl mb-4">Welcome to My Blogs</h1>
      <p>
        This is a code challenge by Next.js/React.js to demonstrate the basic
        features of Framework.
      </p>

      <div className="w-full flex justify-center mt-8">
        <Link href="/blogs" className="text-blue-600 underline">
          Blogs
        </Link>
      </div>
    </div>
  );
}
