import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Mountain } from "lucide-react";
import { scrollToSection } from "./scroll";

const links = [
  { label: "La Maison", id: "maison" },
  { label: "Les Chambres", id: "chambres" },
  { label: "Dorres & Environs", id: "environs" },
  { label: "Livre d'or", id: "livre-dor" },
  { label: "Livret d'accueil", to: "/guides" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const go = (item: { id?: string; to?: string }) => {
    setOpen(false);
    if (item.to) {
      navigate(item.to);
      return;
    }
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(item.id!), 120);
    } else {
      scrollToSection(item.id!);
    }
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <Mountain size={22} />
          <span>Gîte à Dorres</span>
        </Link>
        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map((l) => (
            <button key={l.label} className="nav-link" onClick={() => go(l)}>
              {l.label}
            </button>
          ))}
          <button className="btn btn-primary nav-cta-mobile" onClick={() => go({ id: "contact" })}>
            Réserver / Contact
          </button>
        </nav>
        <button className="btn btn-primary header-cta" onClick={() => go({ id: "contact" })}>
          Réserver / Contact
        </button>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
