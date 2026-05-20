import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Anirut Butnongwa",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__code" aria-hidden="true">404</div>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__desc">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved. Let&rsquo;s get you back to the work.
      </p>
      <Link href="/" className="btn-primary" style={{ marginTop: "1rem" }}>
        Back to Portfolio
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </Link>
    </main>
  );
}
