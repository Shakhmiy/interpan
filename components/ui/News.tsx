import Link from "next/link";
import Image from "next/image"; 
import Krym from "@/public/Krym.svg"
import Osm from "@/public/Osm.svg"
import Osms from "@/public/Osms.svg"
import Moscow from "@/public/Moscow.svg"
import Minsk from "@/public/Minsk.svg"




export default function News() {
  return (
    <div className="flex flex-col gap-[50px]">
        <p className="text-2xl font-semibold text-black">Новости компании</p>
        <div className="flex flex-row gap-[21px]">
          <div className="border border-gray-300 border-1">
            <Image
            src={Krym}
            width={590}
            height={400}
            alt="!" />
            <div className="flex flex-row gap-[96px] p-6">
              <div className="flex flex-col gap-[10px]">
                <p className="text-base font-light text-[#101D23]">Открытие представительства в Крыму</p>
                <p className="text-sm font-normal text-black">Многолетний опыт работы на рынке огнестойкой <br /> продукции позволяет нам открывать новые  <br /> представительства в новых городах.</p>
              </div>
              <p className="flex items-end text-sm font-light text-[#8E8F9B]">06.06.2018</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">

            <div className="grid grid-cols-2 gap-2">
              <div className="border border-gray-300 border-1 h-[271px]">
                <Image
                src={Osm}
                width={320}
                height={160}
                alt="!" />
                <div className="flex flex-col gap-[10px] p-3">
                  <p className="text-base font-light text-[#101D23]">Строительная выставка ОСМ-2017</p>
                  <p className="flex items-end text-sm font-light text-[#8E8F9B]">21.03.2017</p>
                </div>
              </div>
              <div className="border border-gray-300 border-1 h-[271px]">
                <Image
                src={Minsk}
                width={320}
                height={160}
                alt="!" />
                <div className="flex flex-col gap-[10px] p-3">
                  <p className="text-base font-light text-[#101D23]">Выставка СТРОЙЭКСПО 2016 в Минске</p>
                  <p className="flex items-end text-sm font-light text-[#8E8F9B]">20.03.2016</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="border border-gray-300 border-1 h-[271px]">
                <Image
                src={Osms}
                width={320}
                height={160}
                alt="!" />
                <div className="flex flex-col gap-[10px] p-3">
                  <p className="text-base font-light text-[#101D23]">Строительная выставка ОСМ-2016</p>
                  <p className="flex items-end text-sm font-light text-[#8E8F9B]">08.02.2016</p>
                </div>
              </div>
              <div className="border border-gray-300 border-1 h-[271px]">
                <Image
                src={Moscow}
                width={320}
                height={160}
                alt="!" />
                <div className="flex flex-col gap-[10px] p-3">
                  <p className="text-base font-light text-[#101D23]">Выставка в Москве ОСМ 2015</p>
                  <p className="flex items-end text-sm font-light text-[#8E8F9B]">03.02.2015</p>
                </div>
              </div>
            </div>

          </div>
        
        </div>
      </div>
  );
}
