export const ARTICLE_ACCESS_COOKIE = "anirut_site_access";
export const ARTICLE_ACCESS_ERROR_COOKIE = "anirut_site_access_error";
export const ARTICLE_ACCESS_MAX_AGE_SECONDS = 60 * 60 * 24 * 14;

export function getArticlePassword(): string {
  return process.env.ARTICLE_PASSWORD ?? "lucky101";
}

export function getArticleAuthSecret(): string {
  return process.env.ARTICLE_AUTH_SECRET ?? `${getArticlePassword()}:industrial-portfolio`;
}
