import { cookies } from "next/headers";

const SESSION_COOKIE = "addis_session";
const SESSION_SECRET = process.env.SESSION_SECRET;



if (!SESSION_SECRET) {
  throw new Error("SESSION_SECRET is missing.");
}

export async function getSession() {
  const cookieStore = await cookies();

  const session = cookieStore.get(SESSION_COOKIE);

  if (!session) {
    return null;
  }

  return JSON.parse(session.value);
}


export async function setSession(user) {
  const cookieStore = await cookies();

  cookieStore.set(
    SESSION_COOKIE,
    JSON.stringify(user),
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    }
  );
}


export async function clearSession() {
  const cookieStore = await cookies();

  cookieStore.delete(SESSION_COOKIE);
}