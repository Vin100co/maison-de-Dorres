import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const base = import.meta.env.BASE_URL;
export const photo = (name: string) => `${base}photos/${name}`;

const photos = [
  { src: "living.jpg", alt: "Grande pièce de vie avec poutres, poêle à granulés et baies vitrées" },
  { src: "hero.jpg", alt: "Façade du gîte et son grand jardin" },
  { src: "garden.jpg", alt: "Le jardin arboré avec vue sur les montagnes" },
  { src: "room1.jpg", alt: "Chambre double lumineuse" },
  { src: "room_children.jpg", alt: "Dortoir des enfants" },
  { src: "bathroom.jpg", alt: "Salle de bains avec douche à l'italienne" },
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i! + 1) % photos.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i! - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <>
      <div className="gallery">
        {photos.map((p, i) => (
          <button key={p.src} className="gallery-item" onClick={() => setIndex(i)} aria-label={p.alt}>
            <img src={photo(p.src)} alt={p.alt} loading="lazy" />
          </button>
        ))}
      </div>
      {index !== null && (
        <div className="lightbox" onClick={() => setIndex(null)} role="dialog" aria-modal="true">
          <button className="lb-btn lb-close" onClick={() => setIndex(null)} aria-label="Fermer">
            <X size={28} />
          </button>
          <button
            className="lb-btn lb-prev"
            onClick={(e) => { e.stopPropagation(); setIndex((index - 1 + photos.length) % photos.length); }}
            aria-label="Précédente"
          >
            <ChevronLeft size={32} />
          </button>
          <img src={photo(photos[index].src)} alt={photos[index].alt} onClick={(e) => e.stopPropagation()} />
          <button
            className="lb-btn lb-next"
            onClick={(e) => { e.stopPropagation(); setIndex((index + 1) % photos.length); }}
            aria-label="Suivante"
          >
            <ChevronRight size={32} />
          </button>
          <p className="lb-caption">{photos[index].alt}</p>
        </div>
      )}
    </>
  );
}
