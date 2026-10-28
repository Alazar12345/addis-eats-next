import { setSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Sign In",
  description:
    "Sign in to your Addis Eats account to manage your orders.",
}; 
async function login(formData) {
  "use server";

  const username = formData.get("username");

  const user = {
    id: username === "staff" ? "2" : "1",
    name: username,
    role: username === "staff" ? "staff" : "customer",
  };

  await setSession(user);

  const next = formData.get("next");

  if (next && next.startsWith("/")) {
    redirect(next);
  }

  redirect("/");
}

export default function SignIn({ searchParams }) {
  const next = searchParams?.next || "/";

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Sign In</h1>

      <form action={login} className="mt-5">
        <input name="username" placeholder="username" className="border p-2" />

        <input type="hidden" name="next" value={next} />

        <button className="border px-4 py-2">Sign in</button>
      </form>
    </main>
  );
}
