export default function Support() {
  return (
      <div className="py-10 ">
        <div className="bg-[#101D23] ">
          <div className="flex flex-row gap-[150px] h-[330px] justify-center items-center max-w-full">
            <div className="flex flex-col gap-4 w-[503px]">
              <p className="text-3xl font-medium text-orange-500">У вас есть проект для нас или <br/> необходима консультация?</p>
              <p className="text-xl font-medium text-white">Наш специалист свяжется с вами и ответит <br/> на все вопросы.</p>
            </div>
            <div className="flex flex-col gap-[55px]">
              <div className="flex flex-row gap-[90px]">
                <p className="text-lg font-medium text-white border-b border-white w-[250px] text-center">Ваше имя</p>
                <p className="text-lg font-medium text-white border-b border-white w-[250px] text-center">Телефон</p>
              </div>
              <div className="flex justify-end">
                <p className="flex items-center justify-center text-xs bg-orange-600 text-white text-center rounded-xl w-[192px] h-[40px] hover:bg-orange-500">Отправить</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}