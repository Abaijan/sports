
import react from "react";
import { BannerHome, HomeAbout, Review, BannerWithDescription} from "@/app/components";

export default function Main(){
    return (
        <section id="main">
            <BannerHome/>
            <HomeAbout/>
            <BannerWithDescription/>
            <Review/>
        </section>
    );
}
