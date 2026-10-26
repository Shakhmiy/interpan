import Link from "next/link";
import Mail from "@/public/Mail.svg";
import Phone from "@/public/Phone.svg"
import Image from "next/image"; 
import Logo from "@/public/Logo.svg"
import Facebook from "@/public/Facebook.svg"
import Vk from "@/public/VK.svg"
import Youtube from "@/public/Youtube.svg"
import Raz from "@/public/Raz.svg"

export default function Footer() {
  return (
    <footer className="shadow-b-lg bg-[#F3F6F8] max-w-full mx-auto px-30 w-[1440px]">
            <div className="flex container flex-col gap-[44px] py-20 w-[1440px]">
                <div className="flex flex-row gap-[177px]">
                    <div className="flex flex-col gap-[38px] ] w-[304px]">
                        <Image
                        src={Logo}
                        width={209}
                        height={60}
                        alt="!" />
                        <p className="text-sm text-black ">SEO текст для прожвидения сайта в поисковиках содежащий ключевые слова, теги или другую информацию, которая может быть неинтересна пользователю, но поможет в поисковом продвижении сайта.</p>
                    </div>
                    <div className="flex flex-col gap-[36px] w-[241px]">
                        <p className="text-black text-xl">Меню</p>
                        <div className="flex flex-col gap-2 text-black text-sm">
                            <p>Главная</p>
                            <p>Каталог</p>
                            <p>Технология монтажа</p>
                            <p>Прайс</p>
                            <p>Кейсы</p>
                            <p>Контакты</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[48px]">
                        <div className="flex flex-col gap-[36px] w-[241px]">
                            <p className="text-black text-xl">Cвязаться с нами</p>
                            <div className="flex flex-col gap-[12px] text-black text-sm">
                                <div className="flex flex-row gap-[8px]">
                                    <Image
                                        src={Phone}
                                        width={18}
                                        height={18}
                                        alt="!" />
                                    <p>+7 (495) 730-55-01</p>
                                </div>
                                <div className="flex flex-row gap-[8px]">
                                    <Image
                                        src={Mail}
                                        width={18}
                                        height={18}
                                        alt="!" />
                                    <p>info@interpan.ru</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-black text-xl">Мы в социальных сетях:</p>
                            <div className="flex flex-row gap-4">
                                <Image
                                    src={Facebook}
                                    width={18}
                                    height={18}
                                    alt="!" />
                                <Image
                                    src={Vk}
                                    width={18}
                                    height={18}
                                    alt="!" />
                                <Image
                                    src={Youtube}
                                    width={18}
                                    height={18}
                                    alt="!" />
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src={Raz}
                    width={1280}
                    height={0}
                    alt="!" />
                <p className="text-gray-500">Создание сайта: Shakhmiy. 2026 г.</p>
            </div>
    </footer>
  );
}