
import react from "react";
import {
    BannerHome,
    HomeAbout,
    Review,
    New,
    BannerWithDescription,
    PopularCategory,
    ImageBanner, SalesCards, Advantages
} from "@/app/components";


export default function Main(){
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
        </section>
    );
}
