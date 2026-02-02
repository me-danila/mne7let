import { motion, useScroll, useTransform } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";

export function StickyHeader() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-20, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-4 border-orange-300"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎂</span>
            <span className="font-['Comfortaa'] font-bold text-blue-900" style={{ fontSize: '1rem' }}>
              День рождения Артема
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-full">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="font-['Comfortaa'] font-semibold text-blue-900">21.02.2026</span>
            </div>
            <div className="flex items-center gap-2 bg-orange-100 px-3 py-2 rounded-full">
              <Clock className="w-4 h-4 text-orange-600" />
              <span className="font-['Comfortaa'] font-semibold text-orange-900">14:00</span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="font-['Comfortaa'] font-semibold text-green-900">LOFT FAMILY</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}