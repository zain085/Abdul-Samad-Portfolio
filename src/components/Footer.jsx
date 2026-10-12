import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-wrap justify-content-between gap-2">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
