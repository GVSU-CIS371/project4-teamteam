<template>
  <v-app>
    <v-app-bar class="bg-blue-darken-4">
      <v-toolbar-title>My Online Store</v-toolbar-title>
      <v-btn class="mx-5" v-for="link in links" :key="link.text" :to="link.to">
        <v-icon>{{ link.icon }}</v-icon>
        {{ link.text }}
      </v-btn>
    </v-app-bar>
    <v-main class="bg-blue-lighten-5">
        <!-- v-for loop to display a card for each item in the store  -->
        <template v-for="item in productStore.products" :key="item.id">
        <store-item :name="item.data.name" 
        :description="item.data.description" 
        :price="item.data.price" 
        :rating="item.data.rating" 
        :stock="item.data.stock"
        :image="item.data.image"
        :category="item.data.category" >
        </store-item>

        </template>
      <router-view v-slot="{ Component }">
        <transition name="shrink-explode">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <v-footer color="primary" app>
      © 2023 My Online Store. All rights reserved.
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import StoreItem from "./components/StoreItem.vue";
import { compile, ref } from "vue";
// Importing product Pinia store we created. 
import { useProductStore } from "./stores/ProductStore";
// Assigning product store to our variable 
const productStore = useProductStore();
// Calling the function to populating the store with items.
productStore.init()
console.log(productStore.products);
const links = ref([
  { text: "Home", to: "/", icon: "mdi-home" },
  { text: "Electronics", to: "/electronics", icon: "mdi-laptop" },
  { text: "Clothing", to: "/clothing", icon: "mdi-tshirt-crew" },
  { text: "Groceries", to: "/groceries", icon: "mdi-cart" },
  { text: "Best Seller", to: "/bestseller", icon: "mdi-cash-register" },
]);
</script>
