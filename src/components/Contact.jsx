import { profile } from "../data";

export default function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phoneLink}` },
    { label: "Location", value: profile.location },
  ];
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row gy-5 align-items-end">
          <div className="col-lg-7 reveal">
            <p className="eyebrow">Contact</p>
            <h2>Have a role or a problem that needs solving?</h2>
            <a className="btn btn-accent mt-3" href={`mailto:${profile.email}`}>
              Email {profile.firstName}
            </a>
          </div>
          <div className="col-lg-5 reveal">
            <dl className="contact-list">
              {items.map((i) => (
                <div key={i.label}>
                  <dt>{i.label}</dt>
                  <dd>{i.href ? <a href={i.href}>{i.value}</a> : i.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
