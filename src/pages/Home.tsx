import { useState } from "react";
import {
  Users, BedDouble, Trees, Flame, Gamepad2, Snowflake, Sofa, Utensils, Home as HomeIcon,
  Bath, Droplets, MapPin, Sun, Mountain, Footprints, Phone, ShowerHead,
} from "lucide-react";
import Gallery, { photo } from "../components/Gallery";
import GuestBook from "../components/GuestBook";
import ContactForm from "../components/ContactForm";
import { scrollToSection } from "../components/scroll";

const highlights = [
  { icon: Users, label: "10 voyageurs" },
  { icon: BedDouble, label: "4 chambres" },
  { icon: Trees, label: "Grand jardin" },
  { icon: Flame, label: "Poêle à granulés" },
  { icon: Gamepad2, label: "Ping-pong" },
  { icon: Snowflake, label: "Proche stations" },
];

const equipments = [
  {
    title: "Espace de vie",
    icon: Sofa,
    items: ["Poêle à granulés", "Salon spacieux", "Cuisine tout équipée"],
  },
  {
    title: "Extérieur & Loisirs",
    icon: Trees,
    items: ["Grand jardin arboré", "Terrasse aménagée", "Table de ping-pong dans le garage"],
  },
  {
    title: "Sanitaires",
    icon: Bath,
    items: ["2 salles de bains (dont 1 avec WC)", "1 WC indépendant"],
  },
];

const rooms = [
  {
    title: "Chambre double n°1",
    text: "Un grand lit double confortable, des boiseries chaleureuses et une fenêtre ouverte sur la verdure.",
    img: "room1.jpg",
  },
  {
    title: "Chambre double n°2",
    text: "Sous les combles, une chambre lumineuse et apaisante pour un sommeil réparateur.",
    img: "room2.jpg",
  },
  {
    title: "Chambre double n°3",
    text: "Lit double, tables de chevet et ambiance bois et lumière, comme dans tout le gîte.",
    img: "room1.jpg",
  },
  {
    title: "Dortoir des enfants",
    text: "4 lits simples dans une grande pièce sous charpente, avec coin jeux : le royaume des petits.",
    img: "room_children.jpg",
  },
];

type Tab = "near" | "winter" | "summer";

const tabs: { id: Tab; label: string; icon: typeof Sun }[] = [
  { id: "near", label: "À deux pas", icon: Droplets },
  { id: "winter", label: "En Hiver", icon: Snowflake },
  { id: "summer", label: "En Été", icon: Sun },
];

const tabContent: Record<Tab, { title: string; text: string; points: { icon: typeof Sun; text: string }[] }> = {
  near: {
    title: "Les Bains Romains de Dorres",
    text: "À deux pas du gîte, les célèbres bains romains de Dorres offrent des bassins d'eau chaude sulfureuse en plein air, face aux montagnes. Une parenthèse de détente, été comme hiver.",
    points: [
      { icon: Droplets, text: "Eaux chaudes sulfureuses en plein air" },
      { icon: Mountain, text: "Vue dégagée sur les Pyrénées" },
      { icon: MapPin, text: "À quelques minutes du gîte" },
    ],
  },
  winter: {
    title: "Ski & neige",
    text: "La Cerdagne est un paradis pour les amateurs de glisse : plusieurs stations accessibles pour la journée, puis retour au chaud pour une soirée au coin du poêle.",
    points: [
      { icon: Snowflake, text: "Font-Romeu à 25 min" },
      { icon: Snowflake, text: "La Molina (Espagne) à 30 min" },
      { icon: Snowflake, text: "Porté-Puymorens à 39 min" },
      { icon: Flame, text: "Soirées au coin du poêle" },
    ],
  },
  summer: {
    title: "Nature & randonnée",
    text: "Dès les beaux jours, la Cerdagne se découvre à pied : lacs, estives et sommets, avec un air pur et un ciel exceptionnellement lumineux.",
    points: [
      { icon: Footprints, text: "Départs de randonnées depuis le village" },
      { icon: Trees, text: "Grand jardin au calme" },
      { icon: Sun, text: "Grand air et lumière de la Cerdagne" },
    ],
  },
};

