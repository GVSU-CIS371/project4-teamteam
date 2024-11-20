import { defineStore } from "pinia";
import { Product, ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
    // Setting up state for the variable we're using
    state: () => {
        const prods: ProductDoc[] = []
        return {products: prods};
    },

    // Setting up our actions.
    actions: {
        init() {
            // Assigning our products to be the initial products list.
            this.products = initProducts;
            console.log("In init funciton")
        }
    }
  // your answer
});
