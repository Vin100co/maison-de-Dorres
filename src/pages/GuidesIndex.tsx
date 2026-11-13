import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Flame, ChefHat, Wifi, Thermometer, Snowflake, DoorOpen, ChevronRight } from "lucide-react";
import { guides, Guide } from "../data/guides";

export const guideIcons: Record<Guide["icon"], typeof Flame> = {
  flame: Flame,
  chef: ChefHat,
  wifi: Wifi,
  thermo: Thermometer,
  ski: Snowflake,
  door: DoorOpen,
};

export default function GuidesIndex() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const list = guides.filter((g) => !query || `${g.title} ${g.summary}`.toLowerCase().includes(query));

  return (
    <div className="page-top">
      <div className="container">
        <h1 className="page-title">Bienvenue à la maison</h1>
        <p className="section-intro">Guides & Notices — tout ce qu'il faut savoir pour profiter du gîte.</p>
        <div className="search">
          <Search size={20} />
          <input
            type="search"
            placeholder="Rechercher (poêle, wifi, ski…)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div className="guide-grid">
          {list.map((g) => {
            const Icon = guideIcons[g.icon];
            return (
              <Link to={`/guides/${g.slug}`} className="guide-card" key={g.slug}>
                <Icon size={34} />
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.summary}</p>
                </div>
                <ChevronRight size={22} className="chev" />
              </Link>
            );
          })}
          {list.length === 0 && <p>Aucun guide ne correspond à votre recherche.</p>}
        </div>
      </div>
    </div>
  );
}
