export function AboutSection() {
  return (
    <section id="profile" aria-labelledby="profile-heading">
      <div className="section-inner">
        <div className="section-tag">About Me</div>
        <h2 id="profile-heading" className="section-heading">
          Engineer First.<br />Developer By Practice.
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I studied <strong>Mechanical Engineering at Suranaree University of Technology</strong> (graduating May 2026).
              During my internship at Global-Thaixon Precision Industry, I worked with CNC machines,
              setup sheets, fixture workflows, and cycle-time calculations &mdash; and realized most of this
              work could be streamlined with the right software.
            </p>
            <div className="about-highlight">
              &ldquo;I build software around the constraints engineers and operators already work with.&rdquo;
            </div>
            <p>
              So I taught myself Python, built desktop tools with PySide6, learned React and FastAPI,
              and created three working applications that solve problems I personally faced on the production floor.
              I&rsquo;m not a senior developer &mdash; but I am someone who understands both the engineering domain
              and the code needed to automate it.
            </p>
          </div>

          <div>
            <div className="timeline-panel">
              <div className="timeline-item">
                <div className="time">2026</div>
                <h3>Industrial software portfolio</h3>
                <p>Published GT-ACT, GT-PATH, and GT-FIXSYS as open-source case studies.</p>
              </div>
              <div className="timeline-item">
                <div className="time">Internship</div>
                <h3>Global-Thaixon Precision Industry</h3>
                <p>Built manufacturing workflow tools as a process engineering intern.</p>
              </div>
              <div className="timeline-item">
                <div className="time">May 2026</div>
                <h3>Bachelor of Engineering</h3>
                <p>Mechanical Engineering, Suranaree University of Technology.</p>
              </div>
            </div>

            <div className="about-callouts" style={{ marginTop: "20px" }}>
              <div className="callout-card">
                <div className="callout-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                </div>
                <div>
                  <div className="callout-title">Manufacturing Domain</div>
                  <div className="callout-desc">CNC, G-code, jig &amp; fixture, cycle time &mdash; I understand the work because I&rsquo;ve done it.</div>
                </div>
              </div>
              <div className="callout-card">
                <div className="callout-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                </div>
                <div>
                  <div className="callout-title">Self-Taught Developer</div>
                  <div className="callout-desc">Python, PySide6, React, FastAPI &mdash; learned through building real tools, not just coursework.</div>
                </div>
              </div>
              <div className="callout-card">
                <div className="callout-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div>
                  <div className="callout-title">Ready to Contribute</div>
                  <div className="callout-desc">Available from May 2026 for entry-level roles in process engineering, industrial software, or manufacturing tech.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
