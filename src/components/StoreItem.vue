<template>
<v-card class="pa-5 ma-1" height="400" >
    <v-card-item class="ma-1" :title="product.name"></v-card-item>
            <v-row class="flex-column" justify="center" align="center">
                <v-row>
                    <v-col cols="12">
            <!-- need to round otherwise it breaks application since can't loop over a decimal number. -->
                        <v-icon v-for="i in Math.round(product.rating)" :key="i" color="yellow" icon="mdi-star"></v-icon>
                        <v-icon color="green" icon="mdi-currency-usd"></v-icon>{{ product.price }}
                        <v-icon color="blue" icon="mdi-pound"></v-icon> {{ product.stock }}

                    </v-col> 
                    <!--  BELOW IS THE LINE OF CODE FOR EMPTY STAR ICON IF WANT TO IMPLEMENT LATER.-->
                    <!-- <v-icon color="yellow" icon="mdi-star-outline"></v-icon> -->
                </v-row>
                <img :src="product.image" alt="image of the item being displayed" height="190" width="150">
                <p class="ma-2 pa-2" color="black">{{ product.description }}</p> 
            </v-row>


</v-card>

</template>

<script lang="ts" setup>

import { Product } from '../types/product';
const product = defineProps<Product>()
// your answer
</script>
