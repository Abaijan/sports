import react from "react";
import { HomeWholesale } from "../components/wholesalepurchase/HomeWholesale";
import { Discount } from "../components/wholesalepurchase/Discount";
import { Explanation } from "../components/AboutUs/explanation/Explanation";
import { ProducktCards } from "../components/wholesalepurchase/ProducktCards";
import { Module } from "../components/module/Module";

export default function Page() {
    return (
        <section>
            <HomeWholesale/>
            <Discount/>
            <Explanation/>
            <ProducktCards/>
            <Module/>
        </section>
    );
}