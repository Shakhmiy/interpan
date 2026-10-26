import Link from "next/link";
import Image from "next/image"; 
import Arrows from "@/public/Arrows.svg"
import Photo from "@/public/Photo.svg"


export default function Products() {
  return (
      <div className="flex flex-row gap-[60px] py-10">

        <div className="flex flex-col gap-[50px] w-[548px]">
          <div className="flex flex-col gap-[30px] w-[371px]">
            <p className="text-2xl font-semibold text-black">Кейсы Интерпан</p>
            <div className="flex flex-row gap-[19px]">
                <p className="flex items-center justify-center text-xs bg-orange-600 text-white text-center rounded-xl w-[130px] h-[30px] hover:bg-orange-500">Продукция</p>
                <p className="flex items-center justify-center text-xs bg-white border border-orange-500 border-2 text-orange-500 rounded-xl w-[130px] hover:bg-orange-200">Клиенты</p>
            </div>
            </div>
            <div className="flex flex-col gap-2 text-sm text-black font-medium">
              <p>Панели эконом — Pixel</p>
              <p>Панели окрашенные — Econom</p>
              <p>Панели эконом — Econom Loft</p>
              <p>Панели Practic — HPL пластик</p>
              <p>Панели с натуральным шпоном — Elite</p>
              <p>Панели с ПВХ пленкой — InTerior</p>
              <p>Декоративный профиль для панелей</p>
              <p>Отбойная доска — Design</p>
              <p>Потолочные панели — INTERPAN Mercury</p>
              <p>Фасадные и цокольные панели</p>
              <p>Панели антибактериальные — Farma</p>
              <p>Плита без покрытия</p>
            </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <div className="flex justify-end">
          <Image
            src={Arrows}
            width={100}
            height={40}
            alt="!" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="grid grid-cols-2 gap-[20px]">
              <Image
              src={Photo}
              width={285}
              height={279}
              alt="!" />
              <Image
              src={Photo}
              width={285}
              height={279}
              alt="!" />
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <Image
              src={Photo}
              width={285}
              height={279}
              alt="!" />
              <Image
              src={Photo}
              width={285}
              height={279}
              alt="!" />
            </div>
          </div>
        </div>

      </div>
  );
}
