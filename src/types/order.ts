interface Address {
    number: string,
    street: string,
    city: string,
    country: string,
}

interface Product {
    id: string;
    sku: string;
    title: string;
    quantity: number;
    category: string;
    price: number;
}

interface Ordertype {
    orderReference: string,
    address: Address,
    products: Array<Product | null>
}

export { Ordertype, Product, Address }