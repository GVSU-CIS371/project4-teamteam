<template>
<v-card class="pa-5 ma-1" >

    <v-card-item :title="product.name">
        <template v-slot:subtitle>
            <!-- need to round otherwise it breaks application since can't loop over a decimal number. -->
            <template v-for="i in Math.round(product.rating)">
                <v-icon color="yellow" icon="mdi-star"></v-icon>
            </template>

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
