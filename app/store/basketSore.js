import {create} from "zustand";
import dynamicFetch from "@/hooks/fetch";
import {persist} from "zustand/middleware";



export const productsStore = create(
    persist(
        (set) => ({
            products: [],
            error: null,
            getProducts: async () => {
                try {
                    const response = await dynamicFetch('/products');
                    set({ products: response.results, error: null });
                } catch (error) {
                    set({ error: 'Failed to fetch products' });
                    console.error(error);
                }
            },

        })
    ),{
        name: 'products-storage',
        getStorage: () => localStorage
    }
  );

export const basketStore = create(
    persist(
        (set) => ({
            basket: [],
            addToBasket: (item) => set((state) => ({ basket: [...state.basket, state.basket.find(item => item.id === item.id) ? { ...item, count: item.count + 1 } : item] })),
            removeFromBasket: (id, color, size, category) => set((state) => ({
                basket: state.basket.filter(item => item.id !== id || item.color !== color || item.size !== size || item.category !== category),
            })),
            updateItemCount: (id, category, size, color, count) => set((state) => ({
                basket: state.basket.map(item => item.id === id && item.category === category && item.size === size && item.color === color ? { ...item, count } : item),
            })),

        }),
        {
            name: 'basket-storage',
            getStorage: () => localStorage,
        }
    )
   );


