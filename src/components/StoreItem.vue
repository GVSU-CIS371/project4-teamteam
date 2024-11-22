<template>
<v-card class="pa-5 ma-1" >

    <v-card-item :title="product.name">
        <template v-slot:subtitle>
            <!-- need to round otherwise it breaks application since can't loop over a decimal number. -->

            <template v-for="i in Math.round(product.rating)">
                <v-icon color="yellow" icon="mdi-star"></v-icon>
            </template>
            <!--  BELOW IS THE LINE OF CODE FOR EMPTY STAR ICON IF WANT TO IMPLEMENT LATER.-->
            <!-- <v-icon color="yellow" icon="mdi-star-outline"></v-icon> -->
            <v-icon color="green" icon="mdi-currency-usd"></v-icon>{{ product.price }}
            <v-icon color="blue" icon="mdi-pound"></v-icon> {{ product.stock }}


        </template>
    </v-card-item>

</v-card>

</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { Product } from '../types/product';
const product = defineProps<Product>()
console.log('Rating:', product.rating);
// your answer
</script>
