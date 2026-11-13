import { FormEvent, useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  period: string;
  comment: string;
}

const initial: Review[] = [
  {
    name: "Famille Martin",
    rating: 5,
    period: "Février 2025",
    comment:
      "Un séjour parfait avec nos amis et leurs enfants. Le poêle, la grande table et les poutres : on s'y sent tout de suite bien. Font-Romeu à deux pas, et les Bains Romains pour finir la journée, quel bonheur !",
  },
  {
    name: "Sophie & Julien",
    rating: 5,
    period: "Août 2024",
    comment:
      "Maison très confortable, jardin immense où les enfants ont passé leurs journées. Nous avons adoré les randonnées au départ du village. Le livret d'accueil avec les QR codes est une excellente idée.",
  },
  {
    name: "Famille Roca",
    rating: 4,
    period: "Décembre 2024",
    comment:
      "Idéal pour réunir deux familles. Le dortoir des enfants a fait un triomphe, et les soirées au coin du poêle étaient magiques. Nous reviendrons !",
  },
];

function Stars({ value, size = 18 }: { value: number; size?: number }) {
  return (
    <span className="stars" aria-label={`${value} sur 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={size} fill={n <= value ? "currentColor" : "none"} />
      ))}
    </span>
  );
}

export default function GuestBook() {
  const [reviews, setReviews] = useState<Review[]>(initial);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [period, setPeriod] = useState("");
  const [comment, setComment] = useState("");
  const [thanks, setThanks] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    setReviews([{ name: name.trim(), rating, period: period.trim() || "Séjour récent", comment: comment.trim() }, ...reviews]);
    setName("");
    setPeriod("");
    setComment("");
    setRating(5);
    setThanks(true);
    setTimeout(() => setThanks(false), 5000);
  };

  return (
    <>
      <div className="reviews">
        {reviews.map((r, i) => (
          <article className="review-card" key={`${r.name}-${i}`}>
            <Stars value={r.rating} />
            <p className="review-text">« {r.comment} »</p>
            <div className="review-meta">
              <strong>{r.name}</strong>
              <span>{r.period}</span>
            </div>
          </article>
        ))}
      </div>

      <form className="card form" onSubmit={submit}>
        <h3>Laissez-nous un mot</h3>
        {thanks && (
          <div className="notice">
            <CheckCircle2 size={18} /> Merci pour votre avis, il est maintenant dans notre livre d'or !
          </div>
        )}
        <div className="form-row">
          <label>
            Prénom / Nom
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Période du séjour
            <input value={period} onChange={(e) => setPeriod(e.target.value)} placeholder="ex. Janvier 2026" />
          </label>
        </div>
        <div className="rating-input">
          <span>Votre note</span>
          <div onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                type="button"
                key={n}
                className="star-btn"
                onMouseEnter={() => setHover(n)}
                onClick={() => setRating(n)}
                aria-label={`${n} étoile${n > 1 ? "s" : ""}`}
              >
                <Star size={28} fill={n <= (hover || rating) ? "currentColor" : "none"} />
              </button>
            ))}
          </div>
        </div>
        <label>
          Votre commentaire
          <textarea rows={4} value={comment} onChange={(e) => setComment(e.target.value)} required />
        </label>
        <button className="btn btn-primary" type="submit">Publier mon avis</button>
        <p className="hint">
          Les avis ajoutés ici restent visibles pendant votre visite (ils ne sont pas enregistrés
          sur un serveur).
        </p>
      </form>
    </>
  );
}
