<template>
    <div class="order-block">
        <div class="order-header">
            <h1 class="order-reference">{{ order.orderReference }}</h1>
            <button @click="removeOrder(order.orderReference)">remove order</button>
        </div>

        <div class="content-container">
            <div class="address-info">
                <AddressInfo :addressdata="order.address" />
            </div>
            <div class="product-list">
                <ProductList :products="order.products" :orderReference="order.orderReference" @addProduct="addProduct"
                    @removeProduct="removeProduct" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent, mergeProps } from 'vue';
import { Ordertype, Product } from '../types/order'
import AddressInfo from './AddressInfo.vue';
import ProductList from './ProductList.vue';

export default defineComponent({
    name: 'OrderItem',
    components: { AddressInfo, ProductList },

    props: {
        order: {
            type: Object as PropType<Ordertype>,
            required: true
        }
    },
    setup(props, { emit }) {
        function addProduct(prod: Product, orderReference: string) {
            emit('addProduct', prod, orderReference)
        }

        function removeProduct(sku: string, orderReference: string) {
            emit('removeProduct', sku, orderReference)
        }

        function removeOrder(orderReference: string) {
            emit('removeOrder', orderReference)
        }

        return {
            addProduct,
            removeProduct,
            removeOrder
        }
    },

});
</script>

<style scoped>
.order-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.order-reference {
    margin-right: 10px;
}

.order-block {
    border-radius: 25px;
    max-width: 50vw;
    padding: 0px 20px 0px 20px;
    margin: 40px auto;
    background-color: white;
}

.content-container {
    display: flex;
    flex-direction: column;
}


@media (max-width: 1000px) {
    .order-block {
        max-width: 60vw;
        margin: 30px auto;
    }

}

@media (max-width: 600px) {
    .order-block {
        max-width: 70vw;
        margin: 20px auto;
    }

}
</style>
