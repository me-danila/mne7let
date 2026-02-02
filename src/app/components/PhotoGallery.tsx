import { motion } from "motion/react";
import { Camera, Heart } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function PhotoGallery() {
  // Placeholder photos - these should be replaced with actual photos of the child
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1762912913371-ccc0a5fca0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkJTIwYmlydGhkYXklMjBwYXJ0eXxlbnwxfHx8fDE3NzAwMDY4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Наш именинник!"
    },
    {
      url: "https://images.unsplash.com/photo-1699206332834-8fa9f45a906c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwaGF0JTIwY29va2luZyUyMGNoaWxkcmVufGVufDF8fHx8MTc3MDAwNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Готовим вместе"
    },
    {
      url: "https://images.unsplash.com/photo-1659670191953-fc44631224ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJpcnRoZGF5JTIwYmFsbG9vbnN8ZW58MXx8fHwxNzcwMDA2ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Праздник начинается!"
    },
    {
      url: "https://images.unsplash.com/photo-1646388022924-03b371285310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBjdWlzaW5lJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzAwMDY4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Вкусняшки"
    },
    {
      url: "https://images.unsplash.com/photo-1668417862065-caef71448b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzAwMDY4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Волшебная атмосфера"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-rose-100 via-orange-100 to-amber-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">📸</div>
        <div className="absolute bottom-20 right-20 text-8xl">❤️</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-rose-500 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
            <Camera className="w-6 h-6" />
            <span className="font-['Comfortaa'] font-semibold">Фотогалерея</span>
          </div>

          <h2 className="font-['Comfortaa'] font-bold text-blue-900 mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Где будет проходить праздник
          </h2>
          <p className="font-['Caveat'] text-gray-600" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>
            И какие активности ждут детей
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 3, zIndex: 10 }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="aspect-square">
                  <ImageWithFallback
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3"
                  initial={false}
                >
                  <p className="font-['Patrick Hand'] text-white text-center" style={{ fontSize: '0.9rem' }}>
                    {photo.caption}
                  </p>
                </motion.div>

                {/* Heart icon on hover */}
                <motion.div
                  className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                </motion.div>
              </div>

              {/* Decorative tape effect */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-yellow-200 opacity-60 rotate-2 shadow-md" />
            </motion.div>
          ))}
        </div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white rounded-3xl px-8 py-6 shadow-xl border-4 border-orange-300">
            <p className="font-['Caveat'] text-blue-900" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
              <span className="text-4xl mr-2">🎂</span>
              Скучно точно не будет! Ни детям, ни взрослым :)
              <span className="text-4xl ml-2">🎉</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}