import {
    BannerHome,
    HomeAbout,
    Review,
    New,
    BannerWithDescription,
    PopularCategory,
    ImageBanner, SalesCards, Advantages
} from "@/app/components";
import {VideoMaterials} from "@/app/components/AboutUs/Materials/Videomaterials";


export default function Main(){


    return (
        <section id="main">
            <BannerHome/>
            < New/>
            <HomeAbout/>
            <PopularCategory/>
            <ImageBanner/>
            <SalesCards/>
            <Advantages/>
            <BannerWithDescription/>
            <Review/>
            <VideoMaterials/>
        </section>
    );
}

