/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Veille from "@/pages/Veille";
import { NavigationBubble } from "@/components/NavigationBubble";
import { CustomCursor } from "@/components/CustomCursor";

export default function App() {
  return (
    <main className="bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30">
      <CustomCursor />
      <Home />
      <Projects />
      <Skills />
      <Veille />
      <NavigationBubble />
    </main>
  );
}
