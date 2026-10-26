import Image from "next/image";
import Mail from "@/public/Mail.svg";
import Phone from "@/public/Phone.svg"
import Z from "@/public/Zayavka.svg"
import Facebook from "@/public/Facebook.svg"
import Vk from "@/public/VK.svg"
import Youtube from "@/public/Youtube.svg"
import Logo from "@/public/Logo.svg"
import Line from "@/public/Line.svg"
import Lines from "@/public/Lines.svg"
import Search from "@/public/Search.svg"

export default function Header() {
  return (
    <header className="shadow-b-lg mx-auto px-30 w-[1440px]">
      <div className="flex flex-col container mx-auto items-center justify-center py-5 gap-10">
        <div className="flex flex-row gap-44">
          <div className="flex flex-row gap-8 justify-canter">
            <div className="flex flex-row gap-2">
              <Image
                  src={Mail}
                  width={18}
                  height={18}
                  alt="!" />
                <p className="text-black">info@interpan.ru</p>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                  src={Phone}
                  width={18}
                  height={18}
                  alt="!" />
                <p className="text-black">+7 (495) 730-55-01</p>
            </div>
            <Image
                  src={Z}
                  width={123}
                  height={15}
                  alt="!" />
          </div>
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
        <Image
          src={Lines}
          width={1280}
          height={1}
          alt="!" />
        <div className="flex flex-row gap-56">
          <Image
          src={Logo}
          width={209}
          height={60}
          alt="!" />
          <div className="flex flex-row gap-4">
            <div className="text-black flex flex-row font-medium text-sm gap-12 items-center">
              <p>Главная</p>
              <p>Каталог</p>
              <p>Технология монтажа</p>
              <p>Прайс</p>
              <p>Кейсы</p>
              <p>Контакты</p>
            </div>
              <Image
                src={Line}
                width={1}
                height={0}
                alt="!" />
                <Image
                src={Search}
                width={18}
                height={18}
                alt="!" />
          </div>
        </div> 
      </div>
    </header>
  );
}