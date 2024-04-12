import Link from "next/link";
import { fetchBlog } from "@/lib/mockApi";
import { notFound } from "next/navigation";

export default async function BlogDetail({ params: { slug } }) {
  const blog = await fetchBlog(slug);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="w-full mt-4">
      <h1 className="mb-4 text-center text-xl">{blog.title}</h1>

      <div>{blog.content}</div>

      <div className="flex justify-center gap-4 mt-8">
        <Link href="/blogs/" className="text-blue-600 underline">
          Index
        </Link>
        <span className="mx-2">|</span>
        <Link
          href={"/blogs/" + blog.slug + "/edit"}
          className="text-blue-600 underline"
        >
          Edit
        </Link>
        <span className="mx-2">|</span>
        <Link href={"/blogs/" + blog.slug + "/delete"} className="text-blue-600 underline">
          Delete
        </Link>
      </div>
    </div>
  );
}
