import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl mb-4">About us</h1>
      <p>Feel free to contact me any time by email: edmonitoz@gmail.com</p>

      <div className="flex justify-center mt-8">
        <Link href="/blogs" className="text-blue-600 underline">
          Blogs
        </Link>
      </div>
    </div>
  );
}
