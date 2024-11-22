import Image from 'next/image'
import React from 'react'
import {Card} from "@/app/components";
import dynamicFetch from "@/hooks/fetch";

export const  ProductCards = async () =>  {
   const productCard =  await dynamicFetch('/products');
   console.log(productCard)
   if(!productCard){
       return (
           <div>Loading...</div>
       )
   }
  return (
    <section className="container">
        <section className="xl:p-10 gap-3 px-auto xl:overflow-x-auto xl:whitespace-nowrap flex flex-wrap xl:flex-nowrap xl:space-x-4">
            {
                productCard.results?.slice(0, 10).map((prop, index) => (
                    <Card key={index} prop={prop} />
                ))

            }
          </section>
    </section>

  )
}
