import { Search, Filter, Share2, Rss, ExternalLink, BookOpen, Target, Cpu, Monitor } from "lucide-react";

export default function Veille() {
  const veilleLinks = [
    { 
      title: "Windows 12 vs macOS 15 : Lequel choisir pour la productivité en 2026 ?", 
      source: "ZDNet", 
      date: "Jan 2026",
      summary: "Une analyse comparative des deux géants pour les professionnels, mettant en lumière les nouvelles fonctionnalités d'IA intégrées.",
      image: "https://picsum.photos/seed/os1/400/225",
      url: "#"
    },
    { 
      title: "Linux sur le poste de travail : L'année de la consécration en entreprise ?", 
      source: "Le Monde Informatique", 
      date: "Fév 2026",
      summary: "Comment les distributions Linux gagnent du terrain dans les environnements d'entreprise grâce à une meilleure compatibilité matérielle.",
      image: "https://picsum.photos/seed/linux/400/225",
      url: "#"
    },
    { 
      title: "ChromeOS Flex : La solution idéale pour recycler vos anciens PC en 2026", 
      source: "01net", 
      date: "Mars 2026",
      summary: "Découvrez comment donner une seconde vie à votre matériel vieillissant avec le système d'exploitation léger de Google.",
      image: "https://picsum.photos/seed/chromeos/400/225",
      url: "#"
    },
    { 
      title: "macOS et l'intégration de l'IA native : Faut-il switcher chez Apple ?", 
      source: "Numerama", 
      date: "Jan 2026",
      summary: "Apple franchit un cap avec l'intégration profonde de l'intelligence artificielle au cœur de son système d'exploitation.",
      image: "https://picsum.photos/seed/macos/400/225",
      url: "#"
    },
    { 
      title: "Ubuntu 26.04 LTS : Les nouveautés qui vont séduire les développeurs", 
      source: "Developpez.com", 
      date: "Avril 2026",
      summary: "Tour d'horizon de la nouvelle version LTS d'Ubuntu, axée sur la performance et les outils de développement.",
      image: "https://picsum.photos/seed/ubuntu/400/225",
      url: "#"
    },
    { 
      title: "Windows 11 en fin de vie : Pourquoi migrer vers Windows 12 dès maintenant", 
      source: "ITPro", 
      date: "Fév 2026",
      summary: "Les raisons de sécurité et de productivité qui poussent les DSI à accélérer la migration vers le nouvel OS de Microsoft.",
      image: "https://picsum.photos/seed/win12/400/225",
      url: "#"
    },
    { 
      title: "Comparatif OS 2026 : Windows, macOS ou Linux pour le jeu vidéo ?", 
      source: "Tom's Hardware", 
      date: "Mars 2026",
      summary: "L'état du gaming sur PC en 2026 : Proton fait-il enfin de Linux une alternative viable à Windows ?",
      image: "https://picsum.photos/seed/gaming/400/225",
      url: "#"
    },
    { 
      title: "Sécurité des OS : Quel système protège le mieux vos données en 2026 ?", 
      source: "Next", 
      date: "Jan 2026",
      summary: "Analyse des architectures de sécurité modernes : sandboxing, chiffrement et protection contre les malwares.",
      image: "https://picsum.photos/seed/security/400/225",
      url: "#"
    },
    { 
      title: "L'écosystème mobile s'invite sur PC : Faut-il y croire ?", 
      source: "Frandroid", 
      date: "Fév 2026",
      summary: "La convergence entre les OS mobiles et de bureau s'accélère. Quels sont les avantages pour l'utilisateur final ?",
      image: "https://picsum.photos/seed/mobile/400/225",
      url: "#"
    },
    { 
      title: "Développement web : Pourquoi macOS reste le choix numéro 1 des agences", 
      source: "Journal du Net", 
      date: "Mars 2026",
      summary: "Enquête sur les raisons qui font de l'écosystème Apple le standard dans l'industrie du développement web.",
      image: "https://picsum.photos/seed/devweb/400/225",
      url: "#"
    },
    { 
      title: "Fedora vs Ubuntu : Quel Linux choisir pour une utilisation quotidienne ?", 
      source: "Linux Pratique", 
      date: "Jan 2026",
      summary: "Un face-à-face détaillé entre les deux distributions majeures pour vous aider à faire le bon choix.",
      image: "https://picsum.photos/seed/fedora/400/225",
      url: "#"
    },
    { 
      title: "Windows 12 et l'abonnement Cloud PC : La fin de l'OS local ?", 
      source: "Clubic", 
      date: "Avril 2026",
      summary: "Microsoft pousse de plus en plus vers le Cloud PC. Est-ce la fin des systèmes d'exploitation installés localement ?",
      image: "https://picsum.photos/seed/cloudpc/400/225",
      url: "#"
    },
    { 
      title: "L'impact écologique de votre OS : Linux est-il vraiment plus vert ?", 
      source: "GreenIT.fr", 
      date: "Fév 2026",
      summary: "Étude sur la consommation énergétique et l'obsolescence programmée selon le système d'exploitation choisi.",
      image: "https://picsum.photos/seed/greenit/400/225",
      url: "#"
    },
    { 
      title: "macOS en entreprise : Les défis du déploiement à grande échelle (MDM)", 
      source: "Silicon.fr", 
      date: "Mars 2026",
      summary: "Comment les administrateurs systèmes gèrent-ils des parcs de Mac en entreprise grâce aux solutions MDM ?",
      image: "https://picsum.photos/seed/mdm/400/225",
      url: "#"
    },
    { 
      title: "Bilan 2026 : Parts de marché des systèmes d'exploitation de bureau", 
      source: "StatCounter Blog", 
      date: "Avril 2026",
      summary: "Les derniers chiffres sur l'adoption des différents OS à travers le monde et les tendances à venir.",
      image: "https://picsum.photos/seed/stats/400/225",
      url: "#"
    },
    { 
      title: "L'avenir des OS : Vers des interfaces entièrement générées par l'IA ?", 
      source: "Wired", 
      date: "Mai 2026",
      summary: "Prospective sur la façon dont l'intelligence artificielle pourrait redéfinir l'interaction homme-machine au niveau de l'OS.",
      image: "https://picsum.photos/seed/aios/400/225",
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
                <h3 className="text-white font-bold text-2xl mb-4">Quel système d'exploitation choisir en 2026 ?</h3>
                <p className="leading-relaxed">
                  Ma veille technologique se concentre sur l'évolution et la comparaison des systèmes d'exploitation (Windows, macOS, Linux, ChromeOS) en 2026.
                </p>
                <p className="mt-6 leading-relaxed">
                  <strong className="text-indigo-400">Objectif :</strong> Analyser les critères de choix (compatibilité, sécurité, intégration IA, écosystème, impact écologique) pour conseiller au mieux les utilisateurs et les entreprises face à la fragmentation du marché.
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
