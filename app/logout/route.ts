import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ARTICLE_ACCESS_COOKIE } from "@/lib/article-access";

export async function GET() {
  const cookieStore = await cookies();
  cookieStore.delete(ARTICLE_ACCESS_COOKIE);
  redirect("/login");
}
