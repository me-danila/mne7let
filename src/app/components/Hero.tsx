import { motion } from "motion/react";
import { ChefHat, Sparkles } from "lucide-react";
import invitationImage from "../../assets/2502d6fae2cd9b8c844fbc5091eb9ddb26f986fe.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-10 text-9xl">🧀</div>
        <div className="absolute top-40 right-20 text-8xl">🍅</div>
        <div className="absolute bottom-40 left-20 text-7xl">🥖</div>
        <div className="absolute bottom-20 right-40 text-9xl">🥕</div>
      </motion.div>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChefHat className="w-6 h-6" />
            <span className="font-['Comfortaa'] font-semibold">Приглашение</span>
          </motion.div>

          <motion.h1
            className="font-['Comfortaa'] font-bold mb-4"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '1.1',
              color: '#1e3a8a'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ВКУСНАЯ
            <br />
            <span className="text-orange-500">ВЕЧЕРИНКА</span>
          </motion.h1>

          <motion.div
            className="font-['Caveat'] mb-8"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#4b5563' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            В честь дня рождения Артема
          </motion.div>

          <motion.div
            className="flex flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl px-8 py-4 shadow-xl border-4 border-orange-300">
              <div className="font-['Comfortaa'] font-bold text-blue-900" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
                21 февраля
              </div>
            </div>
            <div className="bg-white rounded-3xl px-8 py-4 shadow-xl border-4 border-orange-300">
              <div className="font-['Comfortaa'] font-bold text-blue-900" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
                14:00
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:justify-start gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Sparkles className="w-8 h-8 text-yellow-500" />
            <span className="font-['Comfortaa'] text-blue-900 font-bold" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
              Мне исполняется 7 лет!
            </span>
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <img
              src={invitationImage}
              alt="Приглашение Рататуй"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Floating emoji decorations around image */}
          <motion.div
            className="absolute -top-8 -right-8 text-6xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            🎂
          </motion.div>
          <motion.div
            className="absolute -bottom-8 -left-8 text-6xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🎈
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 border-4 border-blue-900 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-2 h-2 bg-blue-900 rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}