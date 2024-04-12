import Examples from "./mockData.json";
import { getSession } from "./session";

// Mock table of blogs
const BlogsTable = [...Examples];

const verifyToken = async () => {
  const session = await getSession();
  if (!session || session.accessToken !== "mock-access-token") {
    throw new Error("Unauthorized");
  }
};

const delay = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export async function authenticate(email, password) {
  await delay(100);

  if (email === "john@grandshipper.com" && password === "password") {
    return {
      accessToken: "mock-access-token",
      refreshToken: "mock-refresh-token",
      expireAt: Date.now() + 1000 * 60 * 60 * 24 * 7,
    };
  }
}

export async function fetchBlogs() {
  await delay(2000);

  await verifyToken();
  return BlogsTable;
}

export async function fetchBlog(slug) {
  await delay(1000);

  await verifyToken();
  return BlogsTable.find((blog) => blog.slug === slug);
}
