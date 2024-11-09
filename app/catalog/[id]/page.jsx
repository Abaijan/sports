'use client'
import Image from "next/image";
import img from '@/app/assets/images/image72.svg'
import {SameProducts} from "@/app/components";
import Link from "next/link";
import {useState} from "react";
import {useParams, usePathname} from "next/navigation";
import {productsStore} from "@/app/store/basketSore";
import {basketStore} from "@/app/store/basketSore";
import {useEffect} from "react";

export default function Product() {
    const param = useParams()
    const addToBasket = basketStore((state) => state.addToBasket);
    const {products} = productsStore();
    const response = products.find(product => product.id === Number(param.id));

    const [selectedProduct, setSelectedProduct] = useState({
        id: response?.id,
        title: response?.title,
        description: response?.description,
        price: response?.price,
        image: response?.main_image,
        color:  null,
        size: null,
        count: 1
    });

    useEffect(() => {
        productsStore.getState().getProducts();
        setSelectedProduct({
            id: response?.id,
            title: response?.title,
            description: response?.description,
            price: response?.price,
            image: response?.main_image,
            color:  null,
            size: null,
            count: 1
        })
       response && response?.images?.unshift(response?.main_image)
    }, [response]);

   const addToBasketFunction = () => {
       if(!selectedProduct.size && !selectedProduct.color) {
           alert('Выберите размер и цвет!')
       } else
       addToBasket(selectedProduct)
   }



    if(response === undefined) return null
    return (
        <section className="container px-[15px] xl:px-0">
            <section className="flex flex-col gap-6">
                <div className="my-[50px]">
                    <div className="text-[18px] flex font-thin text-[#00000099]">
                        <Link href='/catalog'>Каталог</Link><p> /{response?.title}</p>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row mb-[60px] gap-6">
                    <div className="flex xl:flex-row flex-col-reverse">
                        <div
                            className="flex xl:flex-col mt-[20px] xl:mt-0 flex-row xl:w-1/5 gap-8 overflow-x-scroll xl:max-w-[92px] xl:max-h-[473px] scrollbar-hidden xl:overflow-y-scroll ">
                            {response?.images?.map((img, index) => (
                                <Image key={index} src={img} alt="image" className="rounded-xl  w-[92px] h-[92px]"
                                       width={92} height={92}/>
                            ))}
                        </div>

                        <Image src={response?.main_image} alt="image"
                               className="object-cover rounded-xl xl:w-[539px] h-[472px]" width={539} height={472}/>
                    </div>

                    <div className="flex flex-col gap-[30px] w-full xl:w-1/2">
                        <h1 className="manrope font-bold text-[24px] leading-[30px]">{response?.title}</h1>
                        <p className="font-normal text-[16px] leading-[21px] text-[#222222CC]">{response?.description}</p>
                        <span
                            className="font-bold text-[22px] leading-[30px] text-[#1243C0]">{response?.price} сом</span>
                        <p className=""></p>
                        <div className="flex flex-col gap-4 ">
                            <p className="font-thin text-[16px] leading-[21px] ">Цвет</p>
                            <div className="flex gap-4 ">
                                {response?.available_colors.map((color, index) => (
                                    <div onClick={() => setSelectedProduct({...selectedProduct, color: color})} key={index} className={`rounded-full cursor-pointer w-[30px] h-[30px]`} style={{backgroundColor: color}}></div>
                                ))}
                            </div>
                        </div>
                        <div className="flex xl:flex-row flex-col xl:w-auto w-full gap-4 ">
                            <div className="flex flex-col gap-4 ">
                                <p className="font-thin text-[16px] leading-[21px]">Размеры</p>
                                <div className="flex flex-col w-full justify-between xl:flex-row ">
                                    <div className="flex  w-full xl:w-[300px] gap-4">
                                            {response?.available_sizes?.map((size, index) => (
                                                <div onClick={() => setSelectedProduct({...selectedProduct, size: size})} key={index} className={`rounded-full w-[30px] flex items-center justify-center h-[30px] border-[1px] cursor-pointer hover:border-[#1243C0]`}>
                                                    <p className="text-center">{size}</p></div>

                                            ))}

                                    </div>


                                </div>
                                {
                                    response &&  selectedProduct && (
                                        <div className="w-full xl:ml-[100px] flex justify-end">
                                            <button
                                                onClick={addToBasketFunction}
                                                className="hover:bg-blue-700 transition duration-300 xl:px-[23x] py-[7px] rounded-[6px] bg-[#1243C0] text-center text-[white] w-1/2 xl:w-[280px] h-[47px] manrope">Добавить
                                                в
                                                корзину
                                            </button>
                                        </div>

                                    )
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <div className="">
                    <SameProducts id={response?.id} category={response?.category}/>
                </div>
            </section>
        </section>
    );
}