<template>
    <div class="popup-box">
        <div class="product-container" v-for="item in PRODUCT_LIST" :key="item.id">
            {{ item.title }}
            <button class="add-product-button" @click="addProduct(item, orderReference)">add Product</button>
        </div>
        <button class="close-btn" @click="$emit('close')">Close</button>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
import { PRODUCT_LIST } from '@/mock_files/mockdata';
import { Product } from '@/types/order';


export default defineComponent({
    name: 'ProductPopup',
    components: {},
    props: {
        orderReference: {
            type: String,
            required: true
        }
    },
    setup(props, { emit }) {

        function addProduct(prod: Product, orderReference: string) {
            emit('addProduct', prod, orderReference)
        }
        return {
            addProduct,
            PRODUCT_LIST
        }
    },

});
</script>


<style scoped>
.popup-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.product-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.add-product-button {
    margin: 0 10px;
}

.quantity-bar {
    width: 30px;
}

.close-btn {
    margin: 20px 0px 0px;
}
</style>
