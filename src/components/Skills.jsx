import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow">Expertise</p>
        <h2 className="mb-5">What I work with</h2>
        <div className="row g-4">
          {skills.map((g, i) => (
            <div className={i === 0 ? "col-lg-6" : "col-md-6 col-lg-3"} key={g.group}>
              <div className={`skill-card reveal ${i === 0 ? "primary" : ""}`}>
                <h3>{g.group}</h3>
                <p>{g.description}</p>
                <ul className="tags">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
