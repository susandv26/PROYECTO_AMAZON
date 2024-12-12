/*const products = [
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
  */

// Función para obtener el carrito del backend
async function fetchCarrito(id_usuario) {
    try {
        const response = await fetch(`http://localhost:3000/api/cart/${id_usuario}`); // Endpoint del carrito
        if (response.ok) {
            const data = await response.json(); // Obtener datos en formato JSON
            renderizarCarrito(data.carrito); // Renderizar productos en el carrito
        } else {
            console.error("Error al obtener el carrito:", response.statusText);
            mostrarMensajeError("No se pudo cargar el carrito. Inténtalo más tarde.");
        }
    } catch (error) {
        console.error("Error al obtener el carrito:", error);
        mostrarMensajeError("Error al conectar con el servidor.");
    }
}

// Función para renderizar los productos del carrito
function renderizarCarrito(productos) {
    const contenedorCarrito = document.querySelector("#carrito-container"); // Selecciona el contenedor del carrito
    const totalContainer = document.querySelector("#carrito-total"); // Contenedor para el total

    if (!contenedorCarrito || !totalContainer) {
        console.error("No se encontró el contenedor del carrito o el total.");
        return;
    }

    // Limpiar el contenido previo del contenedor
    contenedorCarrito.innerHTML = "";
    totalContainer.innerHTML = "";

    // Si el carrito está vacío
    if (!productos || productos.length === 0) {
        contenedorCarrito.innerHTML = "<p>Tu carrito está vacío. ¡Añade productos!</p>";
        totalContainer.innerHTML = ""; // Limpia el contenedor del total
        return;
    }

    // Renderizar cada producto en el carrito
    let totalGlobal = 0;
    productos.forEach((producto) => {
        const tarjetaHTML = `
           <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre_producto}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre_producto}</h5>
                            <p class="card-text">Precio unitario: $${producto.precio_unitario.toFixed(2)}</p>
                            <p class="card-text">Cantidad: ${producto.cantidad}</p>
                            <p class="card-text">Total: $${producto.total.toFixed(2)}</p>
                            <button class="btn btn-danger" onclick="eliminarProducto(${producto.id_carrito_product})">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contenedorCarrito.innerHTML += tarjetaHTML;

        // Calcular el total global
        totalGlobal += producto.total;
    });

    const totalHTML = `
       <div class="card p-3">
            <h4>Total del carrito</h4>
            <h5>$${totalGlobal.toFixed(2)}</h5>
            <button id="btn-proceder-pago" class="btn btn-success w-100">Proceder al Pago</button>
        </div>
    `;
    totalContainer.innerHTML = totalHTML;

// Función para proceder al pago
document.getElementById("btn-proceder-pago").addEventListener("click", () => {
    if (productos.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de proceder al pago.");
        return;
    }

    // Redirige a la página de pagos
    window.location.href = "/FRONTEND/metodo_pago/pagos.html"; // Asegúrate de que este archivo exista
});

}

// Función para eliminar un producto del carrito
async function eliminarProducto(id_carrito_product) {
    try {
        const response = await fetch(`http://localhost:3000/api/cart/${id_carrito_product}`, {
            method: "DELETE",
        });

        if (response.ok) {
            alert("Producto eliminado del carrito con éxito.");
            const id_usuario = obtenerIdUsuario();
            fetchCarrito(id_usuario);
        } else {
            const errorMsg = await response.json();
            console.error("Error al eliminar el producto:", errorMsg);
            mostrarMensajeError("No se pudo eliminar el producto. Inténtalo más tarde.");
        }
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
    }
}

// Función para mostrar mensajes de error
function mostrarMensajeError(mensaje) {
    const contenedorCarrito = document.querySelector("#carrito-container");
    contenedorCarrito.innerHTML = `<p class="error">${mensaje}</p>`;
}

// Función para obtener el ID del usuario actual
function obtenerIdUsuario() {
    return 2; // Cambiar por la lógica adecuada
}

// Inicializar la página del carrito al cargar
document.addEventListener("DOMContentLoaded", () => {
    const id_usuario = obtenerIdUsuario();
    fetchCarrito(id_usuario);
});
