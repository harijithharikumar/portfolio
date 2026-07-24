import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on fine pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target is clickable
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('clickable'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  // Smooth lag for trailing ring
  useEffect(() => {
    if (!isVisible) return;
    let frameId: number;

    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      frameId = requestAnimationFrame(follow);
    };

    frameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(frameId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Glowing Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2.5 h-2.5 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full shadow-[0_0_10px_#38bdf8] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isClicking ? 0.6 : isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Trailing Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-cyan-400/50 dark:border-cyan-300/60 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-cyan-500/10 border-cyan-400 backdrop-blur-[1px] scale-110'
            : isClicking
            ? 'w-8 h-8 border-violet-400 scale-90'
            : 'w-8 h-8'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      />
    </>
  );
};
