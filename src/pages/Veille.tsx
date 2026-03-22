import { Search, Filter, Share2, Rss, ExternalLink, BookOpen, Target, Cpu, Monitor } from "lucide-react";

export default function Veille() {
  const veilleLinks = [
    { 
      title: "iOS 26.4 répare enfin le clavier de l'iPhone : ceux qui écrivent vite vont être ravis", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Apple déploie une mise à jour très attendue qui corrige les problèmes de latence du clavier virtuel, un vrai soulagement pour les utilisateurs intensifs.",
      image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.lesnumeriques.com/telephone-portable/ios-26-4-repare-enfin-le-clavier-de-l-iphone-ceux-qui-ecrivent-vite-vont-etre-ravis-n253240.html"
    },
    { 
      title: "PowerToys 0.98 est disponible et apporte un nouveau dock bien pratique à Windows", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "La nouvelle version des outils de Microsoft introduit un dock personnalisable, améliorant considérablement l'ergonomie et la productivité sous Windows.",
      image: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.it-connect.fr/powertoys-0-98-est-disponible-et-apporte-un-nouveau-dock-bien-pratique-a-windows/"
    },
    { 
      title: "Windows 11 bloque la connexion à Teams, OneDrive et Edge sur fond de fausse panne internet", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "Un bug étrange dans Windows 11 empêche l'accès aux services cloud de Microsoft en simulant une coupure réseau locale. Explications du phénomène.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.clubic.com/actualite-605446-windows-11-bloque-la-connexion-a-teams-onedrive-et-edge-sur-fond-de-fausse-panne-internet.html"
    },
    { 
      title: "Bonne nouvelle pour les gamers sous Linux : Opera GX est arrivé", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "Le navigateur pensé spécifiquement pour les joueurs débarque enfin nativement sur les distributions Linux, enrichissant l'écosystème de l'OS libre.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.clubic.com/actualite-605371-bonne-nouvelle-pour-les-gamers-sous-linux-opera-gx-est-arrive.html"
    },
    { 
      title: "Android perd ce qui le rendait unique : installer une app comme on veut, quand on veut", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Les nouvelles restrictions de Google modifient en profondeur la philosophie d'ouverture historique du système d'exploitation mobile.",
      image: "https://images.unsplash.com/photo-1607252656733-fd7421b05bf7?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.lesnumeriques.com/telephone-portable/android-perd-ce-qui-le-rendait-unique-installer-une-app-comme-on-veut-quand-on-veut-n253300.html"
    },
    { 
      title: "Amazon lance un smartphone Alexa, 10 ans après l'échec du Fire Phone", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Le géant du e-commerce tente un retour ambitieux sur le marché mobile avec un appareil entièrement piloté par son intelligence artificielle.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.lesnumeriques.com/mobilite-c17/amazon-lance-un-smartphone-alexa-10-ans-apres-l-echec-du-fire-phone-n253350.html"
    },
    { 
      title: "L'identité s'impose progressivement comme le plan de contrôle de l'informatique d'entreprise", 
      source: "LeMagIT", 
      date: "Mars 2026",
      summary: "La gestion des accès et des identités (IAM) devient le pilier central des stratégies de sécurité des systèmes d'information modernes.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.lemagit.fr/actualites/366640501/Lidentite-simpose-progressivement-comme-le-plan-de-controle-de-linformatique-dentreprise"
    },
    { 
      title: "Votre AdGuard Home est vulnérable à une compromission totale (CVE-2026-32136)", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Alerte de sécurité critique concernant une faille permettant la prise de contrôle à distance des instances AdGuard Home. Mise à jour urgente requise.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.it-connect.fr/votre-adguard-home-est-vulnerable-a-une-compromission-totale-cve-2026-32136/"
    },
    { 
      title: "Debian 13.4 est disponible : qu'apporte cette version ?", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Le point sur les derniers correctifs de sécurité et les nouveautés de la nouvelle itération de la célèbre distribution Linux communautaire.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.it-connect.fr/debian-13-4-est-disponible-quapporte-cette-version/"
    },
    { 
      title: "Windows 11 : le nouveau paramètre qui permet de supprimer toutes les apps indésirables", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Microsoft cède enfin aux demandes des utilisateurs et des administrateurs en facilitant la désinstallation des bloatwares natifs de son OS.",
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.it-connect.fr/windows-11-le-nouveau-parametre-qui-permet-de-supprimer-toutes-les-apps-indesirables/"
    },
    { 
      title: "Android : comment Google va serrer la vis sur le sideloading", 
      source: "iGeneration", 
      date: "Mars 2026",
      summary: "Analyse détaillée des nouveaux mécanismes de sécurité mis en place par Google pour encadrer strictement l'installation d'applications hors du Play Store.",
      image: "https://images.unsplash.com/photo-1624434207284-727df5e6d554?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.igen.fr/android/2026/03/android-comment-google-va-serrer-la-vis-sur-le-sideloading-dandroid-155299"
    },
    { 
      title: "Firefox va intégrer un VPN gratuit au navigateur, mais il y a un couac", 
      source: "Journal du Geek", 
      date: "Mars 2026",
      summary: "Mozilla annonce l'ajout d'une fonctionnalité VPN native à son célèbre navigateur web, mais certaines limitations techniques font déjà débat.",
      image: "https://images.unsplash.com/photo-1614064641913-6b7140414c71?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.journaldugeek.com/2026/03/19/firefox-va-integrer-un-vpn-gratuit-au-navigateur-mais-il-y-a-un-couac/"
    },
    { 
      title: "Apple perd encore un talent au profit d'Oura, et ça commence à faire beaucoup", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "La fuite des cerveaux se poursuit chez Apple : un nouveau cadre dirigeant de la division santé rejoint le fabricant d'anneaux connectés Oura.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.frandroid.com/marques/apple/3032407_apple-perd-encore-un-talent-au-profit-doura-et-ca-commence-a-faire-beaucoup"
    },
    { 
      title: "On n'attendait pas Fairphone ici : Android 16 débarque sur le Fairphone 6", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Le constructeur éco-responsable frappe fort en promettant un support logiciel allant jusqu'en 2033, établissant un nouveau standard de durabilité.",
      image: "https://images.unsplash.com/photo-1533228100845-08145b01de14?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.frandroid.com/android/3031737_on-nattendait-pas-fairphone-ici-android-16-debarque-sur-le-fairphone-6-avec-un-support-jusquen-2033"
    },
    { 
      title: "Microsoft abandonne l'installation automatique de Microsoft 365 Copilot sur Windows 11", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Face à la grogne des administrateurs systèmes et des utilisateurs, Microsoft fait machine arrière sur le déploiement forcé de son assistant IA.",
      image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.frandroid.com/marques/microsoft/3030653_microsoft-abandonne-linstallation-automatique-de-microsoft-365-copilot-sur-windows-11"
    },
    { 
      title: "Bilan CVE 2026 : Synthèse des menaces pesant sur les écosystèmes OS", 
      source: "L'Informaticien", 
      date: "Mars 2026",
      summary: "Une analyse croisée des failles de sécurité majeures découvertes au premier trimestre, et leur impact sur la gestion des parcs informatiques.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&w=400&h=225&q=80",
      url: "#" 
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
            {/* Thème de Veille */}
            <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10">
              <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                <Search className="w-8 h-8 text-indigo-400" />
                Thème de Veille
              </h2>
              <div className="prose prose-invert prose-xl max-w-none text-zinc-300">
                <h3 className="text-white font-bold text-2xl mb-4">Évolutions et contraintes des écosystèmes OS et matériels en 2026 : Nouveautés, Sécurité et Usages</h3>
                <p className="leading-relaxed">
                  Ma problématique porte sur les évolutions et contraintes des écosystèmes OS et matériels actuels. À travers l'étude des nouveautés (iOS, Android, Windows, Linux) et des vulnérabilités (CVE), j'analyse l'état du marché.
                </p>
                <p className="mt-6 leading-relaxed">
                  <strong className="text-indigo-400">Objectif :</strong> Anticiper les impacts techniques et sécuritaires (sideloading, intégration IA) pour conseiller au mieux les utilisateurs et adapter la gestion des parcs informatiques en entreprise.
                </p>
              </div>
            </section>

            {/* Sources de Veille */}
            <section className="bg-zinc-900/10 rounded-3xl">
              <h2 className="text-3xl font-semibold text-white mb-10 flex items-center gap-4">
                <Rss className="w-8 h-8 text-indigo-400" />
                Sources & Articles de Veille (16 références)
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
                      <h4 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors leading-snug mb-4 line-clamp-2" title={link.title}>
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

        {/* --- SECTION DEVELOPPEMENT PROFESSIONNEL --- */}
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