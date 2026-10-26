import Link from "next/link";
import Image from "next/image"; 
import Arrows from "@/public/Arrows.svg"
import Volmix from "@/public/Volmix.svg"
import Gefest from "@/public/Gefest.svg"
import Xf from "@/public/Xf.svg"
import Diksi from "@/public/Diksi.svg"
import Ints from "@/public/Ints.svg"

export default function Cooperation() {
  return (
      <div className="flex flex-col gap-[50px] py-10">
        <div className="flex flex-row gap-[552px]">
          <p className="text-2xl font-semibold text-black w-[548px]">Нам доверяют</p>
          <Image className=""
            src={Arrows}
            width={100}
            height={40}
            alt="!" />
        </div>
        <div className=" grid grid-cols-5">
          <div className="border border-1 border-[#E5E5E5] p-10 w-[240px] h-[150px]">
            <Image 
              src={Volmix}
              width={157}
              height={64}
              alt="!" />
          </div>
          <div className="flex border border-1 border-[#E5E5E5] p-8 justify-center w-[240px] h-[150px]">
            <Image 
              src={Gefest}
              width={195}
              height={48}
              alt="!" />
          </div>
          <div className="flex border border-1 border-[#E5E5E5] p-8 justify-center w-[240px] h-[150px]">
            <Image 
              src={Xf}
              width={111}
              height={87}
              alt="!" />
          </div>
          <div className="flex border border-1 border-[#E5E5E5] p-8 justify-center w-[240px] h-[150px]">
            <Image 
              src={Diksi}
              width={189}
              height={106}
              alt="!" />
          </div>
          <div className="flex border border-1 border-[#E5E5E5] p-8 justify-center w-[240px] h-[150px]">
            <Image 
              src={Ints}
              width={121}
              height={78}
              alt="!" />
          </div>
        </div>

      </div>
  );
}
