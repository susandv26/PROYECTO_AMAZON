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


//funcion obtener el producto
async function cargarCarrito() {
    try {
        const response = await fetch("http://localhost:3000/api/cart/1"); // Cambiar por el ID del usuario
        const data = await response.json();

        if (data.carrito) {
            const cartItems = document.getElementById("cart-items");
            const totalPrice = document.getElementById("total-price");

            // Limpiar el carrito
            cartItems.innerHTML = "";
            let total = 0;

            // Renderizar productos
            data.carrito.forEach((producto) => {
                const item = document.createElement("li");
                item.textContent = `${producto.nombre_producto} - $${producto.precio_unitario} x ${producto.cantidad}`;
                cartItems.appendChild(item);
                total += producto.precio_unitario * producto.cantidad;
            });

            // Actualizar el total
            totalPrice.textContent = `Total: $${total.toFixed(2)}`;
        } else {
            console.error("El carrito está vacío.");
        }
    } catch (error) {
        console.error("Error al cargar el carrito:", error);
    }
}

// Cargar el carrito al cargar la página
window.onload = cargarCarrito;

// Llamar a la función para actualizar el carrito al cargar la página
updateCart();