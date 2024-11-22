'use client'
import Image from "next/image";
import {SameProducts} from "@/app/components";
import Link from "next/link";
import {useState, useEffect} from "react";
import {useParams} from "next/navigation";
import {productsStore} from "@/app/store/basketSore";
import {basketStore} from "@/app/store/basketSore";
import {getLocalizedText} from "@/hooks/locale";
import {localeStore} from "@/app/store/localeStore";

export default function Product() {
    const param = useParams();

    const addToBasket = basketStore((state) => state.addToBasket);

    const  { products } = productsStore();
    const response = products.find(product => Number(product.id) === Number(param.id));
    const [selectedProduct, setSelectedProduct] = useState({
        id: response?.id,
        title: response?.title,
        title_en: response?.title_en,
        title_ru: response?.title_ru,
        title_kg: response?.title_kg,
        description: response?.description,
        price: response?.price,
        image: response?.main_image,
        color: null,
        size: null,
        count: 1
    });

    useEffect(() => {
        productsStore.getState().getProducts();
        setSelectedProduct({
            id: response?.id,
            title: response?.title_en,
            title_en: response?.title_en,
            title_ru: response?.title_ru,
            title_kg: response?.title_kg,
            description: response?.description,
            price: response?.price,
            image: selectedImage,
            color: null,
            size: null,
            count: 1
        });
        response && response?.images?.unshift(response?.main_image);
    }, []);

    const addToBasketFunction = () => {
        if (!selectedProduct.size ) {
            alert('Выберите  размер!');
        } else if(!selectedProduct.size) {
            alert('Выберите размер!');
        } else if(!selectedProduct.size && !selectedProduct.color) {
            alert('Выберите размер и цвет!');
        }
        else {
            addToBasket(selectedProduct);
        }
    };
    const locale = localeStore((set) => set.locale);
    const [selectedImage, setSelectedImage] = useState(response?.main_image); // Fallback to placeholder

    const selectImage = (source) => () => {
        setSelectedImage(source);
    };
    if (!response) return <p>Loading...</p>;

    return (
        <section className="container px-[15px] xl:px-0">
            <section className="flex flex-col gap-6">
                <div className="my-[50px]">
                    <div className="text-[18px] flex font-thin text-[#00000099]">
                        <Link href='/catalog'>{locale === 'en' ? 'Catalog' :  'Каталог'}</Link><p> /{getLocalizedText(response, 'title', locale)}</p>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row mb-[60px] gap-6">
                    <div className="flex xl:flex-row flex-col-reverse">
                        <div className="flex xl:flex-col mt-[20px] xl:mr-2 xl:mt-0 flex-row xl:w-1/5 gap-8 overflow-x-scroll xl:max-w-[92px] xl:max-h-[473px] scrollbar-hidden xl:overflow-y-scroll">
                            {response?.images?.map((img, index) => (
                                <Image key={index} src={img || '/placeholder.jpg'} alt="image" className="rounded-xl w-[92px] h-[92px]"
                                       width={92} height={92} onClick={selectImage(img)}/>
                            ))}
                        </div>
                        <Image src={selectedImage || response?.main_image} alt="image"
                               className="object-cover rounded-xl xl:w-[539px] h-[472px]" width={539} height={472}/>
                    </div>

                    <div className="flex flex-col gap-[30px] w-full xl:w-1/2">
                        <h1 className="manrope font-bold text-[24px] leading-[30px]">{getLocalizedText(response, 'title', locale)}</h1>
                        <p className="font-normal text-[16px] leading-[21px] text-[#222222CC]">{getLocalizedText(response, 'description', locale)}</p>
                        <span className="font-bold text-[22px] leading-[30px] text-[#1243C0]">{response?.price} сом</span>
                        <div className="flex flex-col gap-4">
                            <p className="font-thin text-[16px] leading-[21px]">{locale === 'en' ? 'Color' : locale === 'kgz' ? 'Түсү' : 'Цвет'}</p>
                            <div className="flex gap-4">
                                {response?.available_colors.map((color, index) => (
                                    <div onClick={() => setSelectedProduct({...selectedProduct, color})} key={index} className={`rounded-full cursor-pointer w-[30px] h-[30px] ${color === selectedProduct.color ? 'border-[1px] box-content border-[#1243C0]' : ''}`} style={{backgroundColor: color}}></div>
                                ))}
                            </div>
                        </div>
                        <div className="flex xl:flex-row flex-col xl:w-auto w-full gap-4">
                            <div className="flex flex-col gap-4">
                                <p className="font-thin text-[16px] leading-[21px]">{locale === 'en' ? 'Size' : 'Размер'}</p>
                                <div className="flex w-full justify-between xl:flex-row">
                                    <div className="flex w-full xl:w-[300px] gap-4">
                                        {response?.available_sizes?.map((size, index) => (
                                            <div onClick={() => setSelectedProduct({...selectedProduct, size})} key={index} className={`rounded-full w-[30px] flex items-center justify-center h-[30px] border-[1px] cursor-pointer hover:border-[#1243C0] ${size === selectedProduct.size ? 'border-[#1243C0]' : ''}`}>
                                                <p className="text-center">{size}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {selectedProduct && (
                                    <div className="w-full xl:ml-[100px] flex justify-end">
                                        <button onClick={addToBasketFunction} className="hover:bg-blue-700 transition duration-300 xl:px-[23x] py-[7px] rounded-[6px] bg-[#1243C0] text-center text-[white] w-1/2 xl:w-[280px] h-[47px] manrope">
                                            Добавить в корзину
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <SameProducts id={response?.id} category={response?.category}/>
            </section>
        </section>
    );
}
