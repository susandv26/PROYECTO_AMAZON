const products = [
    { id: 1, name: "Producto 1", price: 29.99 },
    { id: 2, name: "Producto 2", price: 49.99 },
    { id: 3, name: "Producto 3", price: 19.99 },
];

let cart = [];

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpiar la lista de artículos en el carrito
    let total = 0;

    products.forEach(product => {
        const quantityInput = document.getElementById(`quantity-${product.id}`);
        const quantity = parseInt(quantityInput.value);
        
        if (quantity > 0) {
            total += product.price * quantity;
            const li = document.createElement('li');
            li.textContent = `${product.name}: ${quantity} x $${product.price.toFixed(2)}`;
            cartItems.appendChild(li);
        }
    });

    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}

function proceedToCheckout() {
    updateCart(); // Actualizar el carrito antes de proceder al pago
    alert('Procediendo al pago...');
}

// Llamar a la función para actualizar el carrito al cargar la página
updateCart();