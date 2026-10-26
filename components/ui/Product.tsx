import Image from "next/image"; 
import Ts from "@/public/Ts.svg"

export default function Product() {
  return (
    <div className="">

        <div className="flex flex-row gap-[142px] py-10">

            <div className="flex flex-col gap-[43px] w-[371px]">
            <p className="text-2xl font-semibold text-black">Интерпан — <br/> комплексные <br/> решения для вашего <br/> бизнеса</p>
            <div className="flex flex-row gap-[19px]">
                <p className="flex items-center justify-center text-xs bg-orange-600 text-white text-center rounded-xl w-[130px] h-[30px] hover:bg-orange-500">На схеме</p>
                <p className="flex items-center justify-center text-xs bg-white border border-orange-500 border-2 text-orange-500 rounded-xl w-[130px] hover:bg-orange-200">Списком</p>
            </div>
            </div>

            <Image
            src={Ts}
            width={687}
            height={615}
            alt="!" />

        </div>
    </div>
  );
}