// import banner from '../../../assets/images/bannerHome.jpg'
export const BannerHome = () => {
    return (
        <section className="blue">
            <section className="blue flex container">
                <section className="flex flex-col gap-[50px] py-[100px] px-3 blue w-[40%]">
                    <h1 className="text-[88px] font-extrabold leading-[108px] monrope">Движение в <span className=" red font-extrabold italic">стиле</span></h1>
                    <p className="leading-25 text-[19px]">Экипировка для побед: будь готов к любым вершинам</p>
                    <button className="px-8 py-3 bg-[#DBFF00] color-black rounded-2xl max-w-[200px] text-black">Купить
                    </button>
                    <section className="swiper">
                        {/*swiper buttons*/}
                    </section>
                </section>
                <section className="bg-repeat-no-repeat bg-center w-[60%]" style={{backgroundImage: `url('../../../../assets/images/bannerHome.svg')`}}>

                </section>
            </section>
        </section>

    );
}