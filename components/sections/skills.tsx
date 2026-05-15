import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="section-inner">
        <div className="section-tag">Skill Set</div>
        <h2 id="skills-heading" className="section-heading">
          Two Disciplines.<br />One Stack.
        </h2>
        <p className="section-subheading">
          Combining mechanical engineering fundamentals with practical software development skills.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <section className="skill-panel" key={group.name} aria-labelledby={`skill-${group.name}`}>
              <h3 id={`skill-${group.name}`}>{group.name}</h3>
              <ul>
                {group.items.map(([name, tool]) => (
                  <li key={name}>
                    <span>{name}</span>
                    <code>{tool}</code>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Language Proficiency */}
          <section className="skill-panel" aria-labelledby="skill-Languages">
            <h3 id="skill-Languages">Languages</h3>
            <ul>
              <li><span>Thai</span><code>Native</code></li>
              <li><span>English</span><code>Working proficiency</code></li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
