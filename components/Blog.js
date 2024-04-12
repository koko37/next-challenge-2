import Link from "next/link";

const Blog = ({ blog }) => (
  <tr>
    <td>{blog.title}</td>
    <td>{blog.content}</td>
    <td>
      <Link href={"/blogs/" + blog.slug} className="text-blue-600 underline">
        view
      </Link>
      <span className="mx-2">|</span>
      <Link
        href={"/blogs/" + blog.slug + "/edit"}
        className="text-blue-600 underline"
      >
        edit
      </Link>
      <span className="mx-2">|</span>
      <Link href={"/blogs/" + blog.slug} className="text-blue-600 underline">
        delete
      </Link>
    </td>
  </tr>
);

export default Blog;
