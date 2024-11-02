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
};