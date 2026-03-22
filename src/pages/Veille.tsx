import { Search, Filter, Share2, Rss, ExternalLink, BookOpen, Target, Cpu, Monitor, Zap, ShieldAlert, Award } from "lucide-react";

export default function Veille() {
  // --- TABLEAU DE VEILLE (MIS À JOUR AVEC LES VRAIS ARTICLES ET LIENS) ---
  const veilleLinks = [
    { 
      title: "iOS 26.4 : le clavier de l'iPhone est (enfin) réparé pour ceux qui écrivent vite", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Cette mise à jour d'iOS résout les problèmes de latence et d'autocorrection du clavier natif, un bug très frustrant pour les utilisateurs expérimentés.",
      image: "https://picsum.photos/seed/ios_keyboard/400/225", // Image d'un iPhone avec un clavier affiché
      url: "https://www.lesnumeriques.com/telephone-portable/ios-26-4-repare-enfin-le-clavier-de-l-iphone-ceux-qui-ecrivent-vite-vont-etre-ravis-n253240.html"
    },
    { 
      title: "PowerToys 0.98 : un nouveau Dock bien pratique arrive sur Windows", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Présentation détaillée de la version 0.98 qui introduit 'PowerToys Dock', un outil pour créer des barres d'outils d'accès rapide personnalisables.",
      image: "https://picsum.photos/seed/windows_dock/400/225", // Image d'un bureau Windows avec le nouveau Dock
      url: "https://www.it-connect.fr/powertoys-0-98-est-disponible-et-apporte-un-nouveau-dock-bien-pratique-a-windows/"
    },
    { 
      title: "Windows 11 bloqué : un bug de 'fausse panne' empêche la connexion aux services Microsoft Cloud", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "Une mise à jour problématique a provoqué un dysfonctionnement majeur, bloquant Teams, OneDrive et Edge en simulant une absence de connexion Internet.",
      image: "https://picsum.photos/seed/windows_bug/400/225", // Image d'un écran d'erreur de connexion Windows
      url: "https://www.clubic.com/actualite-605446-windows-11-bloque-la-connexion-a-teams-onedrive-et-edge-sur-fond-de-fausse-panne-internet.html"
    },
    { 
      title: "Opera GX arrive enfin sur Linux : une excellente nouvelle pour les gamers", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "Le navigateur dédié aux joueurs est officiellement disponible sur Linux, renforçant l'écosystème de jeu sur cet OS qui ne cesse de croître.",
      image: "https://picsum.photos/seed/linux_gaming/400/225", // Image d'un bureau Linux avec le navigateur Opera GX
      url: "https://www.clubic.com/actualite-605371-bonne-nouvelle-pour-les-gamers-sous-linux-opera-gx-est-arrive.html"
    },
    { 
      title: "Android 'perd son unicité' : vers la fin du sideloading libre des APK ?", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Analyse des changements récents dans Android qui rendent l'installation d'applications hors Play Store (APK) de plus en plus complexe et restrictive.",
      image: "https://picsum.photos/seed/android_apk/400/225", // Image d'un smartphone Android avec un avertissement de sécurité d'installation
      url: "https://www.lesnumeriques.com/telephone-portable/android-perd-ce-qui-le-rendait-unique-installer-une-app-comme-on-veut-quand-on-veut-n253300.html"
    },
    { 
      title: "Amazon relance le smartphone : 10 ans après le Fire Phone, voici un modèle centré sur Alexa", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Amazon tente un retour sur le marché mobile avec un smartphone où l'assistant vocal Alexa est intégré au cœur de l'OS et de l'expérience utilisateur.",
      image: "https://picsum.photos/seed/amazon_phone/400/225", // Image d'un smartphone moderne avec le logo Alexa
      url: "https://www.lesnumeriques.com/mobilite-c17/amazon-lance-un-smartphone-alexa-10-ans-apres-l-echec-du-fire-phone-n253350.html"
    },
    { 
      title: "Gestion des Identités : le nouveau plan de contrôle stratégique de l'informatique d'entreprise", 
      source: "LeMagIT", 
      date: "Avril 2026",
      summary: "Analyse sur la manière dont l'IAM (Identity and Access Management) remplace le périmètre réseau comme pilier de la sécurité moderne.",
      image: "https://picsum.photos/seed/identity_iam/400/225", // Image de cybersécurité avec des schémas de connexion d'utilisateurs
      url: "https://www.lemagit.fr/actualites/366640501/Lidentite-simpose-progressivement-comme-le-plan-de-controle-de-linformatique-dentreprise"
    },
    { 
      title: "Alerte Sécurité critique CVE-2026-32136 dans AdGuard Home : compromission totale possible", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Une vulnérabilité critique a été découverte dans AdGuard Home, permettant à un attaquant distant de prendre le contrôle complet de l'instance.",
      image: "https://picsum.photos/seed/cybersecurity_adguard/400/225", // Image de cybersécurité avec un cadenas rouge
      url: "https://www.it-connect.fr/votre-adguard-home-est-vulnerable-a-une-compromission-totale-cve-2026-32136/"
    },
    { 
      title: "Debian 13.4 'Trixie' est disponible : tour d'horizon des nouveautés", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Présentation des mises à jour logicielles, des correctifs de sécurité et des améliorations ergonomiques de cette nouvelle version de la distribution Linux.",
      image: "https://picsum.photos/seed/debian_linux/400/225", // Image du logo Debian sur un écran
      url: "https://www.it-connect.fr/debian-13-4-est-disponible-quapporte-cette-version/"
    },
    { 
      title: "Windows 11 simplifie le nettoyage : un nouveau paramètre pour supprimer tous les bloatwares", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Microsoft teste une fonctionnalité permettant de supprimer en masse les applications préinstallées indésirables (bloatwares) d'un simple clic.",
      image: "https://picsum.photos/seed/windows_clean/400/225", // Image d'un bureau Windows avec une icône de corbeille
      url: "https://www.it-connect.fr/windows-11-le-nouveau-parametre-qui-permet-de-supprimer-toutes-les-apps-indesirables/"
    },
    { 
      title: "Sideloading Android : comment Google va contrôler l'installation d'APK en 2026", 
      source: "iGeneration", 
      date: "Mars 2026",
      summary: "Analyse des nouvelles API de sécurité imposeront des restrictions et des avertissements accrus lors de l'installation d'applications hors du Play Store.",
      image: "https://picsum.photos/seed/google_security/400/225", // Image de sécurité Android avec le logo Google
      url: "https://www.igen.fr/android/2026/03/android-comment-google-va-serrer-la-vis-sur-le-sideloading-dandroid-155299"
    },
    { 
      title: "Firefox intègre un VPN gratuit et natif au navigateur, mais avec un bémol", 
      source: "Journal du Geek", 
      date: "Mars 2026",
      summary: "Mozilla tente de séduire les utilisateurs avec un VPN intégré, mais l'analyse révèle des limitations et des questions sur la collecte de données.",
      image: "https://picsum.photos/seed/firefox_vpn/400/225", // Image du navigateur Firefox avec une icône de bouclier VPN
      url: "https://www.journaldugeek.com/2026/03/19/firefox-va-integrer-un-vpn-gratuit-au-navigateur-mais-il-y-a-un-couac/"
    },
    { 
      title: "Fuite des talents chez Apple : un designer clé rejoint la concurrence", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Nouvelle perte pour l'équipe de design d'Apple qui voit l'un de ses cadres historiques partir pour rejoindre une entreprise concurrente de wearables.",
      image: "https://picsum.photos/seed/apple_talent/400/225", // Image d'un bureau d'ingénieur/designer technique
      url: "https://www.frandroid.com/marques/apple/3032407_apple-perd-encore-un-talent-au-profit-doura-et-ca-commence-a-faire-beaucoup"
    },
    { 
      title: "Fairphone 6 : une mise à jour Android 16 et un support jusqu'en 2033", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Le constructeur néerlandais repousse les limites de la durabilité matérielle et logicielle avec 7 ans de mises à jour pour son dernier smartphone.",
      image: "https://picsum.photos/seed/fairphone_android/400/225", // Image d'un smartphone modulaire Fairphone
      url: "https://www.frandroid.com/android/3031737_on-nattendait-pas-fairphone-ici-android-16-debarque-sur-le-fairphone-6-avec-un-support-jusquen-2033"
    },
    { 
      title: "Microsoft abandonne l'installation automatique de Copilot dans Windows 11", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Face aux critiques et aux enquêtes, Microsoft recule et n'imposera plus son assistant IA Copilot lors des mises à jour du système.",
      image: "https://picsum.photos/seed/microsoft_copilot/400/225", // Image d'un bureau Windows avec l'assistant Copilot
      url: "https://www.frandroid.com/marques/microsoft/3030653_microsoft-abandonne-linstallation-automatique-de-microsoft-365-copilot-sur-windows-11"
    },
  ];

  return (
    <section id="veille" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900 bg-black">
      <header className="mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
          <span className="text-indigo-500 opacity-50">06.</span>
          Développement Professionnel & Veille
        </h2>
        <p className="text-2xl text-zinc-400 max-w-4xl leading-relaxed">
          Organisation de mon apprentissage continu et stratégie de veille informationnelle pour le BTS SIO (SISR).
        </p>
      </header>

      <div className="space-y-24">
        
        {/* --- SECTION VEILLE TECHNOLOGIQUE --- */}
        <div className="space-y-12">
          <h3 className="text-4xl font-bold text-white flex items-center gap-5 border-b border-zinc-800 pb-8">
            <Monitor className="w-10 h-10 text-indigo-400" />
            Veille Technologique (SISR)
          </h3>
          
          <div className="grid grid-cols-1 gap-12">
            {/* Thème de Veille (MIS À JOUR) */}
            <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10">
              <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                <Target className="w-8 h-8 text-indigo-400" />
                Thème de Veille
              </h2>
              <div className="prose prose-invert prose-xl max-w-none text-zinc-300">
                <h3 className="text-white font-bold text-2xl mb-4 leading-snug">Évolutions et contraintes des écosystèmes OS et matériels en 2026 : Nouveautés, Sécurité et Usages.</h3>
                <p className="leading-relaxed">
                  Ma problématique porte sur les évolutions technologiques et les restrictions logicielles au sein des principaux écosystèmes (iOS, Android, Windows, Linux) en 2026.
                </p>
                <p className="mt-6 leading-relaxed">
                  <strong className="text-indigo-400">Objectif :</strong> À travers l'étude des nouveautés fonctionnelles, des vulnérabilités critiques (CVE) et des stratégies des constructeurs (sideloading, IA), l'objectif est d'anticiper les impacts techniques et sécuritaires sur la gestion d'un parc informatique moderne.
                </p>
              </div>
            </section>

            {/* Sources de Veille (MIS À JOUR AVEC LES VRAIS LIENS ET IMAGES) */}
            <section className="bg-zinc-900/10 rounded-3xl">
              <h2 className="text-3xl font-semibold text-white mb-10 flex items-center gap-4">
                <Rss className="w-8 h-8 text-indigo-400" />
                Sources & Articles de Veille ({veilleLinks.length} références actifs)
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
                        Lire l'article complet <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* --- SECTION DEVELOPPEMENT PROFESSIONNEL (CONSERVÉE) --- */}
        <div className="space-y-12">
          <h3 className="text-4xl font-bold text-white flex items-center gap-5 border-b border-zinc-800 pb-8">
            <Award className="w-10 h-10 text-emerald-400" />
            Développement Professionnel & Projet
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
                      <span className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-base text-zinc-300">Reddit SISR</span>
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
                        <li>Ubuntu Server 24.04</li>
                        <li>Debian 12 (Trixie VMs)</li>
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
                  <Zap className="w-8 h-8 text-emerald-400" />
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
                      <span>Poursuite d'études : Bachelor RDC</span>
                    </div>
                    <div className="flex items-center gap-4 text-xl text-zinc-300 font-medium bg-zinc-900 px-6 py-3 rounded-xl border border-zinc-800">
                      <div className="w-4 h-4 rounded-full bg-indigo-500" />
                      <span>Vulgarisation & Relation Client</span>
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