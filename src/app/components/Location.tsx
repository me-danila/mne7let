import { motion } from "motion/react";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";

export function Location() {
  const contactInfo = {
    venue: "LOFT FAMILY",
    address: "Бульвар Архитекторов, 13",
    phone: "8 913 680 28 84",
    contact: "Анна",
    date: "21 февраля 2026",
    time: "14:00"
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-9xl">🗺️</div>
        <div className="absolute bottom-10 left-10 text-9xl">📍</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
            <MapPin className="w-6 h-6" />
            <span className="font-['Comfortaa'] font-semibold">Как добраться</span>
          </div>

          <h2 className="font-['Comfortaa'] font-bold text-blue-900 mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Ждем вас здесь!
          </h2>
          <p className="font-['Caveat'] text-gray-600" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>
            Все контакты и информация
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Venue card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-6 shadow-xl border-4 border-blue-200"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-['Comfortaa'] font-bold text-blue-900 mb-1" style={{ fontSize: '1.4rem' }}>
                    {contactInfo.venue}
                  </h3>
                  <p className="font-['Patrick Hand'] text-gray-600" style={{ fontSize: '1.1rem' }}>
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Date & Time card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-6 shadow-xl border-4 border-orange-200"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-4xl mb-2">📅</div>
                  <h4 className="font-['Comfortaa'] font-semibold text-gray-500 mb-1" style={{ fontSize: '0.9rem' }}>
                    Дата
                  </h4>
                  <p className="font-['Comfortaa'] font-bold text-blue-900" style={{ fontSize: '1.2rem' }}>
                    {contactInfo.date}
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">⏰</div>
                  <h4 className="font-['Comfortaa'] font-semibold text-gray-500 mb-1" style={{ fontSize: '0.9rem' }}>
                    Время
                  </h4>
                  <p className="font-['Comfortaa'] font-bold text-blue-900" style={{ fontSize: '1.2rem' }}>
                    {contactInfo.time}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-6 shadow-xl border-4 border-green-200"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-500 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-['Comfortaa'] font-bold text-blue-900 mb-1" style={{ fontSize: '1.4rem' }}>
                    Контакт для вопросов
                  </h3>
                  <p className="font-['Patrick Hand'] text-gray-600 mb-1" style={{ fontSize: '1.1rem' }}>
                    {contactInfo.contact}
                  </p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="font-['Comfortaa'] font-bold text-green-600 hover:text-green-700 transition-colors"
                    style={{ fontSize: '1.2rem' }}
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 shadow-xl border-4 border-purple-200 relative overflow-hidden"
          >
            <div className="aspect-square lg:aspect-auto lg:h-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Decorative map elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-400 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 text-center p-6">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-8xl mb-4"
                >
                  📍
                </motion.div>
                <h3 className="font-['Comfortaa'] font-bold text-blue-900 mb-2" style={{ fontSize: '1.5rem' }}>
                  {contactInfo.venue}
                </h3>
                <p className="font-['Patrick Hand'] text-gray-700 mb-4" style={{ fontSize: '1.1rem' }}>
                  {contactInfo.address}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(`https://yandex.ru/maps/?text=${encodeURIComponent(contactInfo.address)}`, '_blank')}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-['Comfortaa'] font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                >
                  <Navigation className="w-5 h-5" />
                  Открыть в Яндекс Картах
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RSVP section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white rounded-3xl p-8 shadow-2xl border-4 border-white relative overflow-hidden"
        >
          <motion.div
            className="absolute -bottom-10 -right-10 text-9xl opacity-20"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            🎊
          </motion.div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="font-['Comfortaa'] font-bold mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Подтвердите участие!
            </h3>
            <p className="font-['Patrick Hand'] mb-6" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
              Пожалуйста, позвоните или напишите Анне по номеру {contactInfo.phone}, чтобы мы знали, что вы придете! Это поможет нам лучше подготовиться к празднику.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-['Comfortaa'] font-bold shadow-lg hover:shadow-xl transition-shadow"
                style={{ fontSize: '1.2rem' }}
              >
                <Phone className="w-6 h-6" />
                Позвонить
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://t.me/${contactInfo.phone.replace(/\s/g, '').replace(/^8/, '+7')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-400 text-white px-8 py-4 rounded-full font-['Comfortaa'] font-bold shadow-lg hover:shadow-xl hover:bg-blue-500 transition-all"
                style={{ fontSize: '1.2rem' }}
              >
                <Mail className="w-6 h-6" />
                Telegram
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-['Caveat'] text-blue-900 mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            До встречи на празднике! 🎉
          </p>
          <div className="flex items-center justify-center gap-3 text-4xl">
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              🐭
            </motion.span>
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              ❤️
            </motion.span>
            <motion.span animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              👨‍🍳
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}