import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

// ─── Pour recevoir les demandes par e-mail ───
// 1. Créez un formulaire gratuit sur https://formspree.io (ou https://web3forms.com)
// 2. Collez l'URL d'envoi ci-dessous, ex. "https://formspree.io/f/xxxxxxxx"
// Tant que cette valeur est vide, le formulaire affiche seulement la confirmation.
const FORM_ENDPOINT = "";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setError("");
    if (FORM_ENDPOINT) {
      setLoading(true);
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        if (!res.ok) throw new Error();
      } catch {
        setError("L'envoi a échoué. Merci de réessayer ou de nous contacter directement.");
        setLoading(false);
        return;
      }
      setLoading(false);
    }
    setSent(true);
    form.reset();
  };

  if (sent) {
    return (
      <div className="card form success">
        <CheckCircle2 size={44} />
        <h3>Demande envoyée !</h3>
        <p>Merci, nous revenons vers vous très vite pour confirmer les disponibilités.</p>
        <button className="btn btn-outline" onClick={() => setSent(false)}>Envoyer une autre demande</button>
      </div>
    );
  }

  return (
    <form className="card form" onSubmit={submit}>
      <h3>Demande de réservation</h3>
      <div className="form-row">
        <label>Nom<input name="nom" required /></label>
        <label>Email<input name="email" type="email" required /></label>
      </div>
      <div className="form-row">
        <label>Téléphone<input name="telephone" type="tel" /></label>
        <span />
      </div>
      <div className="form-row">
        <label>Date d'arrivée<input name="arrivee" type="date" required /></label>
        <label>Date de départ<input name="depart" type="date" required /></label>
      </div>
      <div className="form-row">
        <label>Adultes<input name="adultes" type="number" min={1} max={10} defaultValue={4} /></label>
        <label>Enfants<input name="enfants" type="number" min={0} max={10} defaultValue={0} /></label>
      </div>
      <label>Message<textarea name="message" rows={4} /></label>
      {error && <p className="error">{error}</p>}
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Envoi…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
