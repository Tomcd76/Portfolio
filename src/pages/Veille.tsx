import { Search, Rss, ExternalLink, BookOpen, Target, Cpu, Monitor, Download, FileText } from "lucide-react";

export default function Veille() {
  const veilleLinks = [
    {
      title: "iOS 26.4 répare enfin le clavier de l'iPhone : ceux qui écrivent vite vont être ravis",
      source: "Les Numériques",
      date: "19 mars 2026",
      summary: "Depuis iOS 26, les utilisateurs signalaient des lettres manquantes lors d'une frappe rapide. iOS 26.4, attendu fin mars, corrige enfin ce bug en améliorant la précision du clavier, après plus de six mois de réclamations.",
      image: "https://i0.wp.com/jvmag.ch/wp-content/uploads/2026/03/707141.webp?ssl=1",
      url: "https://www.lesnumeriques.com/telephone-portable/ios-26-4-repare-enfin-le-clavier-de-l-iphone-ceux-qui-ecrivent-vite-vont-etre-ravis-n253240.html"
    },
    {
      title: "PowerToys 0.98 est disponible et apporte un nouveau Dock bien pratique à Windows",
      source: "IT-Connect",
      date: "17 mars 2026",
      summary: "La version 0.98 de PowerToys introduit le Command Palette Dock, une barre secondaire personnalisable, ainsi qu'une refonte complète du gestionnaire de clavier en WinUI 3 et des améliorations de CursorWrap pour les configurations multi-écrans.",
      image: "https://repository-images.githubusercontent.com/184456251/6fa0e600-b17f-11ea-9360-1f79417d8a69",
      url: "https://www.it-connect.fr/powertoys-0-98-est-disponible-et-apporte-un-nouveau-dock-bien-pratique-a-windows/"
    },
    {
      title: "Windows 11 bloque la connexion à Teams, OneDrive et Edge sur fond de fausse panne Internet",
      source: "Clubic",
      date: "20 mars 2026",
      summary: "Après l'installation de la mise à jour KB5079473 du Patch Tuesday de mars 2026, certains utilisateurs ne peuvent plus se connecter à Teams, OneDrive, Edge, Word ou Copilot, malgré une connexion Internet active. Un correctif est attendu.",
      image: "https://img-19.commentcamarche.net/mt_p6ZNTNlURnhfNV5v8MXXhOvI=/480x270/smart/d298cf5df6cd49abae4ebcaa14a347a6/ccmcms-commentcamarche/32144634.png",
      url: "https://www.clubic.com/actualite-605446-windows-11-bloque-la-connexion-a-teams-onedrive-et-edge-sur-fond-de-fausse-panne-internet.html"
    },
    {
      title: "Bonne nouvelle pour les gamers sous Linux : Opera GX est arrivé !",
      source: "Clubic",
      date: "20 mars 2026",
      summary: "Opera GX, le navigateur orienté gaming, débarque officiellement sur Linux avec ses fonctionnalités phares : limiteurs de RAM et réseau (GX Control), intégrations Discord et Twitch en sidebar, VPN gratuit sans logs et personnalisation avancée via GX Mods.",
      image: "https://cdn-production-opera-website.operacdn.com/staticfiles/assets/gx/images/eats-less-ram/gx-linux/gx-linux-og.5fdeea3990de.jpg",
      url: "https://www.clubic.com/actualite-605371-bonne-nouvelle-pour-les-gamers-sous-linux-opera-gx-est-arrive.html"
    },
    {
      title: "Amazon lance un smartphone Alexa, 10 ans après l'échec du Fire Phone",
      source: "Les Numériques",
      date: "20 mars 2026",
      summary: "Amazon développerait un nouveau smartphone IA sous le nom de code 'Transformer', centré sur l'assistant Alexa et ses services. Un pari risqué plus d'une décennie après l'échec du Fire Phone, dans un marché mondial en déclin de 13 %.",
      image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/8847347/akrales_170712_1843_0012.jpg?quality=90&strip=all&crop=0,0,100,100",
      url: "https://www.lesnumeriques.com/mobilite-c17/amazon-lance-un-smartphone-alexa-10-ans-apres-l-echec-du-fire-phone-n253350.html"
    },
    {
      title: "L'identité s'impose progressivement comme le plan de contrôle de l'informatique d'entreprise",
      source: "LeMagIT",
      date: "18 mars 2026",
      summary: "Face à la multiplication des appareils et au travail hybride, les politiques d'identité supplantent les contrôles traditionnels basés sur les OS. L'identité devient le pilier central de la sécurité, de la gouvernance et de l'accès en entreprise.",
      image: "https://optimeo.com/wp-content/uploads/2024/06/ergonomie-ordinateur-portable.webp",
      url: "https://www.lemagit.fr/actualites/366640501/Lidentite-simpose-progressivement-comme-le-plan-de-controle-de-linformatique-dentreprise"
    },
    {
      title: "Votre AdGuard Home est vulnérable à une compromission totale : CVE-2026-32136",
      source: "IT-Connect",
      date: "19 mars 2026",
      summary: "Une faille critique (score CVSS 9.8/10) permet à un attaquant distant non authentifié de contourner entièrement l'authentification d'AdGuard Home via HTTP/2 en clair. La mise à jour vers la version 0.107.73 est impérative pour se protéger.",
      image: "https://apps.umbrel.com/_next/image?url=https%3A%2F%2Fgetumbrel.github.io%2Fumbrel-apps-gallery%2Fadguard-home%2F1.jpg&w=3840&q=75",
      url: "https://www.it-connect.fr/votre-adguard-home-est-vulnerable-a-une-compromission-totale-cve-2026-32136/"
    },
    {
      title: "Debian 13.4 est disponible : qu'apporte cette version ?",
      source: "IT-Connect",
      date: "16 mars 2026",
      summary: "La quatrième mise à jour de maintenance de Debian 13 'Trixie' consolide plus de 60 correctifs de sécurité pour Firefox ESR, Nginx, BIND9 et la bibliothèque glibc. L'installeur est désormais basé sur le noyau Linux 6.12.73.",
      image: "https://www.zdnet.com/a/img/resize/7379faa71766a79d14bd44d94a5e2ca4abd5d31f/2025/08/11/0ce4acb6-336f-42b5-a73b-89c0de928aec/debian-13.jpg?auto=webp&width=1280",
      url: "https://www.it-connect.fr/debian-13-4-est-disponible-quapporte-cette-version/"
    },
    {
      title: "Windows 11 : le nouveau paramètre qui permet de supprimer toutes les apps indésirables",
      source: "IT-Connect",
      date: "12 mars 2026",
      summary: "Une build Insider de Windows 11 introduit un nouveau paramètre de GPO permettant aux administrateurs de définir une liste dynamique d'applications MSIX à désinstaller (Teams, Copilot, Solitaire…), offrant enfin un contrôle natif du debloat.",
      image: "https://www.pcworld.com/wp-content/uploads/2025/09/windows-11-update-header.jpg?quality=50&strip=all&w=1024",
      url: "https://www.it-connect.fr/windows-11-le-nouveau-parametre-qui-permet-de-supprimer-toutes-les-apps-indesirables/"
    },
    {
      title: "Android : comment Google va serrer la vis sur le sideloading d'Android",
      source: "iGeneration",
      date: "20 mars 2026",
      summary: "Google impose une vérification d'identité pour les développeurs distribuant des applications hors du Play Store, et un parcours complexe pour les utilisateurs avancés, incluant l'activation du mode développeur, un redémarrage et un délai d'attente de 24h.",
      image: "https://images.frandroid.com/wp-content/uploads/2023/01/android-illustration-couleurs.jpg",
      url: "https://www.igen.fr/android/2026/03/android-comment-google-va-serrer-la-vis-sur-le-sideloading-dandroid-155299"
    },
    {
      title: "Firefox va intégrer un VPN gratuit au navigateur, mais il y a un couac",
      source: "Journal du Geek",
      date: "19 mars 2026",
      summary: "Mozilla intègre un VPN gratuit avec 50 Go/mois dans Firefox 149, disponible dès le 24 mars en France, États-Unis, Royaume-Uni et Allemagne. Mais la protection se limite au trafic du navigateur et le comportement à l'épuisement du quota reste flou.",
      image: "https://i.ytimg.com/vi/kQmIo_N6orQ/maxresdefault.jpg",
      url: "https://www.journaldugeek.com/2026/03/19/firefox-va-integrer-un-vpn-gratuit-au-navigateur-mais-il-y-a-un-couac/"
    },
    {
      title: "Apple perd encore un talent au profit d'Oura et ça commence à faire beaucoup",
      source: "Frandroid",
      date: "17 mars 2026",
      summary: "Brian Lynch, responsable depuis 2022 de l'ingénierie matérielle domotique chez Apple, rejoint Oura Health comme SVP Engineering. Ce départ illustre les difficultés du pôle maison connectée d'Apple, freiné par les retards du nouveau Siri.",
      image: "https://images.frandroid.com/wp-content/uploads/2025/11/apple-iphone-pocket-and-issey-miyake-cinnamon-with-iphone-17-pro-grande.jpeg",
      url: "https://www.frandroid.com/marques/apple/3032407_apple-perd-encore-un-talent-au-profit-doura-et-ca-commence-a-faire-beaucoup"
    },
    {
      title: "On n'attendait pas Fairphone ici : Android 16 débarque sur le Fairphone 6 avec un support jusqu'en 2033",
      source: "Frandroid",
      date: "16 mars 2026",
      summary: "Fairphone lance le déploiement d'Android 16 sur son dernier modèle dès le 16 mars, plus tôt qu'annoncé (avril). Le Fairphone 6 bénéficie d'un support logiciel garanti jusqu'en 2033, soit 8 ans de mises à jour majeures, un record sur le marché Android.",
      image: "https://eu-images.contentstack.com/v3/assets/blt3d4d54955bda84c0/blt29f81987fc45e009/685be68a86fe461c81bdf709/Fairphone_6.jpg?width=1280&auto=webp&quality=80&disable=upscale",
      url: "https://www.frandroid.com/android/3031737_on-nattendait-pas-fairphone-ici-android-16-debarque-sur-le-fairphone-6-avec-un-support-jusquen-2033"
    },
    {
      title: "Microsoft abandonne l'installation automatique de Microsoft 365 Copilot sur Windows 11",
      source: "Frandroid",
      date: "18 mars 2026",
      summary: "Face au mécontentement généralisé et à la montée du terme 'Microslop', Microsoft suspend temporairement le déploiement forcé de l'app Microsoft 365 Copilot sur Windows 11. Un recul qui illustre les limites de l'imposition de l'IA à marche forcée.",
      image: "https://support.microsoft.com/images/en-us/a800a3f9-f73c-46b0-9b08-774017436549",
      url: "https://www.frandroid.com/marques/microsoft/3030653_microsoft-abandonne-linstallation-automatique-de-microsoft-365-copilot-sur-windows-11"
    },
    {
      title: "Proton Born & Private : réservez une adresse e-mail sécurisée pour votre enfant",
      source: "IT-Connect",
      date: "21 mars 2026",
      summary: "Proton lance une initiative pour permettre aux parents de réserver une adresse e-mail chiffrée pour leurs enfants. Une stratégie qui mise sur la protection de la vie privée dès le plus jeune âge au sein de l'écosystème Proton.",
      image: "https://www.justgeek.fr/wp-content/uploads/2026/03/proton-mail-born-private.webp",
      url: "https://www.it-connect.fr/proton-born-private-reservez-une-adresse-e-mail-pour-votre-enfant/"
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
            <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <h2 className="text-3xl font-semibold text-white flex items-center gap-4">
                  <Search className="w-8 h-8 text-indigo-400" />
                  Thème de Veille
                </h2>
                
                {/* --- BOUTON DE TÉLÉCHARGEMENT PDF --- */}
                <a 
                  href="/Mise en place de ma veille technologique avec Feedly.pdf" 
                  download="Mise en place de ma veille technologique avec Feedly.pdf"
                  className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 group shadow-lg shadow-indigo-500/20 active:scale-95"
                >
                  <Download className="w-5 h-5 group-hover:bounce" />
                  Guide Méthodologique (PDF)
                </a>
              </div>

              <div className="prose prose-invert prose-xl max-w-none text-zinc-300">
                <h3 className="text-white font-bold text-2xl mb-4">
                  Évolutions et contraintes des écosystèmes OS et matériels en 2026 : Nouveautés, Sécurité et Usages
                </h3>
                <p className="leading-relaxed">
                  Ma veille technologique porte sur les évolutions et les contraintes des écosystèmes OS et matériels en 2026 (iOS, Android, Windows, Linux, ChromeOS).
                </p>
                <div className="mt-8 p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl">
                    <p className="leading-relaxed m-0">
                    <strong className="text-indigo-400">Objectif :</strong> À travers l'étude des nouveautés de fonctionnalités, des vulnérabilités (CVE) et des stratégies des constructeurs (sideloading, IA, gestion du parc), anticiper les impacts techniques et sécuritaires sur la gestion d'un parc informatique en entreprise.
                    </p>
                </div>
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
                        onError={(e) => {
                          e.target.src = `https://picsum.photos/seed/art${index + 20}/400/225`;
                        }}
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