import { NextResponse, type NextRequest } from "next/server";

import {
  ARTICLE_ACCESS_COOKIE,
  ARTICLE_ACCESS_MAX_AGE_SECONDS,
  getArticleAuthSecret,
} from "@/lib/access-constants";

function bytesToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function signEdge(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(getArticleAuthSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return bytesToHex(signature);
}

async function verifyAccessToken(value: string | undefined): Promise<boolean> {
  if (!value) return false;

  const parts = value.split(".");
  if (parts.length !== 3) return false;

  const [version, issuedAt, signature] = parts;
  if (version !== "v1" || !issuedAt || !signature) return false;

  const issuedAtMs = Number.parseInt(issuedAt, 36);
  if (!Number.isFinite(issuedAtMs)) return false;

  const ageMs = Date.now() - issuedAtMs;
  if (ageMs < 0 || ageMs > ARTICLE_ACCESS_MAX_AGE_SECONDS * 1000) return false;

  const expected = await signEdge(`${version}.${issuedAt}`);
  return expected === signature;
}

function loginUrl(request: NextRequest): URL {
  const url = request.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  url.searchParams.set("next", `${request.nextUrl.pathname}${request.nextUrl.search}`);
  return url;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasAccess = await verifyAccessToken(
    request.cookies.get(ARTICLE_ACCESS_COOKIE)?.value,
  );

  if (pathname === "/login" || pathname === "/logout") {
    return NextResponse.next();
  }

  if (!hasAccess) {
    return NextResponse.redirect(loginUrl(request));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)",
  ],
};
