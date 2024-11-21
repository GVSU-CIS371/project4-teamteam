import { defineStore } from "pinia";
import { Product, ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

// function to be used by the filter function
function filterForCategory(item: ProductDoc, category: string) {
    return item.data.category == category
}
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
        },

        filterByCategory(category: string) {
            // string because this is the category we're filtering based off of.
            this.products = this.products.filter((product) => filterForCategory(product, category))
        }
    }
  // your answer
});
