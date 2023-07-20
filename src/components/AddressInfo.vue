<template>
    <h2>{{ addressdata.country }}, {{ addressdata.city }} - {{ addressdata.street }} {{ addressdata.number }}</h2>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Address } from '@/types/order';

export default defineComponent({
    name: 'AddressInfo',
    props: {
        addressdata: {
            type: Object as PropType<Address>,
            required: true
        }
    }
});
</script>

<style scoped></style>
