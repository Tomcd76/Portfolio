import { MOCK_PROJECTS, SKILL_BLOCKS } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, FileText, Link as LinkIcon, ExternalLink, ChevronDown, ChevronUp, Briefcase, Building, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showAlternance, setShowAlternance] = useState(false);
  const [showStage, setShowStage] = useState(false);
  const [formationPage, setFormationPage] = useState(0);

  const project = MOCK_PROJECTS.find((p) => p.id === selectedProject);

  const formationProjects = MOCK_PROJECTS.filter(p => p.type === 'formation');
  const ITEMS_PER_PAGE = 6;
  const totalFormationPages = Math.ceil(formationProjects.length / ITEMS_PER_PAGE);
  const activitesFormation = formationProjects.slice(formationPage * ITEMS_PER_PAGE, (formationPage + 1) * ITEMS_PER_PAGE);
  
  const projetsScolaires = MOCK_PROJECTS.filter(p => p.type === 'scolaire');
  
  const alternanceProjects = MOCK_PROJECTS.filter(p => p.type === 'alternance');
  const stageProjects = MOCK_PROJECTS.filter(p => p.type === 'stage');

  return (
    <>
      {/* SECTION 2: Activités Réalisées en Formation */}
      <section id="activites-formation" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
        <header className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
            <span className="text-indigo-500 opacity-50">02.</span>
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
                  <p className="text-xl text-zinc-400 mb-8 leading-relaxed flex-1">
                    {p.objectives}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3 w-full">
                    {p.tools.slice(0, 4).map((tool) => (
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

      {/* SECTION 3: Activités en Milieu Professionnel */}
      <section id="activites-pro" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
        <header className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
            <span className="text-indigo-500 opacity-50">03.</span>
            Activités en Milieu Professionnel
          </h2>
          <p className="text-2xl text-zinc-400 max-w-4xl leading-relaxed">
            Missions et responsabilités exercées dans un cadre professionnel (Alternance Gendarmerie Nationale & Stage Hisis Informatique).
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
                      <div 
                        key={p.id}
                        className="border-b border-zinc-800 pb-12 last:border-0 last:pb-0"
                      >
                        <h4 className="text-3xl font-bold text-blue-400 mb-4">{p.title}</h4>
                        <p className="text-2xl text-zinc-400 leading-relaxed mb-6">{p.objectives}</p>
                        <div className="flex flex-wrap gap-3">
                          {p.skills.map(skillId => {
                            let skillLabel = skillId;
                            for (const block of SKILL_BLOCKS) {
                              const found = block.skills.find(s => s.id === skillId);
                              if (found) {
                                skillLabel = found.label;
                                break;
                              }
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
                      <div 
                        key={p.id}
                        className="border-b border-zinc-800 pb-12 last:border-0 last:pb-0"
                      >
                        <h4 className="text-3xl font-bold text-emerald-400 mb-4">{p.title}</h4>
                        <p className="text-2xl text-zinc-400 leading-relaxed mb-6">{p.objectives}</p>
                        <div className="flex flex-wrap gap-3">
                          {p.skills.map(skillId => {
                            let skillLabel = skillId;
                            for (const block of SKILL_BLOCKS) {
                              const found = block.skills.find(s => s.id === skillId);
                              if (found) {
                                skillLabel = found.label;
                                break;
                              }
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

      {/* SECTION 4: Projets Réalisés en Milieu Scolaire */}
      <section id="projets-scolaires" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
        <header className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center gap-6">
            <span className="text-indigo-500 opacity-50">04.</span>
            Projets Réalisés en Milieu Scolaire
          </h2>
          <p className="text-2xl text-zinc-400 max-w-4xl leading-relaxed">
            Projets d'envergure et ateliers de professionnalisation menés durant la formation.
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
                <p className="text-xl text-zinc-400 mb-8 leading-relaxed flex-1">
                  {p.objectives}
                </p>
                <div className="mt-auto flex flex-wrap gap-3 w-full">
                  {p.tools.slice(0, 4).map((tool) => (
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

      {/* MODAL DETAIL */}
      <AnimatePresence>
        {selectedProject && project && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedProject}`}
              className="bg-zinc-950 border border-zinc-800 w-full max-w-[1400px] max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative z-10 flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 p-12 flex justify-between items-start z-20">
                <div>
                  <div className="flex items-center gap-6 mb-6">
                    <span
                      className={`px-5 py-2.5 rounded-full text-base uppercase font-bold tracking-wider ${
                        project.type === "stage"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : project.type === "alternance"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                      }`}
                    >
                      {project.type}
                    </span>
                    <h2 className="text-5xl font-bold text-white">{project.title}</h2>
                  </div>
                  <p className="text-zinc-400 text-3xl">{project.context}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-5 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors shrink-0 ml-8"
                >
                  <X className="w-10 h-10 text-zinc-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-12 space-y-20">
                
                {/* 1. Présentation courte */}
                <section>
                  <h3 className="text-2xl font-bold text-indigo-400 uppercase tracking-wider mb-8 flex items-center gap-4">
                    <FileText className="w-8 h-8" /> Présentation de l'activité
                  </h3>
                  <div className="text-zinc-300 leading-relaxed text-3xl whitespace-pre-line">
                    {project.description}
                  </div>
                </section>

                {/* 2. Outils utilisés */}
                {project.tools && project.tools.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-bold text-indigo-400 uppercase tracking-wider mb-8 flex items-center gap-4">
                      <Briefcase className="w-8 h-8" /> Outils utilisés
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {project.tools.map((tool, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-2xl">
                          <div className="w-3 h-3 rounded-full bg-indigo-500" />
                          <span className="text-2xl text-zinc-200 font-medium">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 3. Difficultés rencontrées et solutions apportées */}
                {project.difficulties && (
                  <section>
                    <h3 className="text-2xl font-bold text-indigo-400 uppercase tracking-wider mb-8 flex items-center gap-4">
                      <CheckCircle className="w-8 h-8" /> Difficultés rencontrées et solutions apportées
                    </h3>
                    <div className="bg-zinc-900/50 border border-zinc-800 p-10 rounded-3xl">
                      <p className="text-zinc-300 leading-relaxed text-3xl whitespace-pre-line">
                        {project.difficulties}
                      </p>
                    </div>
                  </section>
                )}

                {/* 4. Preuves (Documents & Liens uniquement) */}
                {project.evidence.filter(ev => ev.type !== 'image').length > 0 && (
                  <section>
                    <h3 className="text-2xl font-bold text-indigo-400 uppercase tracking-wider mb-8 flex items-center gap-4">
                      <LinkIcon className="w-8 h-8" /> Éléments de Preuve & Documentation Technique
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      {project.evidence.filter(ev => ev.type !== 'image').map((ev, i) => (
                        <a 
                          key={i} 
                          href={ev.url || "#"} 
                          target={ev.url && ev.url !== "#" ? "_blank" : "_self"}
                          rel="noreferrer"
                          className="flex items-center gap-8 p-10 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:bg-zinc-900 hover:border-indigo-500/50 transition-all cursor-pointer group"
                        >
                          <div className="w-20 h-20 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:border-indigo-500/50 transition-colors shrink-0">
                            {ev.type === 'link' ? <LinkIcon className="w-10 h-10 text-indigo-400" /> : <FileText className="w-10 h-10 text-zinc-400 group-hover:text-indigo-400" />}
                          </div>
                          <span className="text-3xl text-zinc-200 font-medium group-hover:text-white transition-colors flex-1">{ev.label}</span>
                          {ev.url && ev.url !== "#" && <ExternalLink className="w-8 h-8 text-zinc-600 group-hover:text-indigo-400 shrink-0" />}
                        </a>
                      ))}
                    </div>
                  </section>
                )}

                {/* 5. Compétences Mobilisées */}
                {project.skills && project.skills.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-bold text-indigo-400 uppercase tracking-wider mb-8 flex items-center gap-4">
                      <CheckCircle className="w-8 h-8" /> Compétences du Référentiel
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {SKILL_BLOCKS.map(block => {
                        const activeSkills = block.skills.filter(s => project.skills!.includes(s.id));
                        if (activeSkills.length === 0) return null;
                        return (
                          <div key={block.id} className="border border-zinc-800 rounded-3xl p-10 bg-zinc-900/20">
                            <h4 className="text-lg font-bold text-zinc-500 uppercase mb-6">{block.title}</h4>
                            <ul className="space-y-6">
                              {activeSkills.map(skill => (
                                <li key={skill.id} className="flex items-start gap-5 text-2xl text-zinc-300">
                                  <span className="w-4 h-4 rounded-full bg-indigo-500 mt-3 shrink-0" />
                                  {skill.label}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
