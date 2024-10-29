import { BannerHome } from "../components/Main/BannerHome";
import { BannerWithDescription } from "../components/general/BannerWithDescription";
import { Review } from "../components/Main/review/Review";
import { HomeAbout } from "../components/Main/homeAbout/HomeAbout";

export default function MainPage() {  // Проверь наличие компонента
  return (
    <section id="main">
      <BannerHome />
      <HomeAbout />
      <BannerWithDescription />
      <Review />
    </section>
  );

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

