import Image from 'next/image'
import React from 'react'
import {Card} from "@/app/components";
import dynamicFetch from "@/hooks/fetch";

export const  ProductCards = async () =>  {
   const productCard =  await dynamicFetch('/whole_sale')
  return (
    <section className="container">
        <section className="p-10 overflow-x-auto whitespace-nowrap flex space-x-4">
            {
                productCard.map((prop, index) => (
                    <Card key={index} prop={prop} />
                ))

            }
          </section>
    </section>

  )
}
