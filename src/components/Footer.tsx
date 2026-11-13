import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mountain, MapPin } from "lucide-react";
import { scrollToSection } from "./scroll";

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const go = (id: string) => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 120);
    } else scrollToSection(id);
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo logo-light">
            <Mountain size={22} />
            <span>Gîte à Dorres</span>
          </div>
          <p className="footer-text">
            Maison de charme pour 10 personnes, au cœur de la Cerdagne.
          </p>
          <p className="footer-text">
            <MapPin size={14} style={{ verticalAlign: "-2px" }} /> Dorres, Cerdagne (66760)
          </p>
        </div>
        <div>
          <h4>Rubriques</h4>
          <ul>
            <li><button onClick={() => go("maison")}>La Maison</button></li>
            <li><button onClick={() => go("chambres")}>Les Chambres</button></li>
            <li><button onClick={() => go("environs")}>Dorres & Environs</button></li>
            <li><button onClick={() => go("contact")}>Contact</button></li>
          </ul>
        </div>
        <div>
          <h4>Séjour</h4>
          <ul>
            <li><button onClick={() => go("livre-dor")}>Livre d'or</button></li>
            <li><Link to="/guides">Livret d'accueil</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Gîte à Dorres — Cerdagne, Pyrénées-Orientales
      </div>
    </footer>
  );
}
