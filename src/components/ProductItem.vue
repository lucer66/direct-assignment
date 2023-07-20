<template>
    <div v-if="product">
        <h2>{{ product.sku }} - {{ product.title }} - {{ product.quantity }}</h2>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent, mergeProps } from 'vue';
import { Product } from '@/types/order';

export default defineComponent({
    name: 'ProductItem',
    components: {},
    props: {
        product: {
            type: Object as PropType<Product | null>,
            required: true
        }
    },
    setup(props, { emit }) {

        function addProduct() {
            emit('child-child-event', 'Additional information')
        }

        return {
            addProduct
        }
    },

});
</script>

<style scoped></style>
