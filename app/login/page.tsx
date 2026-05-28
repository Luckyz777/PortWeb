import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  ARTICLE_ACCESS_COOKIE,
  ARTICLE_ACCESS_MAX_AGE_SECONDS,
  createArticleAccessToken,
  isArticlePasswordValid,
  verifyArticleAccessToken,
} from "@/lib/article-access";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Reader Access | Anirut Butnongwa",
  description: "Private reader access for Anirut Butnongwa's portfolio.",
  robots: { index: false, follow: false, nocache: true },
};

type LoginPageProps = {
  searchParams?: Promise<{ error?: string; next?: string }>;
};

function safeRedirectPath(value: FormDataEntryValue | string | undefined | null): string {
  if (typeof value !== "string") return "/";
  if (!value.startsWith("/") || value.startsWith("//")) return "/";
  if (value.startsWith("/login")) return "/";
  return value;
}

async function unlockPortfolio(formData: FormData) {
  "use server";

  const nextPath = safeRedirectPath(formData.get("next"));

  if (!isArticlePasswordValid(formData.get("password"))) {
    redirect(`/login?error=1&next=${encodeURIComponent(nextPath)}`);
  }

  const cookieStore = await cookies();
  cookieStore.set(ARTICLE_ACCESS_COOKIE, createArticleAccessToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ARTICLE_ACCESS_MAX_AGE_SECONDS,
  });

  redirect(nextPath);
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const query = await searchParams;
  const nextPath = safeRedirectPath(query?.next);
  const cookieStore = await cookies();

  if (verifyArticleAccessToken(cookieStore.get(ARTICLE_ACCESS_COOKIE)?.value)) {
    redirect(nextPath);
  }

  return (
    <main className="login-page" aria-labelledby="login-heading">
      <section className="login-shell">
        <div className="login-mast">
          <p className="login-mast__eyebrow">Private reader access</p>
          <h1 id="login-heading">
            <span>Anirut</span>
            <span>Butnongwa</span>
          </h1>
          <p>
            Mechanical engineer and industrial software developer portfolio for
            manufacturing, CNC, fixture systems, and production workflow tools.
          </p>
          <dl className="login-mast__meta" aria-label="Portfolio metadata">
            <div>
              <dt>Target roles</dt>
              <dd>Process Engineer / Industrial Software Developer</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Automotive, precision manufacturing, tool room systems</dd>
            </div>
            <div>
              <dt>Access</dt>
              <dd>Shared password, no account required</dd>
            </div>
          </dl>
        </div>

        <form action={unlockPortfolio} className="login-card">
          <input type="hidden" name="next" value={nextPath} />
          <p className="login-card__kicker">Reader gate</p>
          <h2>Unlock portfolio</h2>
          <p className="login-card__copy">
            Enter any username and the shared password to continue.
          </p>

          <label className="login-field" htmlFor="login-username">
            <span>Username</span>
            <input
              id="login-username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Recruiter or hiring team"
            />
          </label>

          <label className="login-field" htmlFor="login-password">
            <span>Password</span>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Shared reader password"
            />
          </label>

          {query?.error === "1" && (
            <p className="login-card__error" role="alert">
              Password is incorrect. Please try again.
            </p>
          )}

          <button className="btn-primary login-card__submit" type="submit">
            Enter portfolio
          </button>

          <p className="login-card__note">
            Access is stored only in this browser for 14 days. This site does
            not create accounts or store login records in a database.
          </p>
        </form>
      </section>
    </main>
  );
}
