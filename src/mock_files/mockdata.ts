import { Ordertype, Product } from '../types/order'
import { ref, onMounted } from 'vue'

const ORDER_LIST = ref<Ordertype[]>([
    {
        orderReference: 'AA-001',
        address: {
            number: '12',
            street: 'Bestaande Straat',
            city: 'Rotterdam',
            country: 'Nederland',
        },
        products: []
    },
    {
        orderReference: 'AA-002',
        address: {
            number: '42',
            street: 'Straatstreet',
            city: 'Rotterdam',
            country: 'Nederland',
        },
        products: []
    },
    {
        orderReference: 'AA-003',
        address: {
            number: '52',
            street: 'yepStraat',
            city: 'Rotterdam',
            country: 'Nederland',
        },
        products: []
    },
    {
        orderReference: 'AA-004',
        address: {
            number: '422',
            street: 'De straat',
            city: 'Rotterdam',
            country: 'Nederland',
        },
        products: []
    },
    {
        orderReference: 'AA-005',
        address: {
            number: '421',
            street: 'Een mooie straat',
            city: 'Rotterdam',
            country: 'Nederland',
        },
        products: []
    },
])

const PRODUCT_LIST: Product[] = [
    {
        id: '1',
        sku: 'SKU-001',
        title: 'Vishengel',
        quantity: 0,
        category: 'Hengels',
        price: 109.99,
    },
    {
        id: '2',
        sku: 'SKU-002',
        title: 'Rijst',
        quantity: 0,
        category: 'Samson',
        price: 144.99,
    },
    {
        id: '3',
        sku: 'SKU-003',
        title: 'Boot-007',
        quantity: 0,
        category: 'Bootjes',
        price: 1244.99,
    }
]

export { ORDER_LIST, PRODUCT_LIST }