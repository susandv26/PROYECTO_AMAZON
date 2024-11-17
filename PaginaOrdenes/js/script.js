const orders = [
    { id: 1, product: "Producto 1", price: 29.99, date: "2023-10-01" },
    { id: 2, product: "Producto 2", price: 49.99, date: "2023-10-05" },
    { id: 3, product: "Producto 3", price: 19.99, date: "2023-10-10" },
];

function renderOrders() {
    const orderList = document.getElementById('order-list');
    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order';
        orderDiv.innerHTML = `
            <h3>Orden #${order.id}</h3>
            <p>Producto: ${order.product}</p>
            <p>Precio: $${order.price.toFixed(2)}</p>
            <p>Fecha: ${order.date}</p>
        `;
        orderList.appendChild(orderDiv);
    });
}

// Cargar las órdenes al iniciar
renderOrders();