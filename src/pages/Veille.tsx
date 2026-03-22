import { Search, Filter, Share2, Rss, ExternalLink, BookOpen, Target, Cpu, Monitor, Zap, ShieldAlert, Award } from "lucide-react";

export default function Veille() {
  const veilleLinks = [
    { 
      title: "iOS 26.4 : le clavier de l'iPhone est enfin réparé pour les écritures rapides", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Correction majeure d'un bug de latence du clavier natif qui impactait la productivité des utilisateurs intensifs d'iPhone.",
      image: "https://image.pollinations.ai/prompt/close%20up%20typing%20on%20modern%20iphone%20screen%20keyboard?width=400&height=225&nologo=true", 
      url: "https://www.lesnumeriques.com/telephone-portable/ios-26-4-repare-enfin-le-clavier-de-l-iphone-ceux-qui-ecrivent-vite-vont-etre-ravis-n253240.html"
    },
    { 
      title: "PowerToys 0.98 : introduction d'un nouveau Dock personnalisable sur Windows", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Microsoft améliore l'expérience utilisateur avec un nouveau dock d'accès rapide intégré à la suite PowerToys.",
      image: "https://image.pollinations.ai/prompt/windows%20desktop%20bottom%20software%20dock%20ui%20design?width=400&height=225&nologo=true", 
      url: "https://www.it-connect.fr/powertoys-0-98-est-disponible-et-apporte-un-nouveau-dock-bien-pratique-a-windows/"
    },
    { 
      title: "Windows 11 : un bug simule une panne internet et bloque les services Cloud", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "Dysfonctionnement critique empêchant l'accès à Teams, OneDrive et Edge suite à une fausse détection de perte réseau.",
      image: "https://image.pollinations.ai/prompt/computer%20screen%20showing%20no%20internet%20connection%20error%20windows?width=400&height=225&nologo=true", 
      url: "https://www.clubic.com/actualite-605446-windows-11-bloque-la-connexion-a-teams-onedrive-et-edge-sur-fond-de-fausse-panne-internet.html"
    },
    { 
      title: "Opera GX sur Linux : le navigateur gaming s'ouvre au monde de l'Open Source", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "L'arrivée d'Opera GX sur Linux marque une étape clé pour les joueurs utilisant des distributions alternatives à Windows.",
      image: "https://image.pollinations.ai/prompt/neon%20gaming%20web%20browser%20on%20a%20linux%20computer%20screen?width=400&height=225&nologo=true", 
      url: "https://www.clubic.com/actualite-605371-bonne-nouvelle-pour-les-gamers-sous-linux-opera-gx-est-arrive.html"
    },
    { 
      title: "Android et le Sideloading : vers un contrôle plus strict des APK par Google", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Google modifie les règles de sécurité d'Android, rendant l'installation d'applications hors store plus complexe.",
      image: "https://image.pollinations.ai/prompt/android%20smartphone%20screen%20showing%20security%20warning%20app%20install?width=400&height=225&nologo=true", 
      url: "https://www.lesnumeriques.com/telephone-portable/android-perd-ce-qui-le-rendait-unique-installer-une-app-comme-on-veut-quand-on-veut-n253300.html"
    },
    { 
      title: "Amazon lance son smartphone Alexa : un pari sur l'IA 10 ans après le Fire Phone", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Nouveau terminal Amazon misant tout sur l'intégration vocale native pour concurrencer Android et iOS.",
      image: "https://image.pollinations.ai/prompt/modern%20smartphone%20glowing%20blue%20voice%20assistant%20ai?width=400&height=225&nologo=true", 
      url: "https://www.lesnumeriques.com/mobilite-c17/amazon-lance-un-smartphone-alexa-10-ans-apres-l-echec-du-fire-phone-n253350.html"
    },
    { 
      title: "Sécurité : L'identité numérique comme nouveau plan de contrôle d'entreprise", 
      source: "LeMagIT", 
      date: "Avril 2026",
      summary: "Analyse stratégique sur la gestion des accès (IAM) au centre de l'infrastructure informatique moderne.",
      image: "https://image.pollinations.ai/prompt/cybersecurity%20digital%20identity%20access%20management%20network%20hologram?width=400&height=225&nologo=true", 
      url: "https://www.lemagit.fr/actualites/366640501/Lidentite-simpose-progressivement-comme-le-plan-de-controle-de-linformatique-dentreprise"
    },
    { 
      title: "Faille critique CVE-2026-32136 : Compromission totale possible sur AdGuard Home", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Vigilance sur une vulnérabilité majeure permettant une prise de contrôle à distance de l'outil de filtrage DNS.",
      image: "https://image.pollinations.ai/prompt/cybersecurity%20red%20warning%20shield%20server%20dns%20hack?width=400&height=225&nologo=true", 
      url: "https://www.it-connect.fr/votre-adguard-home-est-vulnerable-a-une-compromission-totale-cve-2026-32136/"
    },
    { 
      title: "Sortie de Debian 13.4 : Quoi de neuf pour la distribution 'Trixie' ?", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Détails des mises à jour de paquets et améliorations de stabilité pour l'administration système Linux.",
      image: "https://image.pollinations.ai/prompt/linux%20terminal%20command%20line%20code%20on%20screen?width=400&height=225&nologo=true", 
      url: "https://www.it-connect.fr/debian-13-4-est-disponible-quapporte-cette-version/"
    },
    { 
      title: "Windows 11 : Un nouvel outil pour supprimer enfin les applications indésirables", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Microsoft facilite le nettoyage des bloatwares via un nouveau paramètre de gestion des applications système.",
      image: "https://image.pollinations.ai/prompt/windows%20desktop%20cleaning%20trash%20bin%20software%20icon?width=400&height=225&nologo=true", 
      url: "https://www.it-connect.fr/windows-11-le-nouveau-parametre-qui-permet-de-supprimer-toutes-les-apps-indesirables/"
    },
    { 
      title: "Android : Google renforce les barrières contre l'installation d'APK externes", 
      source: "iGeneration", 
      date: "Mars 2026",
      summary: "Évolution de la politique de sécurité Android visant à limiter les risques liés aux sources d'installation inconnues.",
      image: "https://image.pollinations.ai/prompt/google%20android%20security%20shield%20smartphone%20concept?width=400&height=225&nologo=true", 
      url: "https://www.igen.fr/android/2026/03/android-comment-google-va-serrer-la-vis-sur-le-sideloading-dandroid-155299"
    },
    { 
      title: "Firefox intègre un VPN gratuit : une innovation avec quelques compromis", 
      source: "Journal du Geek", 
      date: "Mars 2026",
      summary: "Mozilla tente de sécuriser la navigation avec un VPN intégré, mais l'analyse pointe des limites de performance.",
      image: "https://image.pollinations.ai/prompt/firefox%20web%20browser%20with%20vpn%20security%20padlock%20concept?width=400&height=225&nologo=true", 
      url: "https://www.journaldugeek.com/2026/03/19/firefox-va-integrer-un-vpn-gratuit-au-navigateur-mais-il-y-a-un-couac/"
    },
    { 
      title: "Stratégie Apple : Perte d'un designer majeur au profit de l'entreprise Oura", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Départ symbolique chez Apple impactant potentiellement le design futur des produits de santé connectée.",
      image: "https://image.pollinations.ai/prompt/tech%20company%20design%20studio%20blueprint%20smart%20ring?width=400&height=225&nologo=true", 
      url: "https://www.frandroid.com/marques/apple/3032407_apple-perd-encore-un-talent-au-profit-doura-et-ca-commence-a-faire-beaucoup"
    },
    { 
      title: "Fairphone 6 et Android 16 : Un support logiciel record jusqu'en 2033", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Le smartphone durable assure une longévité exceptionnelle, redéfinissant les standards du Green IT.",
      image: "https://image.pollinations.ai/prompt/sustainable%20modular%20smartphone%20green%20technology?width=400&height=225&nologo=true", 
      url: "https://www.frandroid.com/android/3031737_on-nattendait-pas-fairphone-ici-android-16-debarque-sur-le-fairphone-6-avec-un-support-jusquen-2033"
    },
    { 
      title: "Windows 11 : Microsoft recule sur l'installation forcée de Copilot", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Suite aux retours utilisateurs, l'IA Copilot ne sera plus installée automatiquement lors de la mise à jour.",
      image: "https://image.pollinations.ai/prompt/microsoft%20windows%20ai%20copilot%20interface%20screen?width=400&height=225&nologo=true", 
      url: "https://www.frandroid.com/marques/microsoft/3030653_microsoft-abandonne-linstallation-automatique-de-microsoft-365-copilot-sur-windows-11"
    }
  ];

  return (
    <section id="veille" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
      <header className="mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
          <span className="text-indigo-500 opacity-50">06.</span>
          Développement Professionnel & Veille
        </h2>
        <p className="text-2xl text-zinc-400 max-w-4xl leading-relaxed">
          Organisation de mon apprentissage continu et stratégie de veille informationnelle.
        </p>
      </header>

      <div className="space-y-24">
        
        {/* --- SECTION VEILLE TECHNOLOGIQUE --- */}
        <div className="space-y-12">
          <h3 className="text-4xl font-bold text-white flex items-center gap-5 border-b border-zinc-800 pb-8">
            <Monitor className="w-10 h-10 text-indigo-400" />
            Veille Technologique
          </h3>
          
          <div className="grid grid-cols-1 gap-12">
            {/* Thème de Veille COMPLET */}
            <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10">
              <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                <Search className="w-8 h-8 text-indigo-400" />
                Thème de Veille
              </h2>
              <div className="prose prose-invert prose-xl max-w-none text-zinc-300">
                <h3 className="text-white font-bold text-2xl mb-4">Évolutions et contraintes des écosystèmes OS et matériels en 2026 : Nouveautés, Sécurité et Usages.</h3>
                <p className="leading-relaxed">
                  En deuxième année de BTS SIO (SISR), je réalise une veille technologique structurée selon un cycle professionnel : collecte, analyse et diffusion. Ma problématique porte sur les évolutions et contraintes des écosystèmes OS et matériels en 2026.
                </p>
                <p className="mt-6 leading-relaxed">
                  <strong className="text-indigo-400">Objectif :</strong> À travers l'étude des nouveautés (iOS, Android, Windows, Linux), des vulnérabilités (CVE) et des stratégies constructeurs (sideloading, IA), mon objectif est d'anticiper les impacts techniques et sécuritaires sur la gestion d'un parc informatique.
                </p>
              </div>
            </section>

            {/* Sources de Veille */}
            <section className="bg-zinc-900/10 rounded-3xl">
              <h2 className="text-3xl font-semibold text-white mb-10 flex items-center gap-4">
                <Rss className="w-8 h-8 text-indigo-400" />
                Sources & Articles de Veille ({veilleLinks.length} références)
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
                      <img 
                        src={link.image} 
                        alt={link.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <span className="px-3 py-1.5 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 rounded-md text-sm font-medium text-indigo-300">
                          {link.source}
                        </span>
                        <span className="text-sm font-medium text-zinc-300 drop-shadow-md">
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
                        Lire l'article <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* --- SECTION DEVELOPPEMENT PROFESSIONNEL (COMPLETE) --- */}
        <div className="space-y-12">
          <h3 className="text-4xl font-bold text-white flex items-center gap-5 border-b border-zinc-800 pb-8">
            <Target className="w-10 h-10 text-emerald-400" />
            Développement Professionnel
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Environnement d'Apprentissage */}
            <div className="lg:col-span-1">
              <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10 h-full">
                <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                  <BookOpen className="w-8 h-8 text-emerald-400" />
                  Environnement d'Apprentissage
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-base uppercase font-bold text-zinc-500 mb-4">Plateformes</h3>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-base text-zinc-300">IT Connect</span>
                      <span className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-base text-zinc-300">Reddit</span>
                      <span className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-base text-zinc-300">GitHub</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base uppercase font-bold text-zinc-500 mb-4">Lab Local</h3>
                    <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800 text-base text-zinc-400 font-mono mb-8">
                      <div className="flex items-center gap-3 mb-3 text-zinc-300">
                        <Cpu className="w-5 h-5" /> Proxmox Server
                      </div>
                      <ul className="pl-8 list-disc space-y-2">
                        <li>Ubuntu</li>
                        <li>Debian</li>
                      </ul>
                    </div>
                    {/* Espace pour la photo de l'infrastructure Proxmox */}
                    <div className="w-full aspect-video bg-zinc-950 border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-zinc-600 relative overflow-hidden group">
                      <Monitor className="w-12 h-12 mb-4 opacity-50" />
                      <span className="text-base text-center px-6">Emplacement pour la photo<br/>de mon infrastructure Proxmox</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Projet Professionnel */}
            <div className="lg:col-span-2">
              <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10 h-full">
                <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                  <Target className="w-8 h-8 text-emerald-400" />
                  Projet Professionnel
                </h2>
                <div className="bg-zinc-950/50 p-10 rounded-2xl border border-zinc-800">
                  <p className="text-zinc-300 italic text-2xl mb-8 leading-relaxed">
                    "Mon objectif est de m'orienter vers un Bachelor RDC (Responsable de Développement Commercial). Bien que j'aie de solides bases techniques en informatique, je suis particulièrement attiré par le contact client et la relation commerciale."
                  </p>
                  <p className="text-zinc-400 text-xl mb-10 leading-relaxed">
                    Ma force réside dans ma capacité à faire le pont entre la technique et le client. J'excelle dans la vulgarisation : je sais traduire des concepts complexes en termes simples et accessibles (par exemple, expliquer qu'un 'switch' fonctionne comme une 'multiprise' intelligente). Cette double compétence technique et relationnelle est un atout majeur pour accompagner et conseiller efficacement les clients.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-4 text-xl text-zinc-300 font-medium bg-zinc-900 px-6 py-3 rounded-xl border border-zinc-800">
                      <div className="w-4 h-4 rounded-full bg-emerald-500" />
                      <span>Bachelor RDC</span>
                    </div>
                    <div className="flex items-center gap-4 text-xl text-zinc-300 font-medium bg-zinc-900 px-6 py-3 rounded-xl border border-zinc-800">
                      <div className="w-4 h-4 rounded-full bg-indigo-500" />
                      <span>Relation Client & Vulgarisation</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}