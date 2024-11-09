// Создайте систему типов и интерфейсов для управления заказами в интернет-магазине.

// Создайте интерфейсы для:

//     - Product: товар с полями id (число), name (строка), price (число), и опциональным полем discount (число).
//     - Customer: клиент с полями id (число), name (строка), и email (строка).
//     - OrderItem: элемент заказа с полями product (тип Product), quantity (число).
//     - Order: заказ с полями id (число), customer (тип Customer), 
//       items (массив типа OrderItem), и опциональным полем status (литерал типа 'pending' | 'shipped' | 'delivered').
  
// Напишите функцию calculateTotal, которая принимает объект типа Order 
// и возвращает общую сумму заказа с учетом возможных скидок.

// Если у товара есть скидка, то она должна учитываться при расчете суммы.
// Сумма заказа вычисляется как сумма цен всех товаров, умноженная на количество каждого товара в заказе.

interface IProduct {
    id: number;
    name: string;
    price: number;
    discount?:number;
}

interface ICustomer {
    id: number;
    name: string;
    email: string;
}

interface IOrderItem  {
    product:IProduct;
    quantity: number;
}

interface IOrder {
    id: number;
    customer: ICustomer;
    items: IOrderItem[];
    status?: 'pending' | 'shipped' | 'delivered'
}
const customer: ICustomer = { id: 1, name: "Ivan Petrov", email: "ivan@example.com" };
const product1: IProduct = { id: 1, name: "Macbook Pro 2022", price: 2000, discount: 10 };
const product2: IProduct = { id: 2, name: "iPhone 14", price: 1000 };

const order: IOrder = {
    id: 1,
    customer: customer,
    items: [
        { product: product1, quantity: 1 },
        { product: product2, quantity: 2 },
    ],
    status: 'pending'
};

function calculateTotal(order: IOrder): number {
    return order.items.reduce((total, { product, quantity }) =>
        total + (product.price * (1 - (product.discount ?? 0) / 100)) * quantity
    , 0);
}

console.log(calculateTotal(order));