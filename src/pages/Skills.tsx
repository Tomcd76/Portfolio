import { SKILL_BLOCKS, MOCK_PROJECTS } from "@/lib/utils";
import { Check, Server, Headset, Globe, Briefcase, Users, GraduationCap, AlertCircle } from "lucide-react";

const ICONS = {
  "patrimoine": Server,
  "incidents": Headset,
  "presence": Globe,
  "projet": Briefcase,
  "service": Users,
  "dev_pro": GraduationCap,
};

export default function Skills() {
  // Calculate coverage
  const coveredSkills = new Set<string>();
  MOCK_PROJECTS.forEach(p => {
    p.skills?.forEach(s => coveredSkills.add(s));
  });

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
      <header className="mb-24 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center justify-center gap-6">
          <span className="text-indigo-500 opacity-50">05.</span>
          Synthèse des Compétences
        </h2>
        <p className="text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          Validation des 6 blocs de compétences du référentiel BTS SIO SISR à travers mes projets et stages.
        </p>
      </header>

      <div className="relative w-full mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
          {SKILL_BLOCKS.map((block) => {
            const Icon = ICONS[block.id as keyof typeof ICONS] || Check;
            
            const blockCoverage = block.skills.filter(s => coveredSkills.has(s.id)).length;
            const totalSkills = block.skills.length;
            const progress = Math.round((blockCoverage / totalSkills) * 100);
            const missingSkills = block.skills.filter(s => !coveredSkills.has(s.id));

            return (
              <div key={block.id} className="flex flex-col items-center text-center group bg-zinc-900/30 p-10 rounded-3xl border border-zinc-800 hover:bg-zinc-900 hover:border-indigo-500/50 transition-all relative">
                
                {/* Tooltip for missing skills */}
                {missingSkills.length > 0 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-72 bg-zinc-950 border border-zinc-800 rounded-xl p-5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                    <div className="flex items-center gap-2 mb-3 text-amber-500">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm font-semibold">Compétences à valider :</span>
                    </div>
                    <ul className="text-left text-xs text-zinc-400 space-y-2.5">
                      {missingSkills.map(ms => (
                        <li key={ms.id} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1 shrink-0" />
                          <span className="leading-relaxed">{ms.label}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Arrow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-b border-r border-zinc-800 rotate-45" />
                  </div>
                )}

                <div className="w-24 h-24 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center mb-8 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all relative z-10">
                  <Icon className="w-10 h-10 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                  {progress === 100 && (
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-emerald-500 rounded-full border-4 border-zinc-950 flex items-center justify-center shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-zinc-200 mb-6 leading-snug px-4">
                  {block.title}
                </h3>
                <div className="mt-auto pt-4 w-full">
                  <div className="w-full bg-zinc-950 rounded-full h-4 mb-4 border border-zinc-800 overflow-hidden">
                    <div 
                      className="bg-indigo-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-lg text-zinc-400 font-mono bg-zinc-900/50 px-4 py-2 rounded-xl border border-zinc-800 inline-block">
                    {blockCoverage}/{totalSkills} compétences validées
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
