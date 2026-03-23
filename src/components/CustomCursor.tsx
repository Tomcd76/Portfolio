import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Si on est dans la bulle de navigation, on désactive l'effet hover du curseur
      if (target.closest('#navigation-bubble')) {
        setIsHovering(false);
        return;
      }

      // Détecte si on survole un élément cliquable
      const isClickable = target.closest('a') || target.closest('button') || target.closest('input') || target.closest('textarea');
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Ne pas afficher sur les petits écrans (téléphones)
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;
  if (!isVisible) return null;

  return (
    <>
      {/* Point central (Style pointeur laser PowerPoint) */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-indigo-400 rounded-full pointer-events-none z-[10000] shadow-[0_0_10px_rgba(129,140,248,0.8)] transition-opacity duration-200"
        style={{
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
          opacity: isHovering ? 0 : 1
        }}
      />
      
      {/* Forme extérieure qui zoome et change de forme */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        <div
          className={`cursor-shape transition-all duration-300 ease-out border-2 ${
            isHovering
              ? 'w-8 h-8 -ml-4 -mt-4 bg-indigo-500/20 border-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.4)]'
              : 'w-6 h-6 -ml-3 -mt-3 border-indigo-500/50'
          }`}
        />
      </div>
    </>
  );
}
