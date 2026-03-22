import { Search, Filter, Share2, Rss, ExternalLink, BookOpen, Target, Cpu, Monitor, Zap, ShieldAlert, Award } from "lucide-react";

export default function Veille() {
  const veilleLinks = [
    { 
      title: "iOS 26.4 : le clavier de l'iPhone est enfin réparé pour les écritures rapides", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Correction majeure d'un bug de latence du clavier natif qui impactait la productivité des utilisateurs intensifs d'iPhone.",
      image: "https://images.unsplash.com/photo-1556656793-062ff987b483?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.lesnumeriques.com/telephone-portable/ios-26-4-repare-enfin-le-clavier-de-l-iphone-ceux-qui-ecrivent-vite-vont-etre-ravis-n253240.html"
    },
    { 
      title: "PowerToys 0.98 : introduction d'un nouveau Dock personnalisable sur Windows", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Microsoft améliore l'expérience utilisateur avec un nouveau dock d'accès rapide intégré à la suite PowerToys.",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.it-connect.fr/powertoys-0-98-est-disponible-et-apporte-un-nouveau-dock-bien-pratique-a-windows/"
    },
    { 
      title: "Windows 11 : un bug simule une panne internet et bloque les services Cloud", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "Dysfonctionnement critique empêchant l'accès à Teams, OneDrive et Edge suite à une fausse détection de perte réseau.",
      image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.clubic.com/actualite-605446-windows-11-bloque-la-connexion-a-teams-onedrive-et-edge-sur-fond-de-fausse-panne-internet.html"
    },
    { 
      title: "Opera GX sur Linux : le navigateur gaming s'ouvre au monde de l'Open Source", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "L'arrivée d'Opera GX sur Linux marque une étape clé pour les joueurs utilisant des distributions alternatives à Windows.",
      image: "https://images.unsplash.com/photo-1527430253228-5917206e779d?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.clubic.com/actualite-605371-bonne-nouvelle-pour-les-gamers-sous-linux-opera-gx-est-arrive.html"
    },
    { 
      title: "Android et le Sideloading : vers un contrôle plus strict des APK par Google", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Google modifie les règles de sécurité d'Android, rendant l'installation d'applications hors store plus complexe.",
      image: "https://images.unsplash.com/photo-1607252680391-753bc500d306?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.lesnumeriques.com/telephone-portable/android-perd-ce-qui-le-rendait-unique-installer-une-app-comme-on-veut-quand-on-veut-n253300.html"
    },
    { 
      title: "Amazon lance son smartphone Alexa : un pari sur l'IA 10 ans après le Fire Phone", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Nouveau terminal Amazon misant tout sur l'intégration vocale native pour concurrencer Android et iOS.",
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.lesnumeriques.com/mobilite-c17/amazon-lance-un-smartphone-alexa-10-ans-apres-l-echec-du-fire-phone-n253350.html"
    },
    { 
      title: "Sécurité : L'identité numérique comme nouveau plan de contrôle d'entreprise", 
      source: "LeMagIT", 
      date: "Mars 2026",
      summary: "Analyse stratégique sur la gestion des accès (IAM) au centre de l'infrastructure informatique moderne.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.lemagit.fr/actualites/366640501/Lidentite-simpose-progressivement-comme-le-plan-de-controle-de-linformatique-dentreprise"
    },
    { 
      title: "Faille critique CVE-2026-32136 : Compromission totale possible sur AdGuard Home", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Vigilance sur une vulnérabilité majeure permettant une prise de contrôle à distance de l'outil de filtrage DNS.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.it-connect.fr/votre-adguard-home-est-vulnerable-a-une-compromission-totale-cve-2026-32136/"
    },
    { 
      title: "Sortie de Debian 13.4 : Quoi de neuf pour la distribution 'Trixie' ?", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Détails des mises à jour de paquets et améliorations de stabilité pour l'administration système Linux.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.it-connect.fr/debian-13-4-est-disponible-quapporte-cette-version/"
    },
    { 
      title: "Windows 11 : Un nouvel outil pour supprimer enfin les applications indésirables", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Microsoft facilite le nettoyage des bloatwares via un nouveau paramètre de gestion des applications système.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.it-connect.fr/windows-11-le-nouveau-parametre-qui-permet-de-supprimer-toutes-les-apps-indesirables/"
    },
    { 
      title: "Android : Google renforce les barrières contre l'installation d'APK externes", 
      source: "iGeneration", 
      date: "Mars 2026",
      summary: "Évolution de la politique de sécurité Android visant à limiter les risques liés aux sources d'installation inconnues.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.igen.fr/android/2026/03/android-comment-google-va-serrer-la-vis-sur-le-sideloading-dandroid-155299"
    },
    { 
      title: "Firefox intègre un VPN gratuit : une innovation avec quelques compromis", 
      source: "Journal du Geek", 
      date: "Mars 2026",
      summary: "Mozilla tente de sécuriser la navigation avec un VPN intégré, mais l'analyse pointe des limites de performance.",
      image: "https://images.unsplash.com/photo-1633265485768-30691b12abe1?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.journaldugeek.com/2026/03/19/firefox-va-integrer-un-vpn-gratuit-au-navigateur-mais-il-y-a-un-couac/"
    },
    { 
      title: "Stratégie Apple : Perte d'un designer majeur au profit de l'entreprise Oura", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Départ symbolique chez Apple impactant potentiellement le design futur des produits de santé connectée.",
      image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.frandroid.com/marques/apple/3032407_apple-perd-encore-un-talent-au-profit-doura-et-ca-commence-a-faire-beaucoup"
    },
    { 
      title: "Fairphone 6 et Android 16 : Un support logiciel record jusqu'en 2033", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Le smartphone durable assure une longévité exceptionnelle, redéfinissant les standards du Green IT.",
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.frandroid.com/android/3031737_on-nattendait-pas-fairphone-ici-android-16-debarque-sur-le-fairphone-6-avec-un-support-jusquen-2033"
    },
    { 
      title: "Windows 11 : Microsoft recule sur l'installation forcée de Copilot", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Suite aux retours utilisateurs, l'IA Copilot ne sera plus installée automatiquement lors de la mise à jour.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400", 
      url: "https://www.frandroid.com/marques/microsoft/3030653_microsoft-abandonne-linstallation-automatique-de-microsoft-365-copilot-sur-windows-11"
    }
  ];

  return (
    <section id="veille" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
      <header className="mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
          <span className="text-indigo-500 opacity-50">06.</span>
          Veille Technologique
        </h2>
        <p className="text-2xl text-zinc-400 max-w-4xl leading-relaxed">
          Surveillance des écosystèmes OS et matériels pour anticiper les impacts techniques et sécuritaires[cite: 18, 20].
        </p>
      </header>

      <div className="space-y-24">
        <div className="space-y-12">
          <h3 className="text-4xl font-bold text-white flex items-center gap-5 border-b border-zinc-800 pb-8">
            <Monitor className="w-10 h-10 text-indigo-400" />
            Méthodologie & Sources
          </h3>
          
          <div className="grid grid-cols-1 gap-12">
            <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10">
              <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                <Target className="w-8 h-8 text-indigo-400" />
                Thématique Centrale
              </h2>
              <div className="prose prose-invert prose-xl max-w-none text-zinc-300">
                <h3 className="text-white font-bold text-2xl mb-4">Évolutions et contraintes des écosystèmes OS et matériels en 2026 : Nouveautés, Sécurité et Usages.</h3>
                <p className="leading-relaxed">
                  Cette veille analyse la fragmentation du marché entre Windows, Linux, iOS et Android pour conseiller les organisations sur leurs choix technologiques[cite: 20].
                </p>
              </div>
            </section>

            <section className="bg-zinc-900/10 rounded-3xl">
              <h2 className="text-3xl font-semibold text-white mb-10 flex items-center gap-4">
                <Rss className="w-8 h-8 text-indigo-400" />
                Articles de Veille (15 références) [cite: 55]
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {veilleLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:bg-zinc-900/80 transition-all duration-300"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <img src={link.image} alt={link.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <span className="px-3 py-1.5 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 rounded-md text-sm font-medium text-indigo-300">
                          {link.source}
                        </span>
                        <span className="text-sm font-medium text-zinc-300">
                          {link.date}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <h4 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors leading-snug mb-4 line-clamp-2">
                        {link.title}
                      </h4>
                      <p className="text-lg text-zinc-400 line-clamp-3 mb-6 flex-1 leading-relaxed">
                        {link.summary}
                      </p>
                      <div className="flex items-center gap-3 text-indigo-400 text-lg font-medium mt-auto group-hover:translate-x-2 transition-transform">
                        Consulter <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}