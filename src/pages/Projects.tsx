import { MOCK_PROJECTS, SKILL_BLOCKS } from "@/lib/utils";
import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, FileText, List, Download, ArrowUp, ArrowDown, Building, Briefcase, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showAlternance, setShowAlternance] = useState(false);
  const [showStage, setShowStage] = useState(false);
  const [formationPage, setFormationPage] = useState(0);

  const modalScrollRef = useRef<HTMLDivElement>(null);
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

      {/* SECTION 1: Activités Réalisées en Formation */}
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
      </section>

      {/* SECTION 2: Activités en Milieu Professionnel */}
      <section id="activites-pro" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
        <header className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
            <span className="text-indigo-500 opacity-50">02.</span>
            Activités en Milieu Professionnel
          </h2>
          <p className="text-2xl text-zinc-400 max-w-4xl leading-relaxed">
            Missions et responsabilités exercées dans un cadre professionnel (Alternance & Stage).
          </p>
        </header>

        <div className="space-y-12">
          {/* Bloc Alternance */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden transition-all">
            <div className="p-10 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex items-center gap-8">
                <div className="p-6 bg-blue-500/10 rounded-2xl shrink-0">
                  <Building className="w-12 h-12 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-4 py-1.5 rounded-full text-sm uppercase font-bold tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Alternance
                    </span>
                    <span className="text-zinc-500 text-lg font-mono">2024-2026</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">Gendarmerie Nationale (SOLC)</h3>
                  <p className="text-2xl text-zinc-400">Support technique et administration système</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAlternance(!showAlternance)}
                className="w-full md:w-auto flex items-center justify-center gap-4 px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xl font-semibold transition-colors"
              >
                {showAlternance ? "Masquer les activités" : "Voir les activités"}
                {showAlternance ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </button>
            </div>
            
            <AnimatePresence>
              {showAlternance && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-zinc-800 bg-zinc-950/50"
                >
                  <div className="p-10 md:p-12 space-y-12">
                    {alternanceProjects.map((p) => (
                      <div key={p.id} className="border-b border-zinc-800 pb-12 last:border-0 last:pb-0">
                        <h4 className="text-3xl font-bold text-blue-400 mb-4">{p.title}</h4>
                        <p className="text-2xl text-zinc-400 leading-relaxed mb-6">{p.objectives}</p>
                        <div className="flex flex-wrap gap-3">
                          {p.skills?.map(skillId => {
                            let skillLabel = skillId;
                            for (const block of SKILL_BLOCKS) {
                              const found = block.skills.find(s => s.id === skillId);
                              if (found) { skillLabel = found.label; break; }
                            }
                            return (
                              <span key={skillId} className="px-4 py-2 bg-zinc-950 text-zinc-300 rounded-xl text-lg border border-zinc-800 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                                {skillLabel}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bloc Stage */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden transition-all">
            <div className="p-10 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex items-center gap-8">
                <div className="p-6 bg-emerald-500/10 rounded-2xl shrink-0">
                  <Briefcase className="w-12 h-12 text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-4 py-1.5 rounded-full text-sm uppercase font-bold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Stage
                    </span>
                    <span className="text-zinc-500 text-lg font-mono">2025</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">Hisis Informatique</h3>
                  <p className="text-2xl text-zinc-400">Audit Cyber & Déploiement d'infrastructures</p>
                </div>
              </div>
              <button 
                onClick={() => setShowStage(!showStage)}
                className="w-full md:w-auto flex items-center justify-center gap-4 px-8 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xl font-semibold transition-colors"
              >
                {showStage ? "Masquer les activités" : "Voir les activités"}
                {showStage ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </button>
            </div>
            
            <AnimatePresence>
              {showStage && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-zinc-800 bg-zinc-950/50"
                >
                  <div className="p-10 md:p-12 space-y-12">
                    {stageProjects.map((p) => (
                      <div key={p.id} className="border-b border-zinc-800 pb-12 last:border-0 last:pb-0">
                        <h4 className="text-3xl font-bold text-emerald-400 mb-4">{p.title}</h4>
                        <p className="text-2xl text-zinc-400 leading-relaxed mb-6">{p.objectives}</p>
                        <div className="flex flex-wrap gap-3">
                          {p.skills?.map(skillId => {
                            let skillLabel = skillId;
                            for (const block of SKILL_BLOCKS) {
                              const found = block.skills.find(s => s.id === skillId);
                              if (found) { skillLabel = found.label; break; }
                            }
                            return (
                              <span key={skillId} className="px-4 py-2 bg-zinc-950 text-zinc-300 rounded-xl text-lg border border-zinc-800 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-400" />
                                {skillLabel}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 3: Projets Réalisés en Milieu Scolaire */}
      <section id="projets-scolaires" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
        <header className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
            <span className="text-indigo-500 opacity-50">03.</span>
            Projets Réalisés en Milieu Scolaire
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

      {/* L'INTERFACE MODAL PRO */}
      <AnimatePresence>
        {selectedProject && project && (
          <div className="fixed inset-0 z-[100] flex justify-center items-stretch p-4 md:p-8 bg-black/90 backdrop-blur-md">
            
            {/* Conteneur principal */}
            <div className="w-full max-w-[1800px] h-full flex flex-col xl:flex-row gap-6 relative z-10">
              
              {/* PANNEAU DE GAUCHE : Sommaire (Compatible steps ET analysis) */}
              {(project.steps || project.analysis) && (
                <motion.aside
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="hidden xl:flex w-[420px] shrink-0 bg-zinc-950 border border-zinc-800 rounded-[2rem] p-8 flex-col shadow-2xl overflow-y-auto no-scrollbar"
                  style={{ maxHeight: '100%' }}
                >
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-6 sticky top-0 bg-zinc-950 z-10">
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

                  {/* Liste des ancres dynamique */}
                  <nav className="flex flex-col gap-4">
                    {tocItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.id}`}
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

              {/* PANNEAU DE DROITE : Contenu Technique (Défilant Nativement) */}
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

                  {/* 4. Section Technique Universelle (AVEC MARGE DYNAMIQUE SÉPARÉE) */}
                  {(project.steps || project.analysis) && (
                    <section>
                      <h3 className="text-2xl font-bold text-indigo-400 uppercase tracking-wider mb-8 flex items-center gap-4">
                        <List className="w-8 h-8" /> 
                        {project.type === 'scolaire' ? "Analyse détaillée du projet" : "Documentation Technique"}
                      </h3>
                      <div className="bg-zinc-900/20 border border-zinc-800 p-8 md:p-12 rounded-[2rem] overflow-hidden">
                        <div 
                          className={`prose prose-invert max-w-none text-zinc-300 text-xl md:text-2xl leading-relaxed 
                          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                          
                          ${project.type === 'scolaire' ? '[&_h2]:scroll-mt-[340px] [&_h3]:scroll-mt-[340px]' 
                            : '[&_h2]:scroll-mt-[280px] [&_h3]:scroll-mt-[280px]'}
                          
                          [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-8 [&_h2]:mt-12
                          [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-indigo-300 [&_h3]:mb-4 [&_h3]:mt-8
                          [&_pre]:overflow-x-auto [&_pre]:max-w-full [&_pre]:bg-zinc-950 [&_pre]:p-6 [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-zinc-800 [&_pre]:my-8 [&_code]:text-indigo-300 [&_code]:break-all [&_code]:bg-transparent 
                          [&_img]:rounded-2xl [&_img]:border [&_img]:border-zinc-800 [&_img]:my-12 [&_img]:mx-auto`}
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