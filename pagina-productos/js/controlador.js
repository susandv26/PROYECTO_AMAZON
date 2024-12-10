
 /* const productos = [
    {
      titulo: "Roku Streaming Stick 4K | Portable Roku Streaming Device 4K/HDR/Dolby Vision, Roku Voice",
      descripcion: "10K+ bought in past month",
      rating: "&#9733;&#9733;&#9733;&#9733;&#9734; (82,872)",
      precioActual: "$34.00",
      precioAnterior: "$49.99",
      descuento: "-32%",
      fechaEntrega: "Thursday, Nov 21",
      imagen: "./img/product-1.jpg",
      link: "#",
    },
    {
      titulo: "Roku Express 4K+ | Roku Streaming Device 4K/HDR, Roku Voice Remote, Free & Live TV",
      descripcion: "10K+ bought in past month",
      rating: "&#9733;&#9733;&#9733;&#9733;&#9734; (86,249)",
      precioActual: "$28.87",
      precioAnterior: null, // Sin precio anterior
      descuento: "-28%",
      fechaEntrega: "Thursday, Nov 21",
      imagen: "./img/product-2.jpg",
      link: "#",
    },
    {
      titulo: "Certified Refurbished Fire TV Stick",
      descripcion: "5K+ bought in past month",
      rating: "&#9733;&#9733;&#9733;&#9733;&#9734; (2,087)",
      precioActual: "$24.99",
      precioAnterior: null,
      descuento: null,
      fechaEntrega: "Thursday, Nov 21",
      imagen: "./img/product-3.jpg",
      link: "#",
    },
    {
      titulo: "Certified Refurbished Fire TV Stick",
      descripcion: "5K+ bought in past month",
      rating: "&#9733;&#9733;&#9733;&#9733;&#9734; (2,087)",
      precioActual: "$24.99",
      precioAnterior: null,
      descuento: null,
      fechaEntrega: "Thursday, Nov 21",
      imagen: "./img/product-4.jpg",
      link: "#",
    },
    {
      titulo: "Certified Refurbished Fire TV Stick",
      descripcion: "5K+ bought in past month",
      rating: "&#9733;&#9733;&#9733;&#9733;&#9734; (2,087)",
      precioActual: "$24.99",
      precioAnterior: null,
      descuento: null,
      fechaEntrega: "Thursday, Nov 21",
      imagen: "./img/product-4.jpg",
      link: "#",
    },
    {
      titulo: "Certified Refurbished Fire TV Stick",
      descripcion: "5K+ bought in past month",
      rating: "&#9733;&#9733;&#9733;&#9733;&#9734; (2,087)",
      precioActual: "$24.99",
      precioAnterior: null,
      descuento: null,
      fechaEntrega: "Thursday, Nov 21",
      imagen: "./img/product-2.jpg",
      link: "#",
    },
    {
      titulo: "Certified Refurbished Fire TV Stick",
      descripcion: "5K+ bought in past month",
      rating: "&#9733;&#9733;&#9733;&#9733;&#9734; (2,087)",
      precioActual: "$24.99",
      precioAnterior: null,
      descuento: null,
      fechaEntrega: "Thursday, Nov 21",
      imagen: "./img/product-3.jpg",
      link: "#",
    },
    {
      titulo: "Certified Refurbished Fire TV Stick",
      descripcion: "5K+ bought in past month",
      rating: "&#9733;&#9733;&#9733;&#9733;&#9734; (2,087)",
      precioActual: "$24.99",
      precioAnterior: null,
      descuento: null,
      fechaEntrega: "Thursday, Nov 21",
      imagen: "./img/product-3.jpg",
      link: "#",
    },
    {
      titulo: "Certified Refurbished Fire TV Stick",
      descripcion: "5K+ bought in past month",
      rating: "&#9733;&#9733;&#9733;&#9733;&#9734; (2,087)",
      precioActual: "$24.99",
      precioAnterior: null,
      descuento: null,
      fechaEntrega: "Thursday, Nov 21",
      imagen: "./img/product-3.jpg",
      link: "#",
    },
    {
      titulo: "Certified Refurbished Fire TV Stick",
      descripcion: "5K+ bought in past month",
      rating: "&#9733;&#9733;&#9733;&#9733;&#9734; (2,087)",
      precioActual: "$24.99",
      precioAnterior: null,
      descuento: null,
      fechaEntrega: "Thursday, Nov 21",
      imagen: "./img/product-3.jpg",
      link: "#",
    },
  

    // Más productos...
  ];*/

  /*reenderizacion de cards*/

  
 
// Función para actualizar el idioma seleccionado
function setDropdownValue(abbreviation, flagUrl) {
  const button = document.getElementById('dropdownButton');
  button.innerHTML = `
    <span class="icp-nav-flag" style="background-image: url('${flagUrl}');"></span>
    <span>${abbreviation}</span>
  `;
}

// Función para obtener productos desde el backend
async function fetchProductos() {
  try {
      const response = await fetch("http://localhost:3000/api/productos");
      const data = await response.json();

      if (data.productos) {
          renderizarTarjetas(data.productos);
      } else {
          console.error("No se encontraron productos en el backend.");
      }
  } catch (error) {
      console.error("Error al obtener productos:", error);
  }
}

// Función para renderizar las tarjetas de productos
function renderizarTarjetas(productos) {
  const contenedor = document.querySelector(".container .row");
  if (!contenedor) {
      console.error("El contenedor no fue encontrado.");
      return;
  }

  // Limpiar el contenedor antes de renderizar
  contenedor.innerHTML = "";

  // Generar las tarjetas dinámicamente
  productos.forEach((producto) => {
      const tarjeta = `
          <div class="col">
              <div class="card h-100">
                  <a href="#">
                      <img src="${producto.imagen}" class="card-img-top mt-3" alt="${producto.titulo}">
                  </a>
                  <div class="card-body d-flex flex-column">
                      <h6 class="card-title">${producto.titulo}</h6>
                      <p class="small text-muted">${producto.descripcion}</p>
                      <p class="text-warning small">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                      ${producto.descuento ? `<p class="text-danger mb-0">${producto.descuento}% ${producto.precioactual}</p>` : `<p class="text-primary mb-0">${producto.precioActual}</p>`}
                      ${producto.precioanterior ? `<p class="small text-muted">List Price: ${producto.precioanterior}</p>` : ""}
                      <p class="small">Get it as soon as <strong>Thursday, Nov 21</strong></p>
                      <div class="mt-auto">
                          <a href="#" class="btn btn-warning w-100 boton-carrito"onclick = 'agregaralcarrito(${producto.id_producto},${producto.precioactual})'>Agregar al carrito</a>
                      </div>
                  </div>
              </div>
          </div>
      `;
      contenedor.innerHTML += tarjeta;
  });
}