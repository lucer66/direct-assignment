<template>
    <div>
        <div class="product-list-child" v-for="item in products" :key="item?.id">
            <ProductItem class="prod-text" :product="item"></ProductItem>
            <button class="remove-button" v-if="item" @click="removeProduct(item.sku, orderReference)">remove
                product</button>
        </div>
        <button class="add-item-btn" @click="isOpen = !isOpen">add Item</button>
        <teleport to="body">
            <div class="modal" v-if="isOpen">
                <ProductPopup :orderReference="orderReference" @close="isOpen = false" @addProduct="addProduct" />
            </div>
        </teleport>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
import { Product } from '@/types/order';
import ProductItem from './ProductItem.vue';
import ProductPopup from './ProductPopup.vue'

export default defineComponent({
    name: 'ProductList',
    components: { ProductItem, ProductPopup },
    props: {
        products: {
            type: Object as PropType<Array<Product | null>>,
            required: true
        },
        orderReference: {
            type: String,
            required: true
        }
    },
    setup(props, { emit }) {
        const isOpen = ref(false)

        function removeProduct(sku: string, orderReference: string) {
            emit('removeProduct', sku, orderReference)
        }

        function addProduct(prod: Product, orderReference: string) {
            emit('addProduct', prod, orderReference)
        }
        return {
            addProduct,
            removeProduct,
            isOpen,
        }
    },

});
</script>

<style>
.product-list-child {
    width: 92%;
    margin: 15px;
    background-color: rgb(231, 231, 231);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.remove-button {
    margin: 8px;
    width: 110px;
}

.prod-text {
    margin: 0px 8px;
}

.add-item-btn {
    margin: 0 0 10px;
}

.root {
    position: relative;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal>div {
    background-color: white;
    padding: 50px;
    border-radius: 10px;
}
</style>
