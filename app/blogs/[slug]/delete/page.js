import { deleteBlog } from "@/lib/mockApi";
import { redirect } from "next/navigation";

export default async function DeleteBlog({ params: { slug } }) {
  await deleteBlog(slug);

  return redirect("/blogs");
}
