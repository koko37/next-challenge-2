"use server";

import { cookies } from "next/headers";

export async function createSession(token) {
  try {
    cookies().set("session", JSON.stringify(token), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  } catch {
    throw new Error("cookies is not available");
  }
}

export async function getSession() {
  const session = cookies().get("session");
  if (!session) return null;

  return JSON.parse(session.value);
}

export async function clearSession() {
  cookies().delete("session");
}
