import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function ConfettiSystem() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; emoji: string }>>([]);

  const emojis = ["🎉", "🎊", "🎈", "🎂", "⭐", "✨", "🧀", "🍅", "🥖", "🥕"];
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#ffa07a", "#98d8c8", "#f7dc6f", "#bb8fce", "#85c1e2"];

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i + Math.random(), // Ensure unique IDs even for rapid clicks
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
      }));

      setParticles(prev => [...prev, ...newParticles]);

      // Cleanup particles after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
      }, 2000);
    };

    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute pointer-events-none select-none"
            style={{
              left: particle.x,
              top: particle.y,
              fontSize: '2rem',
              color: particle.color, // Using color for text usually works for emojis too in some contexts, but primarily for style consistency if we switched to shapes
            }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0, 1, 0.5],
              x: (Math.random() - 0.5) * 300,
              y: Math.random() * -400 + 200, // Gravity effect
              rotate: Math.random() * 720 - 360
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            {particle.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
