import Image from "next/image";
import Photo from '../../assets/images/image61.png';
import dynamicFetch from "@/hooks/fetch";

export const  Review = async () =>  {
  const reviews = await dynamicFetch('/reviews');
  return (
    <section className="Review">
      <div className="container px-[15px] xl:px-0 xl:p-10">
        <div className="ofTitls">
          <h2 className="text-[24px] py-[30px] px-[15px] xl:px-0 xl:py-[0] font-normal impact xl:text-5xl xl:font-semibold mb-3">Отзывы клиентов</h2>
        </div>
        <div className="cards xl:p-10 flex flex-col  gap-[20px] xl:gap-[30px] xl:flex-row xl:overflow-x-scroll ">
          {
            reviews.map((review) => (
              <div key={review.id} className="flex flex-col justify-between  min-w-[300px] xl:min-w-[530px]  bg-[#1A3EA9] p-4 xl:p-7 rounded-2xl">
                <p className="text-white font-thin xl:text-ms">  {review.text}</p>
                <span className="flex gap-2 content-center  mt-8">
                  <Image
                      src={review.profile_image}
                      alt="John Photo"
                      className="w-[50px] h-[50px] rounded-full"
                      width={50}
                      height={50}
                  />
                  <h2 className="text-white text-base mt-3 ml-5">{review.name}</h2>
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

