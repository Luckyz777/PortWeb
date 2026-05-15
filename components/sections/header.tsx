import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav-frame" aria-label="Primary">
        <a className="nav-logo" href="#top" aria-label="Home">
          Anirut<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#prototype">Prototype</a>
          <a href="#profile">About</a>
          <a href="#skills">Skills</a>
        </div>
        <a className="nav-cta" href="#contact">Get In Touch</a>
        <MobileNav />
      </nav>
    </header>
  );
}