export default function Home() {
  const [tab, setTab] = useState<Tab>("near");
  const t = tabContent[tab];

  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${photo("hero.jpg")})` }}>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>Votre gîte de charme à Dorres pour 10 personnes</h1>
          <p>Entre nature, ski et bains romains — Idéal pour 2 familles, été comme hiver</p>
          <button className="btn btn-primary btn-lg" onClick={() => scrollToSection("contact")}>
            Demander les disponibilités
          </button>
        </div>
        <div className="highlights">
          <div className="container highlights-inner">
            {highlights.map(({ icon: Icon, label }) => (
              <div className="highlight" key={label}>
                <Icon size={20} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAISON */}
      <section id="maison" className="section">
        <div className="container">
          <h2>La Maison & Les Équipements</h2>
          <div className="two-col">
            <div>
              <p className="lead">
                Au cœur du gîte, une grande pièce de vie lumineuse sous de belles poutres apparentes.
                Le poêle à granulés crée une atmosphère chaleureuse dès les premiers froids, la grande
                table en bois accueille tout le monde pour les repas, et les baies vitrées s'ouvrent
                directement sur la terrasse et le jardin.
              </p>
              <p>
                Pensée pour deux familles, la maison réunit confort, espace et simplicité : de quoi
                profiter de la montagne en été comme en hiver.
              </p>
            </div>
            <img className="rounded shadow" src={photo("living.jpg")} alt="Pièce de vie du gîte" loading="lazy" />
          </div>

          <div className="cards-3">
            {equipments.map(({ title, icon: Icon, items }) => (
              <div className="card" key={title}>
                <Icon className="card-icon" size={28} />
                <h3>{title}</h3>
                <ul className="check-list">
                  {items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="sub-title">En images</h3>
          <Gallery />
        </div>
      </section>

      {/* CHAMBRES */}
      <section id="chambres" className="section section-alt">
        <div className="container">
          <h2>Les Chambres</h2>
          <p className="section-intro">
            Une configuration idéale pour 2 familles : 3 chambres doubles et un dortoir de 4 lits simples pour 10 voyageurs.
          </p>
          <div className="cards-4">
            {rooms.map((r) => (
              <div className="room-card" key={r.title}>
                <img src={photo(r.img)} alt={r.title} loading="lazy" />
                <div className="room-body">
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="info-bar">
            <ShowerHead size={20} />
            <span>2 salles de bains (dont 1 avec WC) + 1 WC indépendant</span>
          </div>
        </div>
      </section>

      {/* ENVIRONS */}
      <section id="environs" className="section">
        <div className="container">
          <h2>Dorres & La Cerdagne : 4 saisons</h2>
          <div className="tabs" role="tablist">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                className={`tab ${tab === id ? "active" : ""}`}
                onClick={() => setTab(id)}
              >
                <Icon size={18} /> {label}
              </button>
            ))}
          </div>
          <div className="tab-panel two-col">
            <div>
              <h3>{t.title}</h3>
              <p className="lead">{t.text}</p>
              <ul className="point-list">
                {t.points.map(({ icon: Icon, text }) => (
                  <li key={text}><Icon size={20} /> {text}</li>
                ))}
              </ul>
            </div>
            <img className="rounded shadow" src={photo("garden.jpg")} alt="Vue sur les montagnes depuis le jardin" loading="lazy" />
          </div>
        </div>
      </section>

      {/* LIVRE D'OR */}
      <section id="livre-dor" className="section section-alt">
        <div className="container">
          <h2>Livre d'or & Avis des voyageurs</h2>
          <GuestBook />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact & Demande de réservation</h2>
          <div className="two-col contact-grid">
            <div className="card">
              <h3>Infos pratiques</h3>
              <ul className="point-list">
                <li><MapPin size={20} /> Dorres, Cerdagne — Pyrénées-Orientales (66760)</li>
                <li><HomeIcon size={20} /> Maison indépendante avec grand jardin et terrasse</li>
                <li><Users size={20} /> Jusqu'à 10 personnes — 3 chambres doubles + 1 dortoir de 4 lits</li>
                <li><Utensils size={20} /> Cuisine tout équipée, poêle à granulés</li>
                <li><Snowflake size={20} /> Font-Romeu 25 min · La Molina 30 min · Porté-Puymorens 39 min</li>
                <li><Phone size={20} /> Réponse sous 24 h à votre demande</li>
              </ul>
              <p className="hint">Accès : depuis Perpignan ou Toulouse, rejoignez la Cerdagne puis Dorres, village proche de Font-Romeu.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
