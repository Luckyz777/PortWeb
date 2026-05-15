import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg-text" aria-hidden="true">ENGINEER</div>
      <div className="hero-frame">
        <div className="corner-bracket tl" aria-hidden="true" />
        <div className="corner-bracket br" aria-hidden="true" />

        <div className="hero-eyebrow">Mechanical Engineer &amp; Software Developer</div>

        <h1 id="hero-title" className="hero-name">
          Building<br />
          Software for<br />
          the <span className="accent">Factory</span><br />
          Floor.
        </h1>

        <p className="hero-title">
          Where precision engineering meets clean code.
        </p>

        <p className="hero-desc">
          I&rsquo;m a Mechanical Engineering graduate from SUT with internship experience at{" "}
          <strong>Global-Thaixon Precision Industry</strong>. I build Python and web tools that
          solve real shop-floor problems &mdash; from G-code checking to fixture tracking.
        </p>

        <div className="hero-ctas">
          <a className="btn-primary" href="#projects">
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a className="btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn-secondary" href={profile.cv} target="_blank" rel="noreferrer">
            CV / Resume
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <span className="stat-num">3</span>
            <span className="stat-label">Apps Built</span>
          </div>
          <div>
            <span className="stat-num">ME</span>
            <span className="stat-label">Engineering Degree</span>
          </div>
          <div>
            <span className="stat-num">2026</span>
            <span className="stat-label">Available From</span>
          </div>
        </div>
      </div>
    </section>
  );
}
