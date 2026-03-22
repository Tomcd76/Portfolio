import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, User, FolderKanban, GraduationCap, Radio, Briefcase } from "lucide-react";

export function NavigationBubble() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string, label: string) => {
    setIsOpen(false);

    // Scroll immédiat et fluide
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleTriggerLoading = (e: CustomEvent<{ id: string; label: string }>) => {
      scrollToSection(e.detail.id, e.detail.label);
    };
    window.addEventListener('trigger-loading' as any, handleTriggerLoading);
    return () => window.removeEventListener('trigger-loading' as any, handleTriggerLoading);
  }, []);

  const SECTIONS = [
    { id: "home", label: "Présentation Générale", icon: User },
    { id: "activites-formation", label: "Activités Formation", icon: FolderKanban },
    { id: "activites-pro", label: "Cadre Professionnel", icon: Briefcase },
    { id: "projets-scolaires", label: "Projets Scolaires", icon: FolderKanban },
    { id: "skills", label: "Synthèse Compétences", icon: GraduationCap },
    { id: "veille", label: "Dév. Pro & Veille", icon: Radio },
  ];

  return (
    <>
      <div 
        id="navigation-bubble"
      className="fixed bottom-0 right-0 z-50 p-8 flex items-end justify-end select-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-8 right-8 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 rounded-3xl p-6 shadow-2xl min-w-[320px]"
          >
            <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Navigation</span>
            </div>
            <div className="space-y-2">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id, section.label)}
                  className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-lg font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all group text-left select-none"
                >
                  <section.icon className="w-6 h-6 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Bubble */}
      <motion.div
        animate={{ 
          scale: isOpen ? 0 : 1,
          opacity: isOpen ? 0 : 0.5
        }}
        className="w-12 h-12 bg-zinc-800/50 backdrop-blur-sm rounded-full border border-zinc-700 flex items-center justify-center cursor-pointer hover:bg-indigo-500 hover:border-indigo-400 hover:text-white transition-all shadow-lg select-none"
      >
        <Menu className="w-5 h-5" />
      </motion.div>
    </div>
    </>
  );
}
