// ─────────────────────────────────────────────────────────────
// LIVRET D'ACCUEIL — modifiez ici les textes et collez vos vidéos.
// Pour une vidéo YouTube : mettez l'URL d'intégration dans `video`
//   ex. "https://www.youtube.com/embed/XXXXXXXXXXX"
// Laissez `video: ""` pour afficher un emplacement « vidéo à venir ».
// ─────────────────────────────────────────────────────────────

export interface Guide {
  slug: string;
  title: string;
  summary: string;
  icon: "flame" | "chef" | "wifi" | "thermo" | "ski" | "door";
  video: string;
  steps: string[];
  tip: { title: string; items: string[] };
}

export const guides: Guide[] = [
  {
    slug: "poele",
    title: "Poêle à granulés",
    summary: "Allumage, réglage de la température, rechargement des pellets, nettoyage du creuset.",
    icon: "flame",
    video: "",
    steps: [
      "Vérifiez que le réservoir contient des granulés (trappe sur le dessus du poêle). Les sacs sont rangés dans le garage.",
      "Appuyez sur la touche marche/arrêt du panneau de commande pendant 2 secondes : l'allumage démarre automatiquement (3 à 10 minutes).",
      "Réglez la température souhaitée avec les touches + / − (20 °C est un bon confort).",
      "Pour recharger : poêle éteint ou en marche, versez doucement le sac dans le réservoir sans le remplir à ras bord, puis refermez la trappe.",
      "Chaque matin, poêle froid et éteint, retirez le creuset et videz les cendres dans le seau métallique prévu à cet effet, puis remettez-le bien en place.",
      "Au départ, appuyez de nouveau sur marche/arrêt : le poêle s'éteint et refroidit tout seul.",
    ],
    tip: {
      title: "Bon à savoir / Dépannage",
      items: [
        "Ne touchez pas la vitre ni le corps du poêle pendant le fonctionnement : ils sont très chauds.",
        "Si le poêle affiche une alarme « manque de granulés » : rechargez le réservoir, puis relancez.",
        "Si le poêle ne s'allume pas : vérifiez que le creuset est bien en place et propre.",
        "En cas de doute, contactez-nous : nous répondons rapidement.",
      ],
    },
  },
  {
    slug: "four",
    title: "Four & Plaques de cuisson",
    summary: "Mise en route, sécurité enfant, modes de cuisson, minuterie.",
    icon: "chef",
    video: "",
    steps: [
      "Plaques : touchez la touche ON/OFF, puis sélectionnez le foyer et réglez la puissance de 1 à 9.",
      "Four : tournez le sélecteur sur le mode voulu (chaleur tournante, grill, chaleur statique), puis réglez la température.",
      "Minuterie : appuyez sur la touche horloge, réglez la durée avec + / −, un signal sonore retentit à la fin.",
      "Sécurité enfant : maintenez la touche clé enfoncée 3 secondes pour verrouiller / déverrouiller les commandes.",
      "Après usage, éteignez plaques et four, et laissez le ventilateur refroidir le four.",
    ],
    tip: {
      title: "Bon à savoir / Dépannage",
      items: [
        "Le voyant « H » indique que la plaque est encore chaude.",
        "Si les commandes ne répondent pas, vérifiez que la sécurité enfant n'est pas activée.",
        "Les plaques à induction exigent des casseroles adaptées (aimant collant).",
      ],
    },
  },
  {
    slug: "wifi",
    title: "Wi-Fi & Télévision",
    summary: "Nom du réseau, mot de passe, utilisation de la télévision.",
    icon: "wifi",
    video: "",
    steps: [
      "Le nom du réseau Wi-Fi est : « NOM_DU_RESEAU » (à remplacer par le vôtre).",
      "Le mot de passe est affiché sur la box, à côté de la télévision (à remplacer / compléter).",
      "Pour la télévision : allumez avec la télécommande noire, puis choisissez la source avec la touche « Source ».",
      "Pour regarder une application (Netflix, YouTube…), utilisez le bouton « Home » et connectez votre propre compte.",
      "Pensez à vous déconnecter de vos comptes avant de partir.",
    ],
    tip: {
      title: "Bon à savoir / Dépannage",
      items: [
        "Si le Wi-Fi ne fonctionne plus : débranchez la box 30 secondes, puis rebranchez-la.",
        "Le réseau mobile est parfois limité dans la vallée : le Wi-Fi est le moyen le plus fiable.",
      ],
    },
  },
  {
    slug: "chauffage",
    title: "Chauffage & Eau chaude",
    summary: "Radiateurs par zone, consigne éco pendant les sorties ski.",
    icon: "thermo",
    video: "",
    steps: [
      "Chaque pièce dispose de son radiateur électrique avec thermostat : tournez la molette ou utilisez les touches pour régler la température.",
      "Confort conseillé : 19 °C dans les pièces de vie, 17 °C dans les chambres la nuit.",
      "Lorsque vous partez skier ou randonner pour la journée, baissez les radiateurs sur la position « éco ».",
      "Eau chaude : le ballon est automatique. Prévoyez un temps de remontée en température si 10 personnes se douchent à la suite.",
      "Aérez 10 minutes par jour en grand, plutôt que de laisser les fenêtres entrouvertes.",
    ],
    tip: {
      title: "Bon à savoir / Dépannage",
      items: [
        "Pas d'eau chaude après plusieurs douches ? Patientez environ une heure.",
        "Ne couvrez jamais les radiateurs (séchage de vêtements) : risque de surchauffe.",
      ],
    },
  },
  {
    slug: "garage-loisirs",
    title: "Garage, Ski & Ping-pong",
    summary: "Rangement des skis et chaussures, table de ping-pong, accès au jardin.",
    icon: "ski",
    video: "",
    steps: [
      "Le garage est accessible depuis le jardin. Skis, chaussures et casques se rangent sur les supports prévus pour qu'ils sèchent.",
      "Table de ping-pong : dépliez les deux plateaux, verrouillez les pieds, tendez le filet. Raquettes et balles sont dans le coffre.",
      "Rangez la table repliée contre le mur après usage, pour laisser la place aux skis.",
      "Le grand jardin est à votre disposition : merci de surveiller les enfants et de ranger les jeux à la fin.",
      "Fermez toujours la porte du garage en quittant les lieux.",
    ],
    tip: {
      title: "Bon à savoir / Dépannage",
      items: [
        "Ne rentrez pas les chaussures de ski mouillées dans les chambres : le garage est prévu pour cela.",
        "Attention au sol qui peut être glissant en hiver à l'entrée du garage.",
      ],
    },
  },
  {
    slug: "depart",
    title: "Consignes de départ",
    summary: "Tri sélectif, baisse du chauffage, volets et baies vitrées.",
    icon: "door",
    video: "",
    steps: [
      "Triez vos déchets : les conteneurs de tri se trouvent dans le village de Dorres (indiquez ici l'emplacement exact).",
      "Videz le réfrigérateur et emportez vos denrées périssables.",
      "Éteignez le poêle à granulés et baissez tous les radiateurs au minimum (hors-gel).",
      "Fermez les volets, les fenêtres et les baies vitrées de toutes les pièces.",
      "Lancez le lave-vaisselle, rangez la vaisselle et passez un coup d'éponge sur les plans de travail.",
      "Déposez les clés à l'endroit convenu et fermez la porte à clé.",
    ],
    tip: {
      title: "Bon à savoir / Dépannage",
      items: [
        "Un oubli ? Prévenez-nous simplement, nous ferons au mieux pour vous le renvoyer.",
        "Merci d'avoir séjourné chez nous : n'hésitez pas à laisser un mot dans le livre d'or !",
      ],
    },
  },
];
