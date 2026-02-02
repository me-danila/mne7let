import { motion } from "motion/react";

export function FloatingElements() {
  const floatingEmojis = [
    { emoji: "🧀", top: "10%", left: "5%", duration: 8, delay: 0 },
    { emoji: "🍅", top: "20%", right: "10%", duration: 10, delay: 1 },
    { emoji: "🥖", top: "40%", left: "8%", duration: 12, delay: 2 },
    { emoji: "🥕", top: "60%", right: "5%", duration: 9, delay: 0.5 },
    { emoji: "🌿", top: "80%", left: "15%", duration: 11, delay: 1.5 },
    { emoji: "🍷", top: "30%", right: "15%", duration: 10, delay: 2.5 },
    { emoji: "🥘", top: "50%", left: "3%", duration: 13, delay: 1 },
    { emoji: "⭐", top: "70%", right: "20%", duration: 8, delay: 0.8 },
    { emoji: "🎈", top: "15%", left: "20%", duration: 9, delay: 1.2 },
    { emoji: "🎉", top: "85%", right: "8%", duration: 11, delay: 2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingEmojis.map((item, index) => {
        const style: React.CSSProperties = {
          position: 'absolute',
          ...(item.top && { top: item.top }),
          ...(item.left && { left: item.left }),
          ...(item.right && { right: item.right }),
        };

        return (
          <motion.div
            key={index}
            style={style}
            className="text-6xl opacity-10"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.emoji}
          </motion.div>
        );
      })}
    </div>
  );
}
