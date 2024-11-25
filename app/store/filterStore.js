import {persist} from "zustand/middleware";
import {create} from "zustand";

export const filterStore = create(
    persist(
        (set) => ({
            filter: [],
            setFilter: (filter) => set({filter}),
        }),
        {
            name: "filter",
        }
    )
)