import { Aboutlogo } from '../components/AboutUs/aboutlogo/Aboutlogo';
import { Explanation } from "@/app/components";
import { We } from "../components/AboutUs/We/We";
import { Ourteam } from "../components/AboutUs/ourteam/Ourteam";
import { BannerWithDescription } from "@/app/components";
import { Videomaterials } from "../components/AboutUs/Materials/Videomaterials";
import {Advantages} from "@/app/components";

export default function About() {
    return (
        <section>
             <Aboutlogo/>
             <Explanation/>
             <We/>
             <Ourteam/>
             <BannerWithDescription/>
            <Advantages/>
             <Videomaterials/>
        </section>
    );
}