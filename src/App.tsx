import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Veille from "@/pages/Veille";
import { NavigationBubble } from "@/components/NavigationBubble";
import { CustomCursor } from "@/components/CustomCursor";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handlePageChange = (e: any) => {
      setCurrentPage(e.detail.id);
      window.scrollTo(0, 0); // Remonte en haut lors du changement de page
    };
    window.addEventListener('change-page', handlePageChange);
    return () => window.removeEventListener('change-page', handlePageChange);
  }, []);

  return (
    <main className="bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30 min-h-screen relative overflow-hidden">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {currentPage === "home" && <motion.div key="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Home /></motion.div>}
        
        {(currentPage === "activites-formation" || currentPage === "activites-pro" || currentPage === "projets-scolaires") && (
          <motion.div key="projects" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Projects currentSection={currentPage} /></motion.div>
        )}
        
        {currentPage === "skills" && <motion.div key="skills" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Skills /></motion.div>}
        
        {currentPage === "veille" && <motion.div key="veille" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Veille /></motion.div>}
      </AnimatePresence>
      <NavigationBubble />
    </main>
  );
}