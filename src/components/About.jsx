import { profile } from "../data";

export default function About() {
  const [now, before, start] = profile.about;
  const blocks = [
    { label: "Right now", text: now },
    { label: "Before that", text: before },
    { label: "Where I started", text: start },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 reveal">
            <p className="eyebrow">About</p>
            <h2>Technical problem-solving, with a client-facing background.</h2>
            <p className="muted">{profile.summary}</p>
          </div>
          <div className="col-lg-8">
            {blocks.map((b) => (
              <div className="about-row reveal" key={b.label}>
                <h3>{b.label}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
