import { ArrowRight, Download, Briefcase, GraduationCap, Layers, FileText } from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string, label: string) => {
    window.dispatchEvent(new CustomEvent('trigger-loading', { detail: { id, label } }));
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center p-8 md:p-20 max-w-[1600px] mx-auto">
      <header className="mb-16">
        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm md:text-base font-mono font-medium">
          SESSION 2026
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
          Présentation <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Générale</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tom Marchand-Chatelet</h2>
            <p className="text-2xl md:text-3xl text-zinc-400 leading-relaxed mb-10">
              Administrateur Systèmes & Réseaux en devenir.<br/>
              Étudiant en BTS SIO option SISR.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="/CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-100 text-zinc-900 rounded-full text-lg font-medium hover:bg-white transition-colors"
              >
                <Download className="w-5 h-5" />
                Consulter mon CV
              </a>
              <a 
                href="/Tableau-de-Synthèse.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded-full text-lg font-medium hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <FileText className="w-5 h-5" />
                Tableau de Synthèse
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Section Ma Formation */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10 hover:bg-zinc-900/50 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-500/10 rounded-xl">
              <GraduationCap className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-3xl font-semibold text-white">Ma Formation</h2>
          </div>
          
          <div className="space-y-6 mt-4">
            <div className="relative pl-5 border-l-2 border-indigo-500/50">
              <h3 className="text-white font-medium text-xl mb-1">Lycée Lamartine (Mâcon)</h3>
              <p className="text-zinc-400 text-base">2ème année • Formation initiale</p>
            </div>
            <div className="relative pl-5 border-l-2 border-zinc-700">
              <h3 className="text-white font-medium text-xl mb-1">Lycée Saint-Joseph (Bourg-en-Bresse)</h3>
              <p className="text-zinc-400 text-base">1ère année • En alternance</p>
            </div>
          </div>
        </div>

        {/* Section Contextes Professionnels */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10 hover:bg-zinc-900/50 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
              <Briefcase className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-semibold text-white">Contextes Professionnels</h2>
          </div>
          
          <div className="space-y-6 mt-4">
            <div className="relative pl-5 border-l-2 border-emerald-500/50">
              <h3 className="text-white font-medium text-xl mb-1">Hisis Informatique</h3>
              <p className="text-zinc-400 text-base">Stage Année 2 • ESN Expert Santé</p>
            </div>
            <div className="relative pl-5 border-l-2 border-zinc-700">
              <h3 className="text-white font-medium text-xl mb-1">Gendarmerie Nationale (SOLC)</h3>
              <p className="text-zinc-400 text-base">Alternance Année 1 • Lutte contre les cybermenaces (Bourg-en-Bresse, Ain)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="flex items-center gap-8">
          <h3 className="text-3xl font-semibold text-white flex items-center gap-4">
            <Layers className="w-8 h-8 text-zinc-500" />
            Organisation du Portfolio
          </h3>
          <div className="h-px bg-zinc-800 flex-1" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <button onClick={() => scrollToSection('activites-formation', 'Activités Formation')} className="group text-left p-8 bg-zinc-900/20 border border-zinc-800 rounded-3xl hover:bg-zinc-900 hover:border-indigo-500/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="text-indigo-400 font-mono text-lg">01</span>
              <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
            </div>
            <h4 className="font-medium text-zinc-200 mb-2 text-2xl leading-tight">Activités Formation</h4>
          </button>

          <button onClick={() => scrollToSection('activites-pro', 'Cadre Professionnel')} className="group text-left p-8 bg-zinc-900/20 border border-zinc-800 rounded-3xl hover:bg-zinc-900 hover:border-indigo-500/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="text-indigo-400 font-mono text-lg">02</span>
              <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
            </div>
            <h4 className="font-medium text-zinc-200 mb-2 text-2xl leading-tight">Cadre Professionnel</h4>
          </button>

          <button onClick={() => scrollToSection('projets-scolaires', 'Projets Scolaires')} className="group text-left p-8 bg-zinc-900/20 border border-zinc-800 rounded-3xl hover:bg-zinc-900 hover:border-indigo-500/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="text-indigo-400 font-mono text-lg">03</span>
              <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
            </div>
            <h4 className="font-medium text-zinc-200 mb-2 text-2xl leading-tight">Projets Scolaires</h4>
          </button>

          <button onClick={() => scrollToSection('skills', 'Compétences')} className="group text-left p-8 bg-zinc-900/20 border border-zinc-800 rounded-3xl hover:bg-zinc-900 hover:border-indigo-500/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="text-indigo-400 font-mono text-lg">04</span>
              <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
            </div>
            <h4 className="font-medium text-zinc-200 mb-2 text-2xl leading-tight">Compétences</h4>
          </button>

          <button onClick={() => scrollToSection('veille', 'Dév. Pro & Veille')} className="group text-left p-8 bg-zinc-900/20 border border-zinc-800 rounded-3xl hover:bg-zinc-900 hover:border-indigo-500/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="text-indigo-400 font-mono text-lg">05</span>
              <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
            </div>
            <h4 className="font-medium text-zinc-200 mb-2 text-2xl leading-tight">Dév. Pro & Veille</h4>
          </button>
        </div>
      </div>
    </section>
  );
}