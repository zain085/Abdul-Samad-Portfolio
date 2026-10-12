
import { profile } from "../data";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const items = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phoneLink}`,
    },
    {
      label: "Location",
      value: profile.location,
    },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: profile.linkedIn,
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      href: profile.github,
      icon: FaGithub,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row gy-5 align-items-end">
          <div className="col-lg-7 reveal">
            <p className="eyebrow">Contact</p>
            <h2>Have a role or a problem that needs solving?</h2>

            <a
              className="btn btn-accent mt-3"
              href={`mailto:${profile.email}`}
            >
              Email {profile.firstName}
            </a>
          </div>

          <div className="col-lg-5 reveal">
            <dl className="contact-list">
              {items.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="contact-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="contact-social-link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
