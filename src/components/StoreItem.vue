<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 16 : 2" v-bind="props"
            class="pa-5 mt-4 ml-4 mr-4" height="400">
            <v-card-item class="mx-auto" :title="product.name"></v-card-item>
            <v-row class="flex-column" justify="center" align="center">
                <v-row>
                    <v-col cols="12">
                        <!-- need to round otherwise it breaks application since can't loop over a decimal number. -->
                        <v-icon v-for="i in Math.round(product.rating)" :key="i" color="yellow"
                            icon="mdi-star"></v-icon>
                        <v-icon v-for="i in (5 - Math.round(product.rating))" :key="i" color="yellow"
                            icon="mdi-star-outline"></v-icon>
                        <v-icon color="green" icon="mdi-currency-usd"></v-icon>{{ product.price }}
                        <v-icon color="blue" icon="mdi-pound"></v-icon> {{ product.stock }}

                    </v-col>
                </v-row>
                <img :src="product.image" alt="image of the item being displayed" height="190" width="150">
                <p class="ma-2 pa-2" color="black">{{ product.description }}</p>
            </v-row>
        </v-card>
    </v-hover>

</template>

<script lang="ts" setup>

import { Product } from '../types/product';
const product = defineProps<Product>()
// your answer
</script>
