"use server";

import { fetchBlogs } from "@/lib/mockApi";
import Blog from "@/components/Blog";

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
              <Blog blog={blog} key={blog.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
