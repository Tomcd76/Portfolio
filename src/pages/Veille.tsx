import { Search, Filter, Share2, Rss, ExternalLink, BookOpen, Target, Cpu, Monitor } from "lucide-react";

export default function Veille() {
  const veilleLinks = [
    { 
      title: "iOS 26.4 répare enfin le clavier de l'iPhone : ceux qui écrivent vite vont être ravis", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Une nouvelle mise à jour vient corriger les problèmes de latence du clavier sur iPhone, améliorant considérablement l'expérience de frappe pour les utilisateurs intensifs.",
      image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.lesnumeriques.com/telephone-portable/ios-26-4-repare-enfin-le-clavier-de-l-iphone-ceux-qui-ecrivent-vite-vont-etre-ravis-n253240.html"
    },
    { 
      title: "PowerToys 0.98 est disponible et apporte un nouveau dock bien pratique à Windows", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "La dernière version des PowerToys intègre une nouvelle fonctionnalité de dock, offrant une meilleure gestion de l'espace de travail et des raccourcis sous Windows.",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.it-connect.fr/powertoys-0-98-est-disponible-et-apporte-un-nouveau-dock-bien-pratique-a-windows/"
    },
    { 
      title: "Windows 11 bloque la connexion à Teams, OneDrive et Edge sur fond de fausse panne Internet", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "La mise à jour cumulative de mars pour Windows 11 provoque un bug d'authentification pour plusieurs applications Microsoft, impactant les comptes personnels et professionnels.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.clubic.com/actualite-605446-windows-11-bloque-la-connexion-a-teams-onedrive-et-edge-sur-fond-de-fausse-panne-internet.html"
    },
    { 
      title: "Bonne nouvelle pour les gamers sous Linux : Opera GX est arrivé", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "Le navigateur pensé pour les joueurs débarque enfin sur l'écosystème Linux, offrant ses fonctionnalités avancées de contrôle des ressources CPU et RAM.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.clubic.com/actualite-605371-bonne-nouvelle-pour-les-gamers-sous-linux-opera-gx-est-arrive.html"
    },
    { 
      title: "Android perd ce qui le rendait unique : installer une app comme on veut, quand on veut", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Google resserre la vis sur l'installation d'applications tierces (sideloading) sur Android, un virage sécuritaire qui remet en cause l'ouverture historique du système.",
      image: "https://images.unsplash.com/photo-1607252656733-fd7458c5c7ce?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.lesnumeriques.com/telephone-portable/android-perd-ce-qui-le-rendait-unique-installer-une-app-comme-on-veut-quand-on-veut-n253300.html"
    },
    { 
      title: "Amazon lance un smartphone Alexa, 10 ans après l'échec du Fire Phone", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Retour surprise d'Amazon sur le marché des smartphones avec un appareil novateur entièrement centré sur son intelligence artificielle Alexa.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.lesnumeriques.com/mobilite-c17/amazon-lance-un-smartphone-alexa-10-ans-apres-l-echec-du-fire-phone-n253350.html"
    },
    { 
      title: "L'identité s'impose progressivement comme le plan de contrôle de l'informatique d'entreprise", 
      source: "LeMagIT", 
      date: "Mars 2026",
      summary: "La gestion des identités et des accès (IAM) devient la nouvelle frontière de la sécurité en entreprise, remplaçant les traditionnels périmètres réseau obsolètes.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.lemagit.fr/actualites/366640501/Lidentite-simpose-progressivement-comme-le-plan-de-controle-de-linformatique-dentreprise"
    },
    { 
      title: "Votre AdGuard Home est vulnérable à une compromission totale (CVE-2026-32136)", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Une faille critique récemment découverte permet de prendre le contrôle total des instances AdGuard Home. Une mise à jour est requise en urgence.",
      image: "https://images.unsplash.com/photo-1614064641936-38998979c1cb?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.it-connect.fr/votre-adguard-home-est-vulnerable-a-une-compromission-totale-cve-2026-32136/"
    },
    { 
      title: "Debian 13.4 est disponible : qu'apporte cette version ?", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "La célèbre distribution Linux publie une nouvelle version de maintenance. Tour d'horizon des correctifs de sécurité et des améliorations de stabilité serveur.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.it-connect.fr/debian-13-4-est-disponible-quapporte-cette-version/"
    },
    { 
      title: "Windows 11 : le nouveau paramètre pour supprimer les apps indésirables", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Microsoft intègre enfin une option native très attendue pour nettoyer facilement Windows 11 des bloatwares et des applications préinstallées.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.it-connect.fr/windows-11-le-nouveau-parametre-qui-permet-de-supprimer-toutes-les-apps-indesirables/"
    },
    { 
      title: "Comment Google va serrer la vis sur le sideloading d'Android", 
      source: "iGeneration", 
      date: "Mars 2026",
      summary: "Détails techniques sur les nouvelles restrictions mises en place par Google pour limiter l'installation d'applications en dehors du Play Store.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.igen.fr/android/2026/03/android-comment-google-va-serrer-la-vis-sur-le-sideloading-dandroid-155299"
    },
    { 
      title: "Firefox va intégrer un VPN gratuit au navigateur, mais il y a un couac", 
      source: "Journal du Geek", 
      date: "Mars 2026",
      summary: "Mozilla annonce l'arrivée d'un VPN natif dans Firefox, mais des limitations techniques et des questions de confidentialité soulèvent la polémique.",
      image: "https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.journaldugeek.com/2026/03/19/firefox-va-integrer-un-vpn-gratuit-au-navigateur-mais-il-y-a-un-couac/"
    },
    { 
      title: "Apple perd encore un talent au profit d'Oura, et ça commence à faire beaucoup", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "La fuite des cerveaux continue chez Apple. Un nouveau cadre de la division santé rejoint Oura, illustrant les défis internes de la firme de Cupertino.",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.frandroid.com/marques/apple/3032407_apple-perd-encore-un-talent-au-profit-doura-et-ca-commence-a-faire-beaucoup"
    },
    { 
      title: "Android 16 débarque sur le Fairphone 6 avec un support jusqu'en 2033", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Fairphone frappe fort en garantissant 7 ans de mises à jour majeures pour son nouveau modèle, propulsé par Android 16. Un modèle de durabilité.",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&h=225&q=80",
      url: "https://www.frandroid.com/android/3031737_on-nattendait-pas-fairphone-ici-android-16-debarque-sur-le-fairphone-6-avec-un-support-jusquen-2033"
    },
    { 
      title: "Microsoft abandonne l'installation automatique de Copilot sur Windows 11", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Face aux critiques des utilisateurs et des DSI, Microsoft fait marche arrière sur le déploiement forcé de son assistant IA Copilot.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=400&h=225&q=80",
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
            {/* Thème de Veille */}
            <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10">
              <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                <Search className="w-8 h-8 text-indigo-400" />
                Thème de Veille
              </h2>
              <div className="prose prose-invert prose-xl max-w-none text-zinc-300">
                <h3 className="text-white font-bold text-2xl mb-4">
                  Évolutions et contraintes des écosystèmes OS et matériels en 2026 : Nouveautés, Sécurité et Usages.
                </h3>
                <p className="leading-relaxed">
                  Ma problématique porte sur les évolutions et contraintes des écosystèmes OS et matériels en 2026. À travers l'étude des nouveautés (iOS, Android, Windows, Linux), des vulnérabilités (CVE) et des stratégies constructeurs (sideloading, IA), mon objectif est d'anticiper les impacts techniques et sécuritaires sur la gestion d'un parc informatique.
                </p>
                <p className="mt-6 leading-relaxed">
                  <strong className="text-indigo-400">Objectif :</strong> Structurer une recherche documentaire et filtrer les flux d'informations pour maintenir un suivi régulier de mon secteur d'activité, une compétence indispensable pour accompagner et conseiller efficacement les professionnels.
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