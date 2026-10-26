import Link from "next/link";
import Image from "next/image"; 
import Pr from "@/public/pr.svg"
import Fire from "@/public/fire.svg"
import Ocon from  "@/public/ocon.svg"
import Firet from "@/public/firet.svg"
import Zab from "@/public/zab.svg"
import Cub from "@/public/cub.svg"
import Cas from "@/public/cas.svg"
import Org from "@/public/orgruz.svg"
import Ppt from "@/public/PPT.svg"



export default function About() {
  return (
      <div className="flex flex-col">
        <div className="bg-[#F3F6F8] py-10">
          <div className="flex flex-row gap-[101px]">

            <div className="flex flex-col gap-[30px] w-[304px] h-[418px]">
              <p className="text-2xl font-semibold text-black">О компании</p>
              <div className="flex flex-col gap-[20px] text-sm text-gray-500">
                <p>Завод по производству огнестойких декоративных стеновых панелей «Интерпан» начал свою деятельность в 2003 году. Более десяти лет компания не стояла на месте: она развивалась, разрабатывала новые решения в области декора, предоставляя своим клиентам услуги высокого класса.</p>
                <p>Благодаря продуктивной и успешной работе на рынке огнестойких декоративных стеновых панелей компания сумела занять одну из лидирующих позиций.</p>
              </div>
            </div>

            <div className="flex flex-col">


              <div className="grid grid-cols-4 w-[762px]">

                <div className="flex flex-col gap-[44px] border border-1 border-[#E5E5E5] p-2">
                    <Image
                      src={Pr}
                      width={43}
                      height={43}
                      alt="!" />
                    <p className="text-sm text-black">Производство и декорирование <br/> огнестойких <br/> стеновых панелей</p>
                </div>

                <div className="flex flex-col gap-[44px] border border-1 border-[#E5E5E5] p-2">
                    <Image
                      src={Fire}
                      width={37}
                      height={48}
                      alt="!" />
                    <p className="text-sm text-black">Изготовление водо и огнестойких потолочных плит</p>
                </div>

                <div className="flex flex-col gap-[44px] border border-1 border-[#E5E5E5] p-2">
                    <Image
                      src={Ocon}
                      width={46}
                      height={48}
                      alt="!" />
                    <p className="text-sm text-black">Декорирование <br/> любых оснований: <br/> ГСП, СМЛ, ГКЛ</p>
                </div>
                <div className="flex flex-col gap-[44px] border border-1 border-[#E5E5E5] p-2">
                    <Image
                      src={Firet}
                      width={44}
                      height={48}
                      alt="!" />
                    <p className="text-sm text-black">Декорирование <br/> любых оснований: <br/> ГСП, СМЛ, ГКЛ</p>
                </div>

              </div>

              <div className="grid grid-cols-4 w-[762px]">

                <div className="flex flex-col gap-[44px] border border-1 border-[#E5E5E5] p-2">
                    <Image
                      src={Zab}
                      width={46}
                      height={42}
                      alt="!" />
                    <p className="text-sm text-black">Производство и <br/> декорирование  <br/> алюминиевого  <br/> профиля</p>
                </div>

                <div className="flex flex-col gap-[44px] border border-1 border-[#E5E5E5] p-2">
                    <Image
                      src={Cub}
                      width={46}
                      height={42}
                      alt="!" />
                    <p className="text-sm text-black">Изготовление <br/> продукции по  <br/> индивидуальным  <br/> размерам</p>
                </div>

                <div className="flex flex-col gap-[44px] border border-1 border-[#E5E5E5] p-2">
                    <Image
                      src={Cas}
                      width={38}
                      height={43}
                      alt="!" />
                    <p className="text-sm text-black">Производство  <br/> противопожарных <br/>  строительных <br/> материалов</p>
                </div>

                <div className="flex flex-col gap-[44px] border border-1 border-[#E5E5E5] p-2">
                    <Image
                      src={Org}
                      width={46}
                      height={37}
                      alt="!" />
                    <p className="text-sm text-black">Осуществление  <br/> доставки и монтаж <br/> продукции  <br/> компании</p>
                </div>

              </div>

            </div>


          </div>
        </div>

        <div className="flex flex-row">
        <div className="flex bg-[#101D23] w-[721px] h-[175px] items-center justify-center">
          <p className="text-white text-3xl font-medium">Посмотрите презентации <br /> о наших продуктах</p>
        </div>
        <div className="flex bg-[#E93D07] w-[721px] h-[175px] items-center justify-center gap-[69px]">
          <div className="flex flex-row gap-[23px]">
            <Image
              src={Ppt}
              width={46}
              height={53}
              alt="!" />
            <p className="text-white text-lg font-mediim">Стеновые <br /> панели <br /> Интерпан</p>
          </div>
          <div className="flex flex-row gap-[23px]">
            <Image
              src={Ppt}
              width={46}
              height={53}
              alt="!" />
            <p className="text-white text-lg font-mediim">Потолочные <br /> панели <br /> Интерпан</p>
          </div>
        </div>
      </div>

      </div>
  );
}
