// Avec HashRouter, les ancres (#maison) entrent en conflit avec le routeur :
// on gère donc le défilement vers les sections à la main.
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
