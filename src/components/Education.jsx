import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="section tint">
      <div className="container">
        <p className="eyebrow">Education</p>
        <h2 className="mb-5">Where I studied</h2>
        <div className="row g-3">
          {education.map((e) => (
            <div className="col-sm-6 col-lg-3" key={e.title}>
              <div className="edu-card reveal">
                <span className="edu-year">{e.year}</span>
                <h3>{e.title}</h3>
                {e.school && <p>{e.school}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
