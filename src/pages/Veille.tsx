import { Search, Filter, Share2, Rss, ExternalLink, BookOpen, Target, Cpu, Monitor } from "lucide-react";

export default function Veille() {
  const veilleLinks = [
    { 
      title: "iOS 26.4 corrige enfin le clavier de l’iPhone", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "La mise à jour iOS 26.4 améliore la saisie rapide en corrigeant un problème majeur du clavier iPhone.",
      image: "https://source.unsplash.com/400x225/?iphone,ios",
      url: "https://www.lesnumeriques.com/telephone-portable/ios-26-4-repare-enfin-le-clavier-de-l-iphone-ceux-qui-ecrivent-vite-vont-etre-ravis-n253240.html"
    },
    { 
      title: "PowerToys 0.98 ajoute un dock avancé à Windows", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Microsoft enrichit PowerToys avec un nouveau dock améliorant la productivité sur Windows.",
      image: "https://source.unsplash.com/400x225/?windows,desktop",
      url: "https://www.it-connect.fr/powertoys-0-98-est-disponible-et-apporte-un-nouveau-dock-bien-pratique-a-windows/"
    },
    { 
      title: "Windows 11 bloque certaines connexions Microsoft", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "Un bug réseau empêche l'accès à Teams, OneDrive et Edge sur certains postes Windows 11.",
      image: "https://source.unsplash.com/400x225/?windows,error",
      url: "https://www.clubic.com/actualite-605446-windows-11-bloque-la-connexion-a-teams-onedrive-et-edge-sur-fond-de-fausse-panne-internet.html"
    },
    { 
      title: "Opera GX arrive sur Linux pour les gamers", 
      source: "Clubic", 
      date: "Mars 2026",
      summary: "Le navigateur gaming Opera GX devient disponible sur Linux, renforçant son attractivité.",
      image: "https://source.unsplash.com/400x225/?linux,gaming",
      url: "https://www.clubic.com/actualite-605371-bonne-nouvelle-pour-les-gamers-sous-linux-opera-gx-est-arrive.html"
    },
    { 
      title: "Android limite davantage le sideloading", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Google renforce la sécurité Android en restreignant l'installation d'applications externes.",
      image: "https://source.unsplash.com/400x225/?android,security",
      url: "https://www.lesnumeriques.com/telephone-portable/android-perd-ce-qui-le-rendait-unique-installer-une-app-comme-on-veut-quand-on-veut-n253300.html"
    },
    { 
      title: "Amazon lance un smartphone Alexa", 
      source: "Les Numériques", 
      date: "Mars 2026",
      summary: "Amazon revient sur le marché mobile avec un smartphone intégrant fortement Alexa.",
      image: "https://source.unsplash.com/400x225/?smartphone,alexa",
      url: "https://www.lesnumeriques.com/mobilite-c17/amazon-lance-un-smartphone-alexa-10-ans-apres-l-echec-du-fire-phone-n253350.html"
    },
    { 
      title: "L’identité devient centrale en cybersécurité", 
      source: "LeMagIT", 
      date: "Mars 2026",
      summary: "Les systèmes d'identité s’imposent comme élément clé du contrôle des infrastructures IT.",
      image: "https://source.unsplash.com/400x225/?cybersecurity,identity",
      url: "https://www.lemagit.fr/actualites/366640501/Lidentite-simpose-progressivement-comme-le-plan-de-controle-de-linformatique-dentreprise"
    },
    { 
      title: "AdGuard Home vulnérable à une compromission totale", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Une faille critique (CVE-2026-32136) expose AdGuard Home à des attaques majeures.",
      image: "https://source.unsplash.com/400x225/?hacking,security",
      url: "https://www.it-connect.fr/votre-adguard-home-est-vulnerable-a-une-compromission-totale-cve-2026-32136/"
    },
    { 
      title: "Debian 13.4 disponible : nouveautés", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Nouvelle version Debian apportant corrections et améliorations de stabilité.",
      image: "https://source.unsplash.com/400x225/?linux,server",
      url: "https://www.it-connect.fr/debian-13-4-est-disponible-quapporte-cette-version/"
    },
    { 
      title: "Windows 11 permet de supprimer les apps préinstallées", 
      source: "IT-Connect", 
      date: "Mars 2026",
      summary: "Un nouveau paramètre simplifie la suppression des applications inutiles.",
      image: "https://source.unsplash.com/400x225/?windows,settings",
      url: "https://www.it-connect.fr/windows-11-le-nouveau-parametre-qui-permet-de-supprimer-toutes-les-apps-indesirables/"
    },
    { 
      title: "Google durcit le sideloading Android", 
      source: "iGeneration", 
      date: "Mars 2026",
      summary: "Google impose de nouvelles restrictions pour renforcer la sécurité des appareils Android.",
      image: "https://source.unsplash.com/400x225/?android,phone",
      url: "https://www.igen.fr/android/2026/03/android-comment-google-va-serrer-la-vis-sur-le-sideloading-dandroid-155299"
    },
    { 
      title: "Firefox va intégrer un VPN gratuit", 
      source: "Journal du Geek", 
      date: "Mars 2026",
      summary: "Mozilla prévoit un VPN intégré à Firefox, mais certaines limites subsistent.",
      image: "https://source.unsplash.com/400x225/?firefox,privacy",
      url: "https://www.journaldugeek.com/2026/03/19/firefox-va-integrer-un-vpn-gratuit-au-navigateur-mais-il-y-a-un-couac/"
    },
    { 
      title: "Apple perd un talent clé", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Un expert quitte Apple, illustrant les tensions dans le secteur tech.",
      image: "https://source.unsplash.com/400x225/?apple,technology",
      url: "https://www.frandroid.com/marques/apple/3032407_apple-perd-encore-un-talent-au-profit-doura-et-ca-commence-a-faire-beaucoup"
    },
    { 
      title: "Android 16 arrive sur Fairphone 6", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Le Fairphone 6 bénéficie d’un support logiciel long jusqu’en 2033.",
      image: "https://source.unsplash.com/400x225/?android,eco",
      url: "https://www.frandroid.com/android/3031737_on-nattendait-pas-fairphone-ici-android-16-debarque-sur-le-fairphone-6-avec-un-support-jusquen-2033"
    },
    { 
      title: "Microsoft abandonne Copilot auto-installé", 
      source: "Frandroid", 
      date: "Mars 2026",
      summary: "Microsoft revient sur l'installation automatique de Copilot dans Windows 11.",
      image: "https://source.unsplash.com/400x225/?microsoft,ai",
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
        
        <div className="space-y-12">
          <h3 className="text-4xl font-bold text-white flex items-center gap-5 border-b border-zinc-800 pb-8">
            <Monitor className="w-10 h-10 text-indigo-400" />
            Veille Technologique
          </h3>
          
          <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
              <Search className="w-8 h-8 text-indigo-400" />
              Thème de Veille
            </h2>

            <h3 className="text-white font-bold text-2xl mb-4">
              Évolutions et contraintes des écosystèmes OS et matériels en 2026 : Nouveautés, Sécurité et Usages
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              Cette veille analyse les systèmes d’exploitation modernes (Windows, Linux, Android, iOS) ainsi que leurs contraintes matérielles, sécuritaires et stratégiques.
            </p>

            <p className="mt-6 text-zinc-300 leading-relaxed">
              <strong className="text-indigo-400">Objectif :</strong> anticiper les impacts techniques, sécuritaires et organisationnels sur la gestion des systèmes informatiques.
            </p>
          </section>

          {/* GRILLE ARTICLES */}
          <section>
            <h2 className="text-3xl text-white mb-10 flex items-center gap-4">
              <Rss className="w-8 h-8 text-indigo-400" />
              Sources & Articles de Veille (15 références)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {veilleLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-500 transition">

                  <img src={link.image} className="h-52 w-full object-cover" />

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400">
                      {link.title}
                    </h4>

                    <p className="text-sm text-zinc-400 mb-4">
                      {link.summary}
                    </p>

                    <div className="flex justify-between text-sm text-zinc-500">
                      <span>{link.source}</span>
                      <span>{link.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}