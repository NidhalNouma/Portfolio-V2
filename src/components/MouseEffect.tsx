import { useEffect, useState, useCallback } from "react";

export function MouseEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      className="pointer-events-none fixed z-50"
      style={{
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-[60vw] aspect-square rounded-full bg-text-primary/5 blur-3xl" />
    </div>
  );
}
