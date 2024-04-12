import { redirect } from "next/navigation";
import { clearSession } from "@/lib/session";

export default async function SignOut() {
  const handleSignOut = async () => {
    "use server";
    await clearSession();
    return redirect("/");
  };

  return (
    <form action={handleSignOut}>
      <button>Sign Out</button>
    </form>
  );
}
