import { profile, navLinks } from "../data";

export default function Navbar() {
  const close = () => document.getElementById("nav")?.classList.remove("show");
  return (
    <header className="site-nav">
      <nav className="navbar navbar-expand-lg container" aria-label="Main">
        <a className="brand" href="#top">
          <span>{profile.firstName}</span> {profile.lastName}<span>.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {navLinks.map((l) => (
              <li className="nav-item" key={l.id}>
                <a className="nav-link" href={`#${l.id}`} onClick={close}>{l.label}</a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a className="btn btn-ink btn-sm" href={profile.cv} download>Download CV</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
