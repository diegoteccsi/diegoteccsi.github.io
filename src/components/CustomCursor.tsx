import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'ver' | 'arrow'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect hovered target for interactive cues
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr === 'ver') {
        setCursorType('ver');
      } else if (cursorAttr === 'arrow') {
        setCursorType('arrow');
      } else if (target.closest('button, a, input, [role="button"]')) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out select-none"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
      }}
      aria-hidden="true"
    >
      {cursorType === 'ver' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold tracking-widest uppercase shadow-md transition-all duration-200">
          VER
        </div>
      )}

      {cursorType === 'arrow' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm font-semibold transition-all duration-200">
          →
        </div>
      )}

      {cursorType === 'pointer' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-2 border-[#2563EB] bg-[#2563EB]/10 transition-all duration-200" />
      )}

      {cursorType === 'default' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#2563EB] transition-all duration-150" />
      )}
    </div>
  );
};
