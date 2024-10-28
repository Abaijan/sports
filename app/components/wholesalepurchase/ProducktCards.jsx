import Image from 'next/image'
import React from 'react'
import imgProduckt from '../../assets/images/image72.png'

export function ProducktCards() {
  return (
    <section className="container">
        <section className="p-10 overflow-x-auto whitespace-nowrap flex space-x-4">
                <section className="inline-block w-64 border-2 border-slate-200 rounded-lg">
                    <Image src={imgProduckt} alt="produckt" className="w-full rounded-lg" />
                    <h3 className="text-black p-1">Спортивные шорты</h3>
                    <ul className="p-1">
                        <li>
                        <p className="text-sm">Розничная цена: 1500 с</p>
                        <p className="text-sm">Оптовая цена: 1000 с (от 50 шт)</p>
                        </li>
                    </ul>
                </section>

                <section className="inline-block w-64 border-2 border-slate-200 rounded-lg">
                    <Image src={imgProduckt} alt="produckt" className="w-full rounded-lg" />
                    <h3 className="text-black p-1">Спортивные шорты</h3>
                    <ul className="p-1">
                        <li>
                        <p className="text-sm">Розничная цена: 1500 с</p>
                        <p className="text-sm">Оптовая цена: 1000 с (от 50 шт)</p>
                        </li>
                    </ul>
                </section>

                <section className="inline-block w-64 border-2 border-slate-200 rounded-lg">
                    <Image src={imgProduckt} alt="produckt" className="w-full rounded-lg" />
                    <h3 className="text-black p-1">Спортивные шорты</h3>
                    <ul className="p-1">
                        <li>
                        <p className="text-sm">Розничная цена: 1500 с</p>
                        <p className="text-sm">Оптовая цена: 1000 с (от 50 шт)</p>
                        </li>
                    </ul>
                </section>

                <section className="inline-block w-64 border-2 border-slate-200 rounded-lg">
                    <Image src={imgProduckt} alt="produckt" className="w-full rounded-lg" />
                    <h3 className="text-black p-1">Спортивные шорты</h3>
                    <ul className="p-1">
                        <li>
                        <p className="text-sm">Розничная цена: 1500 с</p>
                        <p className="text-sm">Оптовая цена: 1000 с (от 50 шт)</p>
                        </li>
                    </ul>
                </section>
                <section className="inline-block w-64 border-2 border-slate-200 rounded-lg">
                    <Image src={imgProduckt} alt="produckt" className="w-full rounded-lg" />
                    <h3 className="text-black p-1">Спортивные шорты</h3>
                    <ul className="p-1">
                        <li>
                        <p className="text-sm">Розничная цена: 1500 с</p>
                        <p className="text-sm">Оптовая цена: 1000 с (от 50 шт)</p>
                        </li>
                    </ul>
                </section>
                <section className="inline-block w-64 border-2 border-slate-200 rounded-lg">
                    <Image src={imgProduckt} alt="produckt" className="w-full rounded-lg" />
                    <h3 className="text-black p-1">Спортивные шорты</h3>
                    <ul className="p-1">
                        <li>
                        <p className="text-sm">Розничная цена: 1500 с</p>
                        <p className="text-sm">Оптовая цена: 1000 с (от 50 шт)</p>
                        </li>
                    </ul>
                </section>
                <section className="inline-block w-64 border-2 border-slate-200 rounded-lg">
                    <Image src={imgProduckt} alt="produckt" className="w-full rounded-lg" />
                    <h3 className="text-black p-1">Спортивные шорты</h3>
                    <ul className="p-1">
                        <li>
                        <p className="text-sm">Розничная цена: 1500 с</p>
                        <p className="text-sm">Оптовая цена: 1000 с (от 50 шт)</p>
                        </li>
                    </ul>
                </section>
          </section>
    </section>

  )
}
