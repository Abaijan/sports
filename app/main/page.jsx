
import {
    BannerHome,
    HomeAbout,
    Review,
    New,
    BannerWithDescription,
    PopularCategory,
    ImageBanner, SalesCards, Advantages
} from "@/app/components";
import {Videomaterials} from "@/app/components/AboutUs/Materials/Videomaterials";


export default function Main(){

    console.log(0.3 + 0.3 === 0.6)

    return (
        <section id="main">
            <BannerHome/>
            <New/>
            <HomeAbout/>
            <PopularCategory/>
            <ImageBanner/>
            <SalesCards/>
            <Advantages/>
            <BannerWithDescription/>
            <Review/>
            <Videomaterials/>
        </section>
    );
}

