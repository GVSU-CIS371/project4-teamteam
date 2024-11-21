<template>
<v-card class="pa-5 ma-1" max-height="400" max-width="300">

    <v-card-item :title="product.name">
        <template v-slot:subtitle>
            <template v-for="i in product.rating" :key="i">
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

// your answer
</script>
