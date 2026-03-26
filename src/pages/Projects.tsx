import { MOCK_PROJECTS, SKILL_BLOCKS } from "@/lib/utils";
import React, { useState, useRef, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, FileText, List, Download, ArrowUp, ArrowDown, Building, Briefcase, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Server, ShieldCheck, Target, HardDrive, ClipboardList } from "lucide-react";
import { ZoomIn, Maximize } from "lucide-react";

// ON MET L'EXPORT ICI AVEC currentSection (Une seule fois !)
export default function Projects({ currentSection }: { currentSection?: string }) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showAlternance, setShowAlternance] = useState(false);
  const [showStage, setShowStage] = useState(false);
  const [formationPage, setFormationPage] = useState(0);
  const [activeCompany, setActiveCompany] = useState<'alternance' | 'stage' | null>(null);
  const [isTocOpen, setIsTocOpen] = useState(false);
  
  // 1. État pour stocker l'image à afficher en grand
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const docContentRef = useRef<HTMLDivElement>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);

  // 2. Détecteur de clic sur les images injectées
  useEffect(() => {
    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' && target.closest('.prose')) {
        setFullScreenImage((target as HTMLImageElement).src);
      }
    };
    const currentRef = docContentRef.current;
    if (currentRef) currentRef.addEventListener('click', handleImageClick);
    return () => { if (currentRef) currentRef.removeEventListener('click', handleImageClick); };
  }, [selectedProject]);

  const project = MOCK_PROJECTS.find((p) => p.id === selectedProject);

  const formationProjects = MOCK_PROJECTS.filter(p => p.type === 'formation');
  const ITEMS_PER_PAGE = 6;
  const totalFormationPages = Math.ceil(formationProjects.length / ITEMS_PER_PAGE);
  const activitesFormation = formationProjects.slice(formationPage * ITEMS_PER_PAGE, (formationPage + 1) * ITEMS_PER_PAGE);
  
  const projetsScolaires = MOCK_PROJECTS.filter(p => p.type === 'scolaire');
  const alternanceProjects = MOCK_PROJECTS.filter(p => p.type === 'alternance');
  const stageProjects = MOCK_PROJECTS.filter(p => p.type === 'stage');

  // Navigation fluide (Boutons Haut/Bas)
  const scrollToTop = () => modalScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => modalScrollRef.current?.scrollTo({ top: modalScrollRef.current.scrollHeight, behavior: 'smooth' });

  // Génération dynamique du sommaire (Compatible 'steps' et 'analysis')
  const tocItems = useMemo(() => {
    const contentToScan = project?.steps || project?.analysis;
    if (!contentToScan) return [];
    
    const regex = /<(h[23])\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/\1>/gi;
    const matches = [...contentToScan.matchAll(regex)];
    return matches.map(match => ({
      level: match[1].toLowerCase(),
      id: match[2],
      title: match[3].replace(/<[^>]*>?/gm, '').trim()
    }));
  }, [project?.steps, project?.analysis]);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- COPIE LE BLOC ICI --- */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setFullScreenImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }}
              src={fullScreenImage} 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-zinc-800"
            />
            <p className="text-zinc-500 mt-6 text-xl flex items-center gap-3">
               <Maximize className="w-5 h-5"/> Cliquez n'importe où pour fermer
            </p>
          </motion.div>
        )}
      </AnimatePresence>

  
        {/* SECTION 1: Activités Réalisées en Formation */}
      {(!currentSection || currentSection === 'activites-formation') && (
      <section id="activites-formation" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
        <header className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
            <span className="text-indigo-500 opacity-50">01.</span>
            Activités Réalisées en Formation
          </h2>
          <p className="text-2xl text-zinc-400 max-w-4xl leading-relaxed">
            Travaux pratiques et activités techniques effectués dans le cadre du cursus scolaire (Lab SIO).
          </p>
        </header>

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={formationPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
            >
              {activitesFormation.map((p) => (
                <motion.div
                  key={p.id}
                  layoutId={`card-${p.id}`}
                  onClick={() => setSelectedProject(p.id)}
                  className="group cursor-pointer bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 hover:border-indigo-500/50 transition-all flex flex-col relative overflow-hidden h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-2 rounded-full text-base uppercase font-bold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Activité
                    </span>
                    <span className="text-zinc-500 text-lg font-mono">2024-2025</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-xl text-zinc-400 mb-8 leading-relaxed flex-1 line-clamp-4">
                    {p.objectives}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3 w-full">
                    {p.tools?.slice(0, 4).map((tool) => (
                      <span key={tool} className="text-base text-zinc-300 bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalFormationPages > 1 && (
          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={() => setFormationPage(p => Math.max(0, p - 1))}
              disabled={formationPage === 0}
              className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-800 hover:border-indigo-500/50 transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div className="flex gap-3">
              {Array.from({ length: totalFormationPages }).map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-3 h-3 rounded-full transition-all ${idx === formationPage ? 'bg-indigo-500 scale-125' : 'bg-zinc-700'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setFormationPage(p => Math.min(totalFormationPages - 1, p + 1))}
              disabled={formationPage === totalFormationPages - 1}
              className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-800 hover:border-indigo-500/50 transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}

        {/* --- COMPÉTENCES DÉVELOPPÉES --- */}
        <div className="mt-20 pt-12 border-t border-zinc-800">
          <div className="flex items-center gap-4 mb-8">
            <CheckCircle className="w-8 h-8 text-indigo-500" />
            <h3 className="text-3xl font-bold text-white">
              Compétences Développées
            </h3>
          </div>
          
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            L'ensemble de ces travaux pratiques, réalisés au cours de mes deux années de formation (campus Saint-Joseph et lycée Lamartine), m'a permis de développer plusieurs compétences majeures en lien avec le référentiel de l'épreuve E5 du BTS SIO option SISR :
          </p>

          {/* Grille 2x2 pour les 4 thèmes officiels de l'épreuve E5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Thème 1 : Patrimoine */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                  <Server className="w-6 h-6 text-indigo-400" />
                </div>
                <h4 className="text-2xl font-bold text-zinc-200">Gérer le patrimoine informatique</h4>
              </div>
              <ul className="text-zinc-400 leading-relaxed text-lg space-y-4 list-disc pl-5">
                <li><strong className="text-zinc-300">recensement, automatisation et gestion complète</strong> du parc matériel et logiciel (GLPI, FOG).</li>
                <li><strong className="text-zinc-300">mise en œuvre de solutions de continuité</strong> de service et de sauvegarde (RAID 5, Veeam Backup).</li>
                <li><strong className="text-zinc-300">déploiement d'outils de supervision</strong> pour surveiller proactivement l'infrastructure (Nagios, Zabbix).</li>
              </ul>
            </div>

            {/* Thème 2 : Service */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                  <Target className="w-6 h-6 text-indigo-400" />
                </div>
                <h4 className="text-2xl font-bold text-zinc-200">Mettre à disposition un service</h4>
              </div>
              <ul className="text-zinc-400 leading-relaxed text-lg space-y-4 list-disc pl-5">
                <li><strong className="text-zinc-300">installation et configuration centralisée</strong> des services réseaux et systèmes (Active Directory, DHCP, DNS).</li>
                <li><strong className="text-zinc-300">déploiement et hébergement de serveurs Web</strong> sur des environnements hybrides (IIS, pile LAMP).</li>
                <li><strong className="text-zinc-300">conception d'architectures réseaux segmentées</strong> et sécurisation des accès distants (pfSense, OpenVPN, AdGuard).</li>
              </ul>
            </div>

            {/* Thème 3 : Incidents */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-indigo-400" />
                </div>
                <h4 className="text-2xl font-bold text-zinc-200">Répondre aux incidents & assistance</h4>
              </div>
              <ul className="text-zinc-400 leading-relaxed text-lg space-y-4 list-disc pl-5">
                <li><strong className="text-zinc-300">mise en place d'une plateforme centralisée</strong> de ticketing avec gestion des SLA (module Helpdesk GLPI).</li>
                <li><strong className="text-zinc-300">diagnostic et traitement technique</strong> des dysfonctionnements réseaux rencontrés lors des déploiements (routage, pare-feu).</li>
                <li><strong className="text-zinc-300">résolution d'anomalies liées aux accès</strong> utilisateurs et application de restrictions de sécurité (GPO, règles NTFS).</li>
              </ul>
            </div>

            {/* Thème 4 : Mode Projet */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                  <Briefcase className="w-6 h-6 text-indigo-400" />
                </div>
                <h4 className="text-2xl font-bold text-zinc-200">Travailler en mode projet</h4>
              </div>
              <ul className="text-zinc-400 leading-relaxed text-lg space-y-4 list-disc pl-5">
                <li><strong className="text-zinc-300">planification et évolution progressive</strong> des infrastructures tout au long des deux années d'études.</li>
                <li><strong className="text-zinc-300">rédaction rigoureuse de documentations techniques</strong> détaillées pour assurer la traçabilité des interventions.</li>
                <li><strong className="text-zinc-300">évaluation des résultats obtenus</strong> et adaptation technique face aux incompatibilités (Windows Server / Linux).</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      )}
      {/* SECTION 2: Activités en Milieu Professionnel */}
      {(!currentSection || currentSection === 'activites-pro') && (
        <section id="activites-pro" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900 relative">
          
          {/* En-tête de la page */}
          <header className="mb-16 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
              <span className="text-indigo-500 opacity-50">02.</span>
              Activités en Milieu Professionnel
            </h2>
            <p className="text-2xl text-zinc-400 max-w-4xl leading-relaxed">
              Immersion en entreprise : deux environnements techniques distincts pour développer mon expertise réseau et système.
            </p>
          </header>

          {/* Grille divisée en 2 avec le trait vertical central */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 relative z-10">
            {/* Le trait vertical de séparation (visible uniquement sur grand écran) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />

            {/* ================= COLONNE GAUCHE : GENDARMERIE ================= */}
            <div className="flex flex-col gap-8 lg:pr-16">
              {/* Logo Centré et Agrandi */}
            <div className="flex justify-center mb-12">
              <img 
                src="/gendarmerie-logo.png" 
                alt="Logo Gendarmerie Nationale" 
                className="h-40 w-auto object-contain" 
              />
            </div>
              {/* Présentation */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl"><Building className="w-6 h-6 text-blue-400" /></div>
                  <h3 className="text-4xl font-bold text-white">Gendarmerie Nationale</h3>
                </div>
                <h4 className="text-2xl font-bold text-blue-400 mb-6">SOLC - Alternance (1ère année)</h4>
                <p className="text-zinc-300 text-lg leading-relaxed bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                  Dans le cadre de ma première année de BTS SIO, j'ai effectué mon alternance au sein de la <strong>SOLC</strong> (Section Opérationnelle de Lutte contre les Cybermenaces). Cette unité est spécialisée dans le soutien technique et le maintien en condition de sécurité des infrastructures.
                </p>
              </div>

              {/* Liste des missions (Tirées de ton tableau 1) */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3 border-b border-zinc-800 pb-3">
                  <ClipboardList className="w-6 h-6 text-blue-500" /> Missions réalisées
                </h4>
                <ul className="text-zinc-400 leading-relaxed text-lg space-y-3 list-disc pl-5">
                  <li>Inventaire, comptage des supports de stockage et saisie via <strong>OCS Inventory</strong>.</li>
                  <li>Vérification et modification des droits ACL sur les partages de fichiers.</li>
                  <li>Application de la convention de nommage du matériel réglementaire.</li>
                  <li>Déploiement d'un site local centralisant les outils métiers du groupement (Silo).</li>
                  <li>Exploitation et suivi des tickets d'assistance via <strong>Sol@ris</strong>.</li>
                  <li>Intégration et gestion des accès machines via le protocole Kerberos.</li>
                  <li>Mise en œuvre d'un serveur PXE pour l'installation massive d'OS.</li>
                  <li>Dépannage applicatif (LRPGN), certificats Ubiquity et messagerie Thunderbird.</li>
                  <li>Gestion de serveurs Dovecot et filtrage antispam.</li>
                  <li>Configuration de serveurs de fichiers (SF) via des partages Samba.</li>
                  <li>Déploiement de serveurs multiservices (SMTP) et gestion des flux mails.</li>
                  <li>Préparation de PC Ubiquity incluant le chiffrement de disque et l'accès VPN.</li>
                </ul>
              </div>

              {/* Carte du Projet Détaillé Gendarmerie */}
              <div className="mt-12">
                <h4 className="text-lg font-bold text-zinc-500 mb-4 uppercase tracking-widest">Activité détaillée</h4>
                {alternanceProjects.map((p) => (
                  <motion.div
                    key={p.id}
                    layoutId={`card-${p.id}`}
                    onClick={() => setSelectedProject(p.id)}
                    className="group cursor-pointer bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 hover:border-blue-500/50 transition-all flex flex-col relative overflow-hidden shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-4 py-2 rounded-full text-sm uppercase font-bold tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">Alterance</span>
                      <span className="text-zinc-500 font-mono">2024-2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">{p.title}</h3>
                    <p className="text-lg text-zinc-400 mb-6 leading-relaxed line-clamp-2">{p.objectives}</p>
                    <div className="mt-auto flex flex-wrap gap-2 w-full">
                      {p.tools?.slice(0, 3).map((tool) => (
                        <span key={tool} className="text-sm text-zinc-300 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">{tool}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ================= COLONNE DROITE : HISIS INFORMATIQUE ================= */}
            <div className="flex flex-col gap-8 lg:pl-16 mt-16 lg:mt-0">
                            {/* Logo Centré et Agrandi */}
              <div className="flex justify-center mb-12">
                <img 
                  src="/hisis-logo.png" 
                  alt="Logo Hisis Informatique" 
                  className="h-40 w-auto object-contain" 
                />
              </div>
              {/* Présentation */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl"><Briefcase className="w-6 h-6 text-emerald-400" /></div>
                  <h3 className="text-4xl font-bold text-white">Hisis Informatique</h3>
                </div>
                <h4 className="text-2xl font-bold text-emerald-400 mb-6">Stage (2ème année)</h4>
                <p className="text-zinc-300 text-lg leading-relaxed bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                  Dans le cadre de mon stage de deuxième année, j'ai intégré <strong>Hisis Informatique</strong>, une entreprise spécialisée dans l’ingénierie système et réseau pour les établissements de santé. Elle intervient notamment dans la mise en place de serveurs et d’équipements réseau
                </p>
              </div>

              {/* Liste des missions (Tirées de ton tableau 2) */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3 border-b border-zinc-800 pb-3">
                  <Target className="w-6 h-6 text-emerald-500" /> Missions réalisées
                </h4>
                <ul className="text-zinc-400 leading-relaxed text-lg space-y-3 list-disc pl-5">
                                  <li>Évaluation d'infrastructures selon les guides <strong>MaturiN, OPSIMS et ANSSI</strong>.</li>
                                  <li>Guide de transition de Microsoft Exchange vers Postfix pour optimisation des licences.</li>
                                  <li>Installation, configuration et optimisation de bornes Wi-Fi haute densité.</li>
                                  <li>Mise en place d'une liste blanche d'adresses MAC sur routeur <strong>OPNsense</strong>.</li>
                                  <li>Étude comparative pour une solution de prise en main à distance auto-hébergée (RustDesk).</li>
                                  <li>Installation et configuration d'un serveur <strong>RustDesk</strong> sur Proxmox.</li>
                                  <li>Support technique de proximité et gestion des incidents mineurs (Helpdesk).</li>
                                  <li>Procédure PowerShell pour l'exportation des utilisateurs Exchange vers Postfix.</li>
                  </ul>
              </div>

              {/* Carte du Projet Détaillé Hisis */}
              <div className="mt-12">
                <h4 className="text-lg font-bold text-zinc-500 mb-4 uppercase tracking-widest">Activité détaillée</h4>
                {stageProjects.map((p) => (
                  <motion.div
                    key={p.id}
                    layoutId={`card-${p.id}`}
                    onClick={() => setSelectedProject(p.id)}
                    className="group cursor-pointer bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 hover:border-emerald-500/50 transition-all flex flex-col relative overflow-hidden shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-4 py-2 rounded-full text-sm uppercase font-bold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">STAGE</span>
                      <span className="text-zinc-500 font-mono">2025-2026</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-tight">{p.title}</h3>
                    <p className="text-lg text-zinc-400 mb-6 leading-relaxed line-clamp-2">{p.objectives}</p>
                    <div className="mt-auto flex flex-wrap gap-2 w-full">
                      {p.tools?.slice(0, 3).map((tool) => (
                        <span key={tool} className="text-sm text-zinc-300 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">{tool}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        {/* ================= COMPÉTENCES EN MILIEU PROFESSIONNEL ================= */}
          <div id="competences-pro" className="mt-24 pt-16 border-t border-zinc-800">
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle className="w-8 h-8 text-indigo-500" />
              <h3 className="text-3xl font-bold text-white">
                Compétences Validées en Entreprise
              </h3>
            </div>
            
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Mes expériences en alternance (Gendarmerie Nationale) et en stage (Hisis Informatique) m'ont permis de confronter mes acquis théoriques à des environnements de production critiques, validant ainsi les 4 grands domaines du référentiel SISR :
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Thème 1 : Patrimoine */}
              <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-500/10 rounded-xl">
                    <Server className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-200">Gérer le patrimoine informatique</h4>
                </div>
                <ul className="text-zinc-400 leading-relaxed text-lg space-y-4 list-disc pl-5">
                  <li><strong className="text-zinc-300">Recensement et maintien à jour du parc</strong> (OCS Inventory) et application rigoureuse des conventions de nommage réglementaires.</li>
                  <li><strong className="text-zinc-300">Évaluation et sécurisation des infrastructures</strong> existantes en s'appuyant sur des référentiels reconnus (guides ANSSI, MaturiN, OPSIMS).</li>
                  <li><strong className="text-zinc-300">Gestion des licences et optimisation des coûts</strong> via l'étude de solutions open-source (transition Exchange vers Postfix, RustDesk).</li>
                </ul>
              </div>

              {/* Thème 2 : Service */}
              <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-500/10 rounded-xl">
                    <Target className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-200">Mettre à disposition un service</h4>
                </div>
                <ul className="text-zinc-400 leading-relaxed text-lg space-y-4 list-disc pl-5">
                  <li><strong className="text-zinc-300">Déploiement automatisé et sécurisé</strong> de postes de travail (serveur PXE, préparation de PC avec chiffrement et accès VPN).</li>
                  <li><strong className="text-zinc-300">Installation et configuration d'infrastructures réseaux</strong> (bornes Wi-Fi haute densité, serveurs de fichiers Samba, annuaire Kerberos).</li>
                  <li><strong className="text-zinc-300">Mise en production de services applicatifs</strong> et de messagerie (serveurs SMTP/Dovecot, RustDesk sous environnement Proxmox).</li>
                </ul>
              </div>

              {/* Thème 3 : Incidents */}
              <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-500/10 rounded-xl">
                    <ShieldCheck className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-200">Répondre aux incidents & assistance</h4>
                </div>
                <ul className="text-zinc-400 leading-relaxed text-lg space-y-4 list-disc pl-5">
                  <li><strong className="text-zinc-300">Prise en charge, exploitation et suivi</strong> des tickets d'incidents utilisateurs (plateforme Sol@ris et support technique de proximité).</li>
                  <li><strong className="text-zinc-300">Diagnostic et résolution de dysfonctionnements</strong> applicatifs, matériels et réseaux (dépannage messagerie, certificats Ubiquity, LRPGN).</li>
                  <li><strong className="text-zinc-300">Gestion des habilitations et sécurisation</strong> des accès (modification des droits ACL, listes blanches MAC sur pare-feu OPNsense).</li>
                </ul>
              </div>

              {/* Thème 4 : Mode Projet */}
              <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-500/10 rounded-xl">
                    <Briefcase className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-200">Travailler en mode projet</h4>
                </div>
                <ul className="text-zinc-400 leading-relaxed text-lg space-y-4 list-disc pl-5">
                  <li><strong className="text-zinc-300">Étude comparative de solutions techniques</strong> pour répondre à un besoin métier précis (benchmark de solutions de prise en main à distance).</li>
                  <li><strong className="text-zinc-300">Conception de scripts pour l'automatisation</strong> de tâches d'administration (procédure PowerShell d'exportation d'utilisateurs).</li>
                  <li><strong className="text-zinc-300">Rédaction de documentations et déploiement</strong> d'outils de centralisation (site Silo, guides de transition Exchange) pour accompagner les utilisateurs.</li>
                </ul>
              </div>

            </div>
          </div>

        </section>
      )}

      {/* SECTION 3: Projets Réalisés en Milieu Scolaire */}
      {(!currentSection || currentSection === 'projets-scolaires') && (
        <section id="projets-scolaires" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
          <header className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
              <span className="text-indigo-500 opacity-50">03.</span>
              Projets Réalisés
            </h2>
            <p className="text-2xl text-zinc-400 max-w-4xl leading-relaxed">
              Projets d'envergure menés durant la formation.
            </p>
          </header>

          {projetsScolaires.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projetsScolaires.map((p) => (
                <motion.div
                  key={p.id}
                  layoutId={`card-${p.id}`}
                  onClick={() => setSelectedProject(p.id)}
                  className="group cursor-pointer bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 hover:border-indigo-500/50 transition-all flex flex-col relative overflow-hidden h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-2 rounded-full text-base uppercase font-bold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Projet
                    </span>
                    <span className="text-zinc-500 text-lg font-mono">{p.context}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-xl text-zinc-400 mb-8 leading-relaxed flex-1 line-clamp-3">
                    {p.objectives}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3 w-full">
                    {p.tools?.slice(0, 4).map((tool) => (
                      <span key={tool} className="text-base text-zinc-300 bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center p-20 bg-zinc-900/30 border border-zinc-800 rounded-3xl border-dashed">
              <p className="text-3xl text-zinc-500 font-medium">À venir...</p>
            </div>
          )}
        </section>
      )}
      {/* L'INTERFACE MODAL PRO */}
      <AnimatePresence>
        {selectedProject && project && (
        <div className="fixed inset-0 z-[100] flex justify-center items-stretch p-4 md:p-8 bg-black/90 backdrop-blur-md">            
            <div className="w-full max-w-[1800px] h-full flex flex-col xl:flex-row gap-6 relative z-10">
              
              {/* PANNEAU DE GAUCHE : Sommaire (Tiroir dynamique au survol) */}
            {(project.steps || project.analysis) && (
              <>
                {/* Le "crochet" d'activation à gauche de l'écran */}
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-32 bg-zinc-900 border border-zinc-700 rounded-r-2xl flex items-center justify-center cursor-pointer z-[110] shadow-[10px_0_30px_rgba(0,0,0,0.5)] hover:bg-indigo-600/20 hover:border-indigo-500 transition-all group"
                  onMouseEnter={() => setIsTocOpen(true)}
                >
                  <ChevronRight className="w-6 h-6 text-zinc-400 group-hover:text-indigo-400 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Le panneau du sommaire qui coulisse par-dessus le contenu */}
                <AnimatePresence>
                  {isTocOpen && (
                    <motion.aside
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      onMouseLeave={() => setIsTocOpen(false)}
                      className="fixed left-0 top-0 h-full w-[400px] z-[120] bg-zinc-950/95 backdrop-blur-2xl border-r border-zinc-800 p-8 flex flex-col shadow-[30px_0_60px_rgba(0,0,0,0.8)] overflow-y-auto no-scrollbar rounded-l-[2rem]"
                    >
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-6 sticky top-0 bg-transparent z-10 text-zinc-300">
                        <h4 className="text-2xl font-bold text-indigo-400 flex items-center gap-3">
                          <List className="w-6 h-6" /> Sommaire
                        </h4>
                        {project.evidence?.find(ev => ev.type === 'document') && (
                          <a 
                            href={project.evidence.find(ev => ev.type === 'document')?.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="w-12 h-12 flex items-center justify-center bg-zinc-900 hover:bg-indigo-600 text-zinc-400 hover:text-white rounded-full transition-all shadow-lg" 
                            title="Télécharger la documentation PDF"
                          >
                            <Download className="w-5 h-5" />
                          </a>
                        )}
                      </div>

                      <nav className="flex flex-col gap-4">
                        {tocItems.map((item, idx) => (
                          <a
                            key={idx}
                            href={`#${item.id}`}
                            onClick={() => setIsTocOpen(false)}
                            className={`transition-colors block leading-snug group flex items-start gap-3 ${
                              item.level === 'h2' 
                                ? 'text-zinc-200 hover:text-indigo-400 font-bold text-lg mt-4' 
                                : 'text-zinc-500 hover:text-indigo-300 pl-4 text-base font-medium'
                            }`}
                          >
                            {item.level === 'h3' && <span className="text-zinc-700 group-hover:text-indigo-500 mt-1 shrink-0">└</span>}
                            <span>{item.title}</span>
                          </a>
                        ))}
                      </nav>
                    </motion.aside>
                  )}
                </AnimatePresence>
              </>
            )}

            {/* PANNEAU DE DROITE : Contenu Technique */}
            <motion.main
              layoutId={`card-${selectedProject}`}
              ref={modalScrollRef}
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-[2rem] shadow-2xl relative overflow-y-auto scroll-smooth flex flex-col no-scrollbar"
            >
              {/* Header fixe du contenu */}
              <div className="sticky top-0 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 p-8 md:p-12 flex justify-between items-start z-30">
                <div className="pr-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-4 py-2 rounded-full text-sm uppercase font-bold tracking-wider ${project.type === "stage" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : project.type === "alternance" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : project.type === "scolaire" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"}`}>
                      {project.type}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{project.title}</h2>
                  <p className="text-zinc-400 text-2xl mt-4">{project.context}</p>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-4 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors shrink-0 shadow-lg">
                  <X className="w-8 h-8 text-zinc-400" />
                </button>
              </div>

              {/* Corps de la documentation */}
              <div className="p-8 md:p-16 space-y-24">
                
                  {/* 1. Présentation */}
                  <section>
                    <h3 className="text-2xl font-bold text-indigo-400 uppercase tracking-wider mb-8 flex items-center gap-4">
                      <FileText className="w-8 h-8" /> Présentation de l'activité
                    </h3>
                    <div className="text-zinc-300 leading-relaxed text-2xl md:text-3xl whitespace-pre-line">{project.description}</div>
                  </section>

                  {/* 2. Outils */}
                  {project.tools && project.tools.length > 0 && (
                    <section>
                      <h3 className="text-2xl font-bold text-indigo-400 uppercase tracking-wider mb-8 flex items-center gap-4">
                        <Briefcase className="w-8 h-8" /> Outils utilisés
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        {project.tools.map((tool, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-2xl">
                            <div className="w-3 h-3 rounded-full bg-indigo-500" />
                            <span className="text-xl md:text-2xl text-zinc-200 font-medium">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* 3. Difficultés */}
                  {project.difficulties && (
                    <section>
                      <h3 className="text-2xl font-bold text-indigo-400 uppercase tracking-wider mb-8 flex items-center gap-4">
                        <CheckCircle className="w-8 h-8" /> Difficultés rencontrées et solutions
                      </h3>
                      <div className="bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 rounded-[2rem]">
                        <p className="text-zinc-300 leading-relaxed text-xl md:text-3xl whitespace-pre-line">{project.difficulties}</p>
                      </div>
                    </section>
                  )}
                {/* 4. Section Technique Universelle (AVEC MARGE DYNAMIQUE SÉPARÉE ET ZOOM) */}
              {(project.steps || project.analysis) && (
                <section>
                  <h3 className="text-2xl font-bold text-indigo-400 uppercase tracking-wider mb-8 flex items-center gap-4">
                    <List className="w-8 h-8" /> 
                    {project.type === 'scolaire' ? "Analyse détaillée du projet" : "Documentation Technique"}
                  </h3>
                  
                  {/* La ref est placée ici pour surveiller les clics sur les images du contenu */}
                  <div ref={docContentRef} className="bg-zinc-900/20 border border-zinc-800 p-8 md:p-12 rounded-[2rem] overflow-hidden">
                    <div 
                      className={`prose prose-invert max-w-none text-zinc-300 text-xl md:text-2xl leading-relaxed 
                      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                      
                      ${project.type === 'scolaire' ? '[&_h2]:scroll-mt-[340px] [&_h3]:scroll-mt-[340px]' 
                        : '[&_h2]:scroll-mt-[280px] [&_h3]:scroll-mt-[280px]'}
                      
                      [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-8 [&_h2]:mt-12
                      [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-indigo-300 [&_h3]:mb-4 [&_h3]:mt-8
                      [&_pre]:overflow-x-auto [&_pre]:max-w-full [&_pre]:bg-zinc-950 [&_pre]:p-6 [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-zinc-800 [&_pre]:my-8 [&_code]:text-indigo-300 [&_code]:break-all [&_code]:bg-transparent 
                      /* Ajout du curseur loupe sur toutes les images */
                      [&_img]:rounded-2xl [&_img]:border [&_img]:border-zinc-800 [&_img]:my-12 [&_img]:mx-auto [&_img]:cursor-zoom-in`}
                      dangerouslySetInnerHTML={{ __html: project.steps || project.analysis || "" }} 
                    />
                  </div>
                </section>
              )}

                </div>

                {/* BOUTONS FLOTTANTS HAUT/BAS */}
                <div className="sticky bottom-12 flex justify-end px-12 pb-12 pointer-events-none">
                  <div className="flex flex-col gap-4 pointer-events-auto">
                    <button 
                      onClick={scrollToTop} 
                      className="w-16 h-16 flex items-center justify-center bg-zinc-800/90 hover:bg-indigo-600 border border-zinc-700 rounded-full text-zinc-300 hover:text-white transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md group" 
                      title="Remonter tout en haut"
                    >
                      <ArrowUp className="w-8 h-8 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <button 
                      onClick={scrollToBottom} 
                      className="w-16 h-16 flex items-center justify-center bg-zinc-800/90 hover:bg-indigo-600 border border-zinc-700 rounded-full text-zinc-300 hover:text-white transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md group" 
                      title="Aller tout en bas"
                    >
                      <ArrowDown className="w-8 h-8 group-hover:translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.main>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}