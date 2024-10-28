import react from "react";
import { Aboutlogo } from '../components/AboutUs/aboutlogo/Aboutlogo';
import { Explanation } from "../components/AboutUs/explanation/Explanation";
import { We } from "../components/AboutUs/We/We";
import { Ourteam } from "../components/AboutUs/ourteam/Ourteam";
import { BannerWithDescription } from "../components/general/BannerWithDescription";
import { Videomaterials } from "../components/AboutUs/Materials/Videomaterials";

export default function About() {
    return (
        <section>
             <Aboutlogo/>
             <Explanation/>
             <We/>
             <Ourteam/>
             <BannerWithDescription/>
             <Videomaterials/>
        </section>
    );
}