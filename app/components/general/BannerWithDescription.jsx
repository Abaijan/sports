// app/banner/BannerWithDescription.js
import dynamicFetch from "@/hooks/fetch";

export  async function BannerWithDescription() {
    const banner = await dynamicFetch('/banner_with_description');

    if (!banner) return null;
console.log(banner)
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center">
            {banner?.map((item) => (
                <div
                    key={item.id}
                    className="relative h-96 flex bg-no-repeat bg-center bg-cover items-center justify-center xl:px-[300px]"
                    style={{ backgroundImage: `url('${item.banner}')` }}
                >
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="relative text-center text-white px-4 xl:px-0 z-10">
                        <h2 className="font-thin text-[18px] xl:text-[24px] manrope xl:font-medium mb-4">
                            {item.description}
                        </h2>
                        <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-[10px] hover:bg-blue-700 transition duration-300">
                            Связаться с нами
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
}
