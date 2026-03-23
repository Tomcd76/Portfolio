import { Check, Server, Headset, Globe, Briefcase, Users, GraduationCap, AlertCircle } from "lucide-react";

const ICONS = {
  "patrimoine": Server,
  "incidents": Headset,
  "presence": Globe,
  "projet": Briefcase,
  "service": Users,
  "dev_pro": GraduationCap,
};

// Intégration en dur de l'analyse exacte de tes réalisations professionnelles
const SKILLS_ANALYSIS = [
  {
    id: "patrimoine",
    title: "Gérer le patrimoine informatique",
    total: 6,
    covered: 6,
    missing: [],
  },
  {
    id: "incidents",
    title: "Répondre aux incidents et aux demandes",
    total: 3,
    covered: 3,
    missing: [],
  },
  {
    id: "projet",
    title: "Travailler en mode projet",
    total: 3,
    covered: 3,
    missing: [],
  },
  {
    id: "service",
    title: "Mettre à disposition un service",
    total: 3,
    covered: 3,
    missing: [],
  },
  {
    id: "dev_pro",
    title: "Organiser son développement professionnel",
    total: 4,
    covered: 4,
    missing: [],
  },
  {
    id: "presence",
    title: "Développer la présence en ligne",
    total: 3,
    covered: 1,
    missing: [
      "Participer à la valorisation de l'image de l'organisation sur les médias numériques",
      "Référencer les services en ligne de l'organisation et mesurer leur visibilité"
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto border-t border-zinc-900">
      <header className="mb-24 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center justify-center gap-6">
          <span className="text-indigo-500 opacity-50">05.</span>
          Synthèse des Compétences
        </h2>
        <p className="text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          Validation des 6 blocs de compétences du référentiel BTS SIO SISR à travers mes activités, mes stages et mes projets.
        </p>
      </header>

      <div className="relative w-full mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
          {SKILLS_ANALYSIS.map((block) => {
            const Icon = ICONS[block.id as keyof typeof ICONS] || Check;
            const progress = Math.round((block.covered / block.total) * 100);

            return (
              <div key={block.id} className="flex flex-col items-center text-center group bg-zinc-900/30 p-10 rounded-3xl border border-zinc-800 hover:bg-zinc-900 hover:border-indigo-500/50 transition-all relative">
                
                {/* Tooltip for missing skills */}
                {block.missing.length > 0 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-80 bg-zinc-950 border border-zinc-800 rounded-xl p-5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                    <div className="flex items-center gap-2 mb-3 text-amber-500">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm font-semibold">Compétences à valider :</span>
                    </div>
                    <ul className="text-left text-xs text-zinc-400 space-y-2.5">
                      {block.missing.map((ms, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1 shrink-0" />
                          <span className="leading-relaxed">{ms}</span>
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
                    {block.covered}/{block.total} compétences validées
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