import Link from 'next/link'
import { fetchBlog } from "@/lib/mockApi";
import { notFound } from "next/navigation";

export default async function BlogArticle({ params: { slug } }) {
  const blog = await fetchBlog(slug);

  const update = async (formData) => {
    "use server";
  };

  if (!blog) {
    return notFound();
  }

  return (
    <div className="w-full mt-4">
      <form
        className="flex flex-col w-full justify-center gap-2"
        action={update}
      >
        <h1 className="mb-4 text-center text-xl">Edit Blog</h1>

        <input type="hidden" name="id" value={blog.id} />
        <label className="text-md" htmlFor="title">
          Title
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border border-black mb-6 placeholder-gray-600"
          type="text"
          name="title"
          placeholder="What is Next.js?"
          defaultValue={blog.title}
          required
        />
        <label className="text-md" htmlFor="title">
          Content
        </label>
        <textarea
          className="rounded-md px-4 py-2 bg-inherit border border-black mb-6 placeholder-gray-600"
          name="content"
          rows="3"
          defaultValue={blog.content}
          required
        />

        <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
          Update
        </button>

        <Link href={"/blogs/" + blog.slug} className='text-center'>Cancel</Link>
      </form>
    </div>
  );
}
