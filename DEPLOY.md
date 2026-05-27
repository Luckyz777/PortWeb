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

## Environment variables

### Contact form (optional SMTP)
The Contact form uses `/api/contact` and can send emails via SMTP.

- `CONTACT_EMAIL_DISABLED` (recommended for local/dev and e2e):
  - set to `"true"` to disable real email sending (API returns success without sending)
- `SMTP_HOST`: SMTP server host (e.g. `smtp.gmail.com`)
- `SMTP_PORT`: SMTP port (defaults to `587`)
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password or app password
- `CONTACT_TO_EMAIL` (optional): destination email (defaults to `profile.email` in `data/portfolio.ts`)
- `CONTACT_FROM_EMAIL` (optional): "from" email override (defaults to `SMTP_USER`)

### Validation timing (optional hardening)
- `CONTACT_MIN_SUBMIT_MS` (optional, default `2000`):
  - minimum time between page load and submit to reduce basic bot/spam
