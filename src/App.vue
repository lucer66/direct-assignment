<template>
  <input class="search-bar" type="text" placeholder="search..." v-model="search">

  <div v-for="item in filteredPosts" :key="item.orderReference">
    <OrderItem v-bind:order="item" @removeOrder="removeOrder" @addProduct="addProduct" @removeProduct="removeProduct" />
  </div>
  <div v-if="filteredPosts.length == 0">
    <h1>No results</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { ref } from 'vue'
import OrderItem from './components/OrderItem.vue';
import { Ordertype, Product } from './types/order';
import { PRODUCT_LIST, ORDER_LIST } from './mock_files/mockdata';

export default defineComponent({
  name: 'App',
  components: {
    OrderItem
  },
  setup() {
    const search = ref('')

    const filteredPosts = computed(() => {
      const searchTerm = search.value.toLowerCase().trim();

      return ORDER_LIST.value.filter((order) => {
        const orderRefIncludes = order.orderReference.toLowerCase().includes(searchTerm);
        const addressIncludes = Object.values(order.address).some((val) => val.toLowerCase().includes(searchTerm));
        const productsInclude = order.products.some((product) =>
          Object.values(product as Product).some((val) => String(val).toLowerCase().includes(searchTerm))
        );

        return orderRefIncludes || addressIncludes || productsInclude;
      });
    });

    const removeOrder = (orderReference: string) => {
      const index = ORDER_LIST.value.findIndex(item => item.orderReference === orderReference)
      if (index !== -1) {
        ORDER_LIST.value.splice(index, 1);
      }
    };

    const addProduct = (product: Product, orderReference: string) => {
      const order = ORDER_LIST.value.find((order) => order.orderReference === orderReference);
      if (order) {
        const existingProductIndex = order.products.findIndex((p) => p?.sku === product.sku);
        if (existingProductIndex !== -1) {
          const existingProduct = order.products[existingProductIndex];
          if (existingProduct) {
            existingProduct.quantity++;
          }
        } else {
          const productCopy = { ...product, quantity: 1 }
          order.products.push(productCopy);
        }
      }
    };

    const removeProduct = (product: Product, orderReference: string) => {
      const orderIndex = ORDER_LIST.value.findIndex((order) => order.orderReference === orderReference);

      if (orderIndex !== -1) {
        const order = ORDER_LIST.value[orderIndex];
        const productIndex = order.products.findIndex(p => p)

        if (productIndex !== -1) {
          const productToRemove = order.products[productIndex];
          if (productToRemove) {
            productToRemove.quantity = 0;
            order.products.splice(productIndex, 1);
          }
        }
      }
    };

    return {
      removeOrder,
      removeProduct,
      addProduct,
      filteredPosts,
      search,
      ORDER_LIST,
      PRODUCT_LIST
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.search-bar {
  width: 180px;
}

body {
  background-color: rgb(212, 245, 255);
}

@media (max-width: 1000px) {
  #app {
    margin-top: 40px;
    font-size: 14px;
  }
}

@media (max-width: 800px) {
  #app {
    font-size: 12px;
  }
}

@media (max-width: 800px) {
  #app {
    font-size: 11px;
  }
}

@media (max-width: 600px) {

  #app {
    margin-top: 20px;
    font-size: 10px;
  }

  .search-bar {
    width: 50%;
  }

}
</style>
