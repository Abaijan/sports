import {create} from "zustand";
import {persist} from "zustand/middleware";

export const localeStore = create(
   persist(
      (set) => ({
         locale: 'ru',
         setLocale: (locale) => set(() => ({ locale: locale })),
      }),
      {
         name: "locale-storage",
      }
   )
);