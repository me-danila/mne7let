import { motion } from "motion/react";
import { MapPin, Clock, Users, Shirt } from "lucide-react";

export function EventDetails() {
  const details = [
    {
      icon: MapPin,
      title: "Место проведения",
      content: "LOFT FAMILY",
      subtitle: "б-р Архитекторов, 13",
      emoji: "🏢",
      color: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "Время",
      content: "14:00",
      subtitle: "21 февраля 2026",
      emoji: "⏰",
      color: "bg-orange-500"
    },
    {
      icon: Users,
      title: "Формат",
      content: "Кулинарная вечеринка",
      subtitle: "В стиле Рататуй",
      emoji: "👨‍🍳",
      color: "bg-rose-500"
    },
    {
      icon: Shirt,
      title: "Возьмите с собой",
      content: "Удобная одежда",
      subtitle: "Сменная обувь обязательна",
      emoji: "👟",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-['Comfortaa'] font-bold text-center mb-4 text-blue-900"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Детали праздника
        </motion.h2>

        <motion.div
          className="text-center font-['Caveat'] mb-12 text-gray-600"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Все самое важное о нашей вечеринке
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative bg-white rounded-3xl p-6 shadow-xl border-4 border-orange-200"
            >
              {/* Emoji decoration */}
              <motion.div
                className="absolute -top-6 -right-6 text-5xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {detail.emoji}
              </motion.div>

              {/* Icon */}
              <div className={`${detail.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                <detail.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-['Comfortaa'] font-semibold text-gray-500 mb-2" style={{ fontSize: '0.9rem' }}>
                {detail.title}
              </h3>
              <p className="font-['Comfortaa'] font-bold text-blue-900 mb-1" style={{ fontSize: '1.3rem' }}>
                {detail.content}
              </p>
              <p className="font-['Patrick Hand'] text-gray-600" style={{ fontSize: '1rem' }}>
                {detail.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}