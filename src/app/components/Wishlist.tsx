import {motion} from "motion/react";
import {Gift, Star} from "lucide-react";
import {useState} from "react";

export function Wishlist() {
    const [selectedGift, setSelectedGift] = useState<number | null>(null);

    const wishlistItems = [
        {
            name: "Робототехника",
            price: "3 055 ₽",
            link: "https://www.wildberries.ru/catalog/316901583/detail.aspx?size=477909643&utm_source=followish",
        },
        {
            name: "Мемы",
            price: "450 ₽",
            link: "https://www.wildberries.ru/catalog/157912480/detail.aspx?size=262859190&utm_source=followish",
        },
        {
            name: "Инерционный автомобиль ллойда",
            price: "3 055 ₽",
            link: "https://www.wildberries.ru/catalog/318257196/detail.aspx?size=479874457&utm_source=followish",
        },
        {
            name: "Лего ниндзяго земной дракон Коула",
            price: "3 416 ₽",
            link: "https://www.wildberries.ru/catalog/265262173/detail.aspx?size=411664870&utm_source=followish",
        },
        {
            name: "Игра в города",
            price: "891 ₽",
            link: "https://www.wildberries.ru/catalog/242125138/detail.aspx?size=380256639&utm_source=followish",
        },
        {
            name: "Лего ниндзяго плету мастер драконов",
            price: "4 663 ₽",
            link: "https://www.wildberries.ru/catalog/471374876/detail.aspx?size=661245393&utm_source=followish",
        },
        {
            name: "Гуджитсу рок Джо",
            price: "1 981 ₽",
            link: "https://www.wildberries.ru/catalog/461134106/detail.aspx?size=649114281&utm_source=followish",
        },
        {
            name: "Пластилин",
            price: "235 ₽",
            link: "https://www.wildberries.ru/catalog/96946680/detail.aspx?size=153839345&utm_source=followish",
        },
        {
            name: "Гуджитсу пират",
            price: "2 147 ₽",
            link: "https://www.wildberries.ru/catalog/208663022/detail.aspx?size=334398991&utm_source=followish",
        },
        {
            name: "Скричер в, набор бласт матрикс",
            price: "4 513 ₽",
            link: "https://www.wildberries.ru/catalog/322161217/detail.aspx?size=484754744&utm_source=followish",
        },
        {
            name: "Гуджитсу йети",
            price: "2 738 ₽",
            link: "https://www.wildberries.ru/catalog/498114575/detail.aspx?size=692499812&utm_source=followish",
        },
        {
            name: "Скричер Смоки",
            price: "2 442 ₽",
            link: "https://www.wildberries.ru/catalog/5851466/detail.aspx?size=20910884&utm_source=followish",
        },
        {
            name: "Скричер ви бон",
            price: "2 442 ₽",
            link: "https://www.wildberries.ru/catalog/5851466/detail.aspx?size=20910884&utm_source=followish",
        },
        {
            name: "Гуашь",
            price: "506 ₽",
            link: "https://www.wildberries.ru/catalog/412117991/detail.aspx?size=591009741&utm_source=followish",
        },
        {
            name: "Скричер ексвейк мамонт",
            price: "1 424 ₽",
            link: "https://www.wildberries.ru/catalog/114006383/detail.aspx?size=205031554&utm_source=followish",
        },
        {
            name: "Скричер ревадактиль",
            price: "1 729 ₽",
            link: "https://www.wildberries.ru/catalog/5851456/detail.aspx?size=20910874&utm_source=followish",
        }
    ];

    return (
        <section
            className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 text-9xl">🎁</div>
                <div className="absolute bottom-20 right-20 text-9xl">⭐</div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="text-center mb-4"
                >
                    <div
                        className="inline-flex items-center gap-3 bg-purple-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                        <Gift className="w-6 h-6"/>
                        <span className="font-['Comfortaa'] font-semibold">Вишлист</span>
                    </div>

                    <h2 className="font-['Comfortaa'] font-bold text-blue-900 mb-3"
                        style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>
                        Артем мечтает о...
                    </h2>
                </motion.div>

                {/* Important note */}
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{delay: 0.4, duration: 0.6}}
                    className="bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 text-white rounded-3xl p-8 shadow-2xl border-4 border-white relative mb-8 overflow-hidden"
                >
                    <motion.div
                        className="absolute -top-10 -right-10 text-9xl opacity-20"
                        animate={{rotate: [0, 360]}}
                        transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                    >
                        💝
                    </motion.div>

                    <div className="relative z-10 text-center flex flex-col items-center">
                        <h3 className="font-['Comfortaa'] font-bold mb-4"
                            style={{fontSize: 'clamp(1.5rem, 3vw, 2.2rem)'}}>
                            Главное — это вы!
                        </h3>
                        <p className="font-['Patrick Hand'] max-w-2xl mx-auto"
                           style={{fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)'}}>
                            Вишлист — это просто идеи. Самый лучший подарок для Артема — это ваше присутствие на
                            празднике и радостные воспоминания! 🎈
                        </p>
                        <a href={"https://followish.io/app/wishlists/eqwzjxrsi0jivx"} target="_blank" className={"mt-6 w-xs px-4 py-3 bg-blue-400 text-center text-xs rounded-xl text-white"}>Ссылка на вишлист</a>
                    </div>
                </motion.div>


                {/*<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">*/}
                {/*    {wishlistItems.map((item, index) => (*/}
                {/*        <motion.div*/}
                {/*            key={index}*/}
                {/*            initial={{opacity: 0, y: 30}}*/}
                {/*            whileInView={{opacity: 1, y: 0}}*/}
                {/*            viewport={{once: true}}*/}
                {/*            transition={{delay: index * 0.05, duration: 0.5}}*/}
                {/*            whileHover={{scale: 1.05, rotate: selectedGift === index ? 0 : 2}}*/}
                {/*            onClick={() => setSelectedGift(selectedGift === index ? null : index)}*/}
                {/*            className={`relative bg-white rounded-3xl p-4 shadow-xl border-4 ${*/}
                {/*                selectedGift === index ? 'border-purple-200' : 'border-purple-200'*/}
                {/*            } cursor-pointer transition-all duration-300 flex flex-col`}*/}
                {/*        >*/}
                            {/* Selected indicator */}
                            {/*{selectedGift === index && (*/}
                            {/*    <motion.div*/}
                            {/*        initial={{scale: 0}}*/}
                            {/*        animate={{scale: 1}}*/}
                            {/*        className="absolute -top-3 -right-3 bg-yellow-400 rounded-full p-2 shadow-lg"*/}
                            {/*    >*/}
                            {/*        <Star className="w-6 h-6 text-white fill-white"/>*/}
                            {/*    </motion.div>*/}
                            {/*)}*/}

                            {/* Content */}
                            {/*<h3 className="font-['Comfortaa'] font-bold text-blue-900 mb-2 text-center"*/}
                            {/*    style={{fontSize: '1.2rem'}}>*/}
                            {/*    {item.name}*/}
                            {/*</h3>*/}
                            {/*<p className="font-['Patrick Hand'] text-gray-600 text-center mb-4"*/}
                            {/*   style={{fontSize: '0.95rem'}}>*/}
                            {/*    {item.price}*/}
                            {/*</p>*/}

                            {/* Button */}
                            {/*<a href={item.link} target="_blank" className={"mt-auto px-4 py-3 bg-blue-400 text-center text-xs rounded-xl text-white"}>Ссылка на магазин</a>*/}
                        {/*</motion.div>*/}
                    {/*))}*/}
                {/*</div>*/}
            </div>
        </section>
    );
}