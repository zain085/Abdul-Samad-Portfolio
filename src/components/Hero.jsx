import { profile, experience } from "../data";

export default function Hero() {
  const path = [...experience].reverse();
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <p className="eyebrow">{profile.location}</p>
            <h1>
              {profile.firstName} <span className="mark">{profile.lastName}</span>
            </h1>
            <p className="hero-role">{profile.role}</p>
            <p className="lead-text">{profile.intro}</p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a className="btn btn-accent" href="#contact">Get in touch</a>
              <a className="btn btn-outline-ink" href="#experience">See my experience</a>
            </div>
          </div>
          <div className="col-lg-5">
            <aside className="path-card" aria-label="Career path">
              <p className="path-title">Career path</p>
              <ol>
                {path.map((e) => (
                  <li key={e.company} className={e.current ? "now" : ""}>
                    <span className="path-period">{e.period}</span>
                    <strong>{e.role}</strong>
                    <span>{e.company}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
