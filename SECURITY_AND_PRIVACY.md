# Security and Privacy Notes

This portfolio is public by default, but project case-study articles under
`/projects/*` are intentionally protected for recruiter review.

## Current Protections

- Project articles require a shared reader password before content is rendered.
- Access is stored in an HTTP-only cookie scoped to `/projects`.
- Project article routes send `X-Robots-Tag: noindex, nofollow, noarchive, noimageindex`.
- Project articles are removed from `sitemap.xml`.
- `robots.txt` blocks `/projects/`, `/api/`, and common AI crawlers.
- API responses are marked `no-store` and `noindex`.
- Basic security headers are configured in `next.config.mjs`:
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Frame-Options: SAMEORIGIN`
  - `Permissions-Policy` for camera, microphone, geolocation, and FLoC.

## Important Limits

- A shared password is access control, not strong identity management.
- `robots.txt` and AI crawler blocks are voluntary. Respectful crawlers follow
  them; malicious scrapers can ignore them.
- Public assets in `/public` are still directly accessible if someone knows the
  URL. Do not place confidential source files, NDA content, or private company
  documents there.
- If the repository is public, do not rely on default secrets. Set production
  values in Vercel environment variables.

## Production Environment Variables

```txt
ARTICLE_PASSWORD=lucky101
ARTICLE_AUTH_SECRET=<long-random-secret>
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Use a long random `ARTICLE_AUTH_SECRET` in production so readers cannot forge
the access cookie.

## Analytics

Google Analytics is enabled only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
The site sends client-side page views on route changes and does not store user
accounts or form submissions in a database.
