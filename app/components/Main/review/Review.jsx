
import Image from "next/image";
import Photo from '../../../assets/images/image61.png';

export const  Review = () =>  {
  return (
    <section className="Review">
      <div className="container p-10">
        <div className="ofTitls">
          <h2 className="text-5xl font-semibold mb-3">Отзывы клиентов</h2>
        </div>
        <div className="cards p-10 flex overflow-x-scroll space-x-6">
          <div className="flex flex-col justify-between min-w-[530px]  bg-blue-700 p-7 rounded-2xl">
            <p className="text-white text-ms">
              Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине
              представлены лучшие спортМы — команда, которая любит спорт и знает, что нужно для эффективных
            </p>
            <span className="flex gap-2 content-center  mt-8">
              <Image
                  src={Photo}
                  alt="John Photo"
                  className="w-[50px] h-[50px] rounded-full"
                  width={50}
                  height={50}
              />
              <h2 className="text-white text-base mt-3 ml-5">Jhon Jhons</h2>
            </span>
          </div>

          <div className="flex flex-col justify-between min-w-[530px]  bg-blue-700 p-7 rounded-2xl">
            <p className="text-white text-ms">
              Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине
              представлены лучшие спортМы — команда, которая любит спорт и знает, что нужно для эффективных
            </p>
            <span className="flex justify-start content-center mt-8">
              <Image
                  src={Photo}
                  alt="John Photo"
                  className="rounded-2xl"
                  width={50}
                  height={50}
              />
              <h2 className="text-white text-base mt-3 ml-5">Jhon Jhons</h2>
            </span>
          </div>

          <div className="flex flex-col justify-between min-w-[530px]  bg-blue-700 p-7 rounded-2xl">
            <p className="text-white text-ms">
              Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине
              представлены лучшие спортМы — команда, которая любит спорт и знает, что нужно для эффективных
            </p>
            <span className="flex justify-start content-center mt-8">
              <Image
                  src={Photo}
                  alt="John Photo"
                  className="rounded-2xl"
                  width={50}
                  height={50}
              />
              <h2 className="text-white text-base mt-3 ml-5">Jhon Jhons</h2>
            </span>
          </div>

          <div className="flex flex-col justify-between min-w-[530px]  bg-blue-700 p-7 rounded-2xl">
            <p className="text-white text-ms">
              Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине
              представлены лучшие спортМы — команда, которая любит спорт и знает, что нужно для эффективных
            </p>
            <span className="flex justify-start content-center mt-8">
              <Image
                  src={Photo}
                  alt="John Photo"
                  className="rounded-2xl"
                  width={50}
                  height={50}
              />
              <h2 className="text-white text-base mt-3 ml-5">Jhon Jhons</h2>
            </span>
          </div>

          <div className="flex flex-col justify-between min-w-[530px]  bg-blue-700 p-7 rounded-2xl">
            <p className="text-white text-ms">
              Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок. В нашем магазине
              представлены лучшие спортМы — команда, которая любит спорт и знает, что нужно для эффективных
            </p>
            <span className="flex justify-start content-center mt-8">
              <Image
                  src={Photo}
                  alt="John Photo"
                  className="rounded-2xl"
                  width={50}
                  height={50}
              />
              <h2 className="text-white text-base mt-3 ml-5">Jhon Jhons</h2>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

