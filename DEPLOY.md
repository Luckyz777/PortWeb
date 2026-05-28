# Deploy public portfolio with public source code

Recommended setup for this portfolio:

1. Keep this project in the GitHub repository `Luckyz777/PortWeb`.
2. The repository can be public so recruiters can inspect the source code.
3. Deploy the project through Vercel using the linked GitHub repository or Vercel CLI.
4. Use the public Vercel URL as the portfolio link.

Result:

- Visitors can open the portfolio through a public Vercel link.
- Visitors can also open the GitHub repositories linked from each project.
- Frontend assets loaded by the browser, such as HTML, CSS, JS, and images, are always inspectable in normal web apps.

Do not push the entire `Downloads` folder to GitHub. Push only this `industrial-portfolio` project folder.

## Contact form (Vercel / Node hosting)

The contact form posts to `/api/contact` and sends mail through SMTP. This route does **not** work on static export (for example GitHub Pages with `GITHUB_PAGES=true`). Use Vercel or another Node-capable host for a working form.

Set these environment variables in the hosting dashboard (or `.env.local` for local dev):

| Variable | Required | Description |
|----------|----------|-------------|
| `SMTP_HOST` | Yes* | SMTP server hostname |
| `SMTP_PORT` | Yes* | SMTP port (often `587` or `465`) |
| `SMTP_USER` | Yes* | SMTP username |
| `SMTP_PASS` | Yes* | SMTP password or app password |
| `CONTACT_TO_EMAIL` | No | Inbox that receives submissions (defaults to `SMTP_USER`) |
| `CONTACT_FROM_EMAIL` | No | From address on outbound mail (defaults to `SMTP_USER`) |
| `CONTACT_EMAIL_DISABLED` | No | Set to `true` to skip sending mail (dev / e2e) |
| `CONTACT_MIN_SUBMIT_MS` | No | Minimum ms after form load before accept (default `2000`, bot timing) |
| `NEXT_PUBLIC_BASE_PATH` | No | Base path prefix when deployed under a subpath (GitHub Pages) |

\* Not required when `CONTACT_EMAIL_DISABLED=true`.

For local testing without SMTP, create `.env.local`:

```
CONTACT_EMAIL_DISABLED=true
CONTACT_MIN_SUBMIT_MS=0
```

## Private project articles and analytics

Project case-study pages under `/projects/*` require a shared reader password before content is rendered. This is designed for recruiter review without adding a database.

Set these variables in Vercel:

| Variable | Required | Description |
|----------|----------|-------------|
| `ARTICLE_PASSWORD` | No | Shared reader password. Defaults to `lucky101` if unset. |
| `ARTICLE_AUTH_SECRET` | Recommended | Long random value used to sign the access cookie. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID, for example `G-XXXXXXXXXX`. |

Notes:
- `/projects/*` is excluded from `sitemap.xml` and marked `noindex`.
- `robots.txt` blocks `/projects/`, `/api/`, and common AI crawlers.
- These crawler rules are advisory. Do not publish confidential company data in `public/` or in public source code.
