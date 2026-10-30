"use server";

import { clearSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export async function signOut() {
  await clearSession();

  redirect("/signin");
}
