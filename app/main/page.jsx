import react from "react";
import HomeAbout from "../components/Main/homeAbout/HomeAbout";
import { BannerHome } from "../components/Main/BannerHome";
import { BannerWithDescription } from "../components/general/BannerWithDescription";
import { Review } from "../components/Main/review/Review";

export default function Page() {
    return (
        <section id="main">
            <BannerHome/>
            <HomeAbout/>
            <BannerWithDescription/>
            <Review/>
        </section>
    );
}