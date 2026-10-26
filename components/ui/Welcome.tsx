import Link from "next/link";
import Image from "next/image"; 
import Bz from "@/public/Bz.svg"
import Zd from "@/public/Zd.svg"
import Cube from "@/public/Cube.svg"
import Gruz from "@/public/Gruz.svg"
import Arrows from "@/public/Arrows.svg"

export default function Welcome() {
  return ( 
    <div className="flex flex-col gap-8 py-10">

      <div className="flex gap-[20px] flex-row ">
    
        <div className=" w-[900px] h-[440px] bg-cover bg-center" style={{backgroundImage: "url('Mask.svg')"}}>
            <div className="flex items-end w-[900px] h-[440px] ">
                <div className="flex flex-row gap-[333px]">
                    <div className="flex flex-col p-12 gap-4 ">
                        <p className="text-4xl font-medium text-left text-black">Декоративная <br/> фактура Pixel</p>
                        <p className="text-base text-left font-light text-blue-950">Панели INTERPAN Econom PIXEL —   <br/> уникальный инновационный листовой  <br/> материал из чистейшего натурального гипса.</p>
                    </div>
                    <div className="flex p-12 items-end">
                        <Image
                            src={Arrows}
                            width={100}
                            height={40}
                            alt="!" />
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className=" w-[280px] h-[210px] bg-cover bg-center" style={{backgroundImage: "url('Maskt.svg')"}}>
              <div className="flex items-end w-[280px] h-[210px]">
                <div className="flex flex-col p-4 gap-4 ">
                  <p className="text-xs font-semibold text-center items-center text-black bg-white rounded-lg w-[150px] h-[18px] hover:bg-orange-500">Спецпредложения</p>
                  <p className="text-sm font-semibold text-white">Распродажа отбойной <br/> доски Интерпан</p>
                </div>
              </div>
          </div>
          <div className=" w-[280px] h-[210px] bg-cover bg-center" style={{backgroundImage: "url('Maskth.svg')"}}>
              <div className="flex items-end w-[280px] h-[210px]">
                <div className="flex flex-col p-4 gap-4 ">
                  <p className="text-xs font-semibold text-center text-white bg-orange-500 rounded-lg w-[150px] h-[18px] hover:bg-orange-700">Инструменты</p>
                  <p className="text-sm font-semibold text-white">Калькулятор — <br/> расчитать количество <br/> панелей для помещения</p>
                </div>
              </div>
          </div>
        </div>

      </div>
      
      <div className="flex flex-row gap-[46px]">

        <div className="flex flex-row gap-[23px]">
          <Image
            src={Bz}
            width={37}
            height={44}
            alt="!" />
          <div className="flex flex-col text-black">
            <p className="font-semibold text-base"> Более 15 лет на рынке</p>
            <p className="font-light text-sm">Большой опыт в производстве <br/> панелей под любые задачи</p>
          </div>
        </div>

        <div className="flex flex-row gap-[23px]">
          <Image
            src={Zd}
            width={37}
            height={44}
            alt="!" />
          <div className="flex flex-col text-black">
            <p className="font-semibold text-base">Собственное производство</p>
            <p className="font-light text-sm">Мы контролируем стоимость и <br/> качество нашей продукции</p>
          </div>
        </div>

        <div className="flex flex-row gap-[23px]">
          <Image
            src={Cube}
            width={37}
            height={44}
            alt="!" />
          <div className="flex flex-col text-black">
            <p className="font-semibold text-base">Индивидуальный подход</p>
            <p className="font-light text-sm">Изготавливаем панели <br/> индивидуальных размерови</p>
          </div>
        </div>

        <div className="flex flex-row gap-[23px]">
          <Image
            src={Gruz}
            width={37}
            height={44}
            alt="!" />
          <div className="flex flex-col text-black">
            <p className="font-semibold text-base"> Доставка и монтаж </p>
            <p className="font-light text-sm">Выполняем работы под ключ: <br/> от производства до установки</p>
          </div>
        </div>

      </div>

    </div>
  );
}
