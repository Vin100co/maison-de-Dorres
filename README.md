# Gîte à Dorres (Cerdagne)

Site vitrine + livret d'accueil, en Vite + React (SPA statique), prêt pour GitHub Pages.

## Lancer

```bash
npm install
npm run dev        # développement
npm run build      # génère le dossier dist/ (fichiers statiques)
```

## Points techniques

- `HashRouter` : les liens QR code ont la forme `https://.../#/guides/poele` et ne donnent jamais de 404.
- `vite.config.ts` avec `base: "./"` : fonctionne quel que soit le nom du dépôt.
- Photos dans `public/photos/` (remplacez-les en gardant les mêmes noms, ou modifiez `Gallery.tsx` / `Home.tsx`).

## À personnaliser

- Livret d'accueil et vidéos YouTube : `src/data/guides.ts` (champ `video`, URL de type `https://www.youtube.com/embed/XXXX`).
- Réception des demandes de réservation : renseigner `FORM_ENDPOINT` dans `src/components/ContactForm.tsx` (Formspree ou Web3Forms).
- Nom du Wi-Fi, emplacement des conteneurs : textes d'exemple dans `guides.ts` à remplacer.

## Déployer sur GitHub Pages

Poussez le dossier `dist/` sur la branche `gh-pages`, ou utilisez une GitHub Action qui lance `npm run build` puis publie `dist/`.
