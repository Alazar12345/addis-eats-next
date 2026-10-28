import { signOut } from "@/app/actions/auth";

export default function SignOutPage() {
  return (
    <form action={signOut}>
      <button type="submit">
        Sign Out
      </button>
    </form>
  );
}