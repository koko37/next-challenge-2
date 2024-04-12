import Link from "next/link";
import { redirect } from "next/navigation";
import { authenticate } from "@/lib/mockApi";
import { createSession } from "@/lib/session";

export default function Login({ searchParams }) {
  const signIn = async (formData) => {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");
    const result = await authenticate(email, password);
    if (!result) {
      return redirect("/login?message=Could not authenticate user");
    }

    await createSession(result);
    return redirect("/blogs");
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <form
        className="flex flex-col w-full justify-center gap-2"
        action={signIn}
      >
        <h1 className="mb-4 text-center text-xl">Log In</h1>

        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 placeholder-gray-600"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 placeholder-gray-600"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
          Sign In
        </button>
        <Link
          href="/signup"
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2 text-center"
        >
          Go To Sign Up
        </Link>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
