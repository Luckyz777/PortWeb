import { profile } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="section-inner">
        <div className="section-tag">Get In Touch</div>
        <h2 id="contact-heading" className="section-heading">
          Available From<br />May 2026.
        </h2>
        <p className="section-subheading">
          Looking for entry-level roles in process engineering, manufacturing software, CNC automation, or industrial application development.
        </p>
        <div className="contact-grid">
          <div className="contact-panel">
            <h3>Direct contact</h3>
            <div className="contact-list">
              <div>
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div>
                <span>Phone</span>
                <a href="tel:+66981186694">{profile.phone}</a>
              </div>
              <div>
                <span>Location</span>
                <p>{profile.location}</p>
              </div>
              <div>
                <span>Status</span>
                <p>{profile.status}</p>
              </div>
            </div>
          </div>
          <div className="contact-panel">
            <h3>Portfolio links</h3>
            <div className="contact-list">
              <div>
                <span>GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer">github.com/Luckyz777</a>
              </div>
              <div>
                <span>CV / Resume</span>
                <a href={profile.cv} target="_blank" rel="noreferrer">View on Canva</a>
              </div>
              <div>
                <span>Download</span>
                <a href="/anirut-resume.pdf" download>Resume PDF</a>
              </div>
              <div>
                <span>Repositories</span>
                <a href="https://github.com/Luckyz777/GT-ACT" target="_blank" rel="noreferrer">GT-ACT</a>
                <a href="https://github.com/Luckyz777/GT-PATH" target="_blank" rel="noreferrer">GT-PATH</a>
                <a href="https://github.com/Luckyz777/GT-FIXSYS" target="_blank" rel="noreferrer">GT-FIXSYS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
