import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Phone, Lightbulb, Video } from "lucide-react";
import { guides } from "../data/guides";
import { scrollToSection } from "../components/scroll";

export default function GuideDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <div className="page-top container">
        <h1 className="page-title">Guide introuvable</h1>
        <Link className="btn btn-outline" to="/guides"><ArrowLeft size={18} /> Retour aux guides</Link>
      </div>
    );
  }

  const contact = () => {
    navigate("/");
    setTimeout(() => scrollToSection("contact"), 150);
  };

  return (
    <div className="page-top">
      <div className="container guide-detail">
        <div className="guide-actions">
          <Link className="btn btn-outline" to="/guides"><ArrowLeft size={18} /> Retour</Link>
          <button className="btn btn-primary" onClick={contact}><Phone size={18} /> Contacter le propriétaire</button>
        </div>

        <h1 className="page-title">{guide.title}</h1>

        <div className="video">
          {guide.video ? (
            <iframe
              src={guide.video}
              title={`Vidéo : ${guide.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="video-placeholder">
              <Video size={40} />
              <p>Vidéo à venir</p>
            </div>
          )}
        </div>

        <h2 className="steps-title">Étapes</h2>
        <ol className="steps">
          {guide.steps.map((s, i) => (
            <li key={i}>
              <span className="step-num">{i + 1}</span>
              <p>{s}</p>
            </li>
          ))}
        </ol>

        <aside className="tip">
          <h3><Lightbulb size={20} /> {guide.tip.title}</h3>
          <ul>
            {guide.tip.items.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </aside>
      </div>
    </div>
  );
}
