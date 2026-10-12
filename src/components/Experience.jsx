import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section tint">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2 className="mb-5">Where I've worked</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article className={`job reveal ${job.current ? "current" : ""}`} key={job.company}>
              <div className="job-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="job-co">
                    {job.company}
                    {job.detail && <span> · {job.detail}</span>}
                  </p>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
