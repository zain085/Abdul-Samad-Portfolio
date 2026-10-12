
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="section tint education-section">
      <div className="container">
        <div className="education-heading reveal">
          <p className="eyebrow">Education & Qualifications</p>
          <h2 className="mb-3">My Learning Journey</h2>
          <p className="education-intro">
            Building a strong foundation through academic studies,
            software engineering, and personal development.
          </p>
        </div>

        <div className="row g-4 education-grid">
          {education.map((e, index) => (
            <div className="col-sm-6 col-lg-4" key={e.title}>
              <article
                className={`edu-card reveal ${
                  index === 0 ? "edu-card-current" : ""
                }`}
                style={{ "--edu-index": index }}
              >
                <div className="edu-card-top">
                  <span className="edu-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`edu-status ${
                      index === 0 ? "status-current" : "status-completed"
                    }`}
                  >
                    <span className="status-dot" />
                    {index === 0 ? "In Progress" : "Completed"}
                  </span>
                </div>

                <div className="edu-card-content">
                  <span className="edu-year">{e.year}</span>
                  <h3>{e.title}</h3>

                  {e.school && (
                    <p className="edu-school">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m22 10-10-5L2 10l10 5 10-5Z" />
                        <path d="M6 12v5c3.5 2.5 8.5 2.5 12 0v-5" />
                        <path d="M22 10v6" />
                      </svg>
                      <span>{e.school}</span>
                    </p>
                  )}
                </div>

                <div className="edu-card-footer">
                  <span>
                    {index === 0
                      ? "Currently pursuing"
                      : "Academic milestone"}
                  </span>
                  <span className="edu-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}