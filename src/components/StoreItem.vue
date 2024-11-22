<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 16 : 1" v-bind="props" class="pa-5"
            height="500">
            <v-card-title><b>{{ product.name }}</b></v-card-title>
            <!-- need to round otherwise it breaks application since can't loop over a decimal number. -->
            <v-icon v-for="i in Math.round(product.rating)" :key="i" color="yellow" icon="mdi-star"></v-icon>
            <v-icon v-for="i in (5 - Math.round(product.rating))" :key="i" color="yellow"
                icon="mdi-star-outline"></v-icon>
            <v-icon color="green" icon="mdi-currency-usd"></v-icon>{{ product.price }}
            <v-icon color="blue" icon="mdi-pound"></v-icon> {{ product.stock }}
            <v-img :src="product.image" alt="image of the item being displayed" height="220px"></v-img>
            <p class="ma-2 pa-2" color="black">{{ product.description }}</p>
        </v-card>
    </v-hover>

</template>

<script lang="ts" setup>

import { Product } from '../types/product';
const product = defineProps<Product>()
// your answer
</script>
