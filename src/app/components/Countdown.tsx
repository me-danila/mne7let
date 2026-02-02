import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function Countdown() {
  const eventDate = new Date("2026-02-21T14:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isPast) {
    return (
      <section className="py-12 px-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="font-['Comfortaa'] font-bold text-blue-900 mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              🎉 Праздник начался! 🎉
            </h2>
          </motion.div>
        </div>
      </section>
    );
  }

  const timeBlocks = [
    { value: timeLeft.days, label: "Дней", emoji: "📅", color: "from-blue-500 to-blue-600" },
    { value: timeLeft.hours, label: "Часов", emoji: "⏰", color: "from-purple-500 to-purple-600" },
    { value: timeLeft.minutes, label: "Минут", emoji: "⏱️", color: "from-pink-500 to-pink-600" },
    { value: timeLeft.seconds, label: "Секунд", emoji: "⚡", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 bg-white text-purple-600 px-6 py-3 rounded-full mb-4 shadow-lg">
            <Clock className="w-6 h-6" />
            <span className="font-['Comfortaa'] font-semibold">До праздника осталось</span>
          </div>

          <h2 className="font-['Comfortaa'] font-bold text-white drop-shadow-lg" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Скоро встретимся!
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className={`bg-gradient-to-br ${block.color} rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-white relative overflow-hidden`}
              >
                {/* Emoji decoration */}
                <motion.div
                  className="absolute -top-3 -right-3 text-4xl md:text-5xl opacity-50"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {block.emoji}
                </motion.div>

                {/* Value */}
                <motion.div
                  key={block.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="font-['Comfortaa'] font-bold text-white mb-2 drop-shadow-lg relative z-10"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
                >
                  {String(block.value).padStart(2, '0')}
                </motion.div>

                {/* Label */}
                <div className="font-['Comfortaa'] font-semibold text-white/90 relative z-10" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>
                  {block.label}
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="font-['Caveat'] text-white drop-shadow-lg" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
            Не забудьте подтвердить участие! 🎈
          </p>
        </motion.div>
      </div>
    </section>
  );
}