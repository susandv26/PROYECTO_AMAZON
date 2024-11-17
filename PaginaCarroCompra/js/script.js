const products = [
    { id: 1, name: "Producto 1", price: 29.99 },
    { id: 2, name: "Producto 2", price: 49.99 },
    { id: 3, name: "Producto 3", price: 19.99 },
];

let cart = [];

function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}

// Cargar los productos al iniciar
renderProducts();