import Link from "next/link";
import { createBlog } from "@/lib/mockApi";
import { redirect } from "next/navigation";

export default async function BlogArticle() {
  const create = async (formData) => {
    "use server";

    await createBlog(formData.get("title"), formData.get("content"));
    return redirect("/blogs/");
  };

  return (
    <div className="w-full mt-4">
      <form
        className="flex flex-col w-full justify-center gap-2"
        action={create}
      >
        <h1 className="mb-4 text-center text-xl">Add new Blog</h1>

        <label className="text-md" htmlFor="title">
          Title
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border border-black mb-6 placeholder-gray-600"
          type="text"
          name="title"
          placeholder="What is Next.js?"
          required
        />
        <label className="text-md" htmlFor="title">
          Content
        </label>
        <textarea
          className="rounded-md px-4 py-2 bg-inherit border border-black mb-6 placeholder-gray-600"
          name="content"
          rows="3"
          placeholder="Please type the description here."
          required
        />

        <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
          Create
        </button>

        <Link href="/blogs/" className="text-center">
          Cancel
        </Link>
      </form>
    </div>
  );
}
