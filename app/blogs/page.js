"use server";
import Link from "next/link";
import { fetchBlogs } from "@/lib/mockApi";

export default async function Blogs() {
  const blogs = await fetchBlogs();

  return (
    <div className="w-full mt-4">
      <h1 className="mb-4 text-center text-xl">Blogs</h1>
      <div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="p-2">{blog.title}</td>
                <td className="p-2">{blog.content}</td>
                <td className="p-2">
                  <Link
                    href={"/blogs/" + blog.slug}
                    className="text-blue-600 underline"
                  >
                    View
                  </Link>
                  <span className="mx-2">|</span>
                  <Link
                    href={"/blogs/" + blog.slug + "/edit"}
                    className="text-blue-600 underline"
                  >
                    Edit
                  </Link>
                  <span className="mx-2">|</span>
                  <Link
                    href={"/blogs/" + blog.slug + "/delete"}
                    className="text-blue-600 underline"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Link href="/blogs/publish" className="text-blue-600 underline">
          New Blog
        </Link>
      </div>
    </div>
  );
}
