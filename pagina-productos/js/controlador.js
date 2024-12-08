// Función para actualizar el idioma seleccionado
function setDropdownValue(abbreviation, flagUrl) {
    const button = document.getElementById('dropdownButton');
    button.innerHTML = `
      <span class="icp-nav-flag" style="background-image: url('${flagUrl}');"></span>
      <span>${abbreviation}</span>
    `;
  }

  const productos = [
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
  ];

  /*reenderizacion de cards*/

  
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
            <a href="${producto.link}">
              <img src="${producto.imagen}" class="card-img-top mt-3" alt="${producto.titulo}">
            </a>
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">${producto.titulo}</h6>
              <p class="small text-muted">${producto.descripcion}</p>
              <p class="text-warning small">${producto.rating}</p>
              ${
                producto.descuento
                  ? `<p class="text-danger mb-0">${producto.descuento} ${producto.precioActual}</p>`
                  : `<p class="text-primary mb-0">${producto.precioActual}</p>`
              }
              ${
                producto.precioAnterior
                  ? `<p class="small text-muted">List Price: ${producto.precioAnterior}</p>`
                  : ""
              }
              <p class="small">Get it as soon as <strong>${producto.fechaEntrega}</strong></p>
              <div class="mt-auto">
                <a href="#" class="btn btn-warning w-100 boton-carrito">Agregar al carrito</a>
              </div>
            </div>
          </div>
        </div>
      `;
      contenedor.innerHTML += tarjeta;
    });
  }
  
  // Llamar a la función para renderizar las tarjetas
  renderizarTarjetas(productos);


  /*navegador filtros dinamico*/

  // Datos dinámicos de las pestañas
// Datos dinámicos
const tabsData = [
  { id: "for-you", label: "For you", active: true },
  { id: "deals", label: "Deals", active: false },
  { id: "most-gifted", label: "Most gifted", active: false },
  { id: "bought-together", label: "Bought together", active: false },
];

const filtersData = [
  {
    id: "priceDropdown",
    label: "Price ($)",
    options: [
      { value: "low-to-high", label: "Low to High" },
      { value: "high-to-low", label: "High to Low" },
    ],
  },
  {
    id: "ratingDropdown",
    label: '<span class="text-warning">&#9733;&#9733;&#9733;&#9733;&#9734;</span> & Up',
    options: [
      { value: "4-and-up", label: "4 & Up" },
      { value: "3-and-up", label: "3 & Up" },
      { value: "2-and-up", label: "2 & Up" },
    ],
  },
];

// Referencias al contenedor
const tabsContainer = document.getElementById("pestaña-dinamica");
const filtersContainer = document.getElementById("filtros");

// Generar pestañas dinámicamente
tabsData.forEach((tab) => {
  const tabElement = document.createElement("li");
  tabElement.classList.add("nav-item");
  tabElement.innerHTML = `
    <a class="nav-link ${tab.active ? "active" : ""}" 
        id="${tab.id}-tab" 
        data-bs-toggle="tab" 
        href="#${tab.id}" 
        role="tab" 
        aria-controls="${tab.id}" 
        aria-selected="${tab.active}">
      ${tab.label}
    </a>`;
  tabsContainer.appendChild(tabElement);
});

// Generar filtros dinámicamente
filtersData.forEach((filtros) => {
  const dropdownElement = document.createElement("div");
  dropdownElement.classList.add("dropdown", "me-2");
  dropdownElement.innerHTML = `
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="${filtros.id}" data-bs-toggle="dropdown" aria-expanded="false">
      ${filtros.label}
    </button>
    <ul class="dropdown-menu" aria-labelledby="${filtros.id}">
      ${filtros.options
        .map((option) => `<li><a class="dropdown-item" href="#">${option.label}</a></li>`)
        .join("")}
    </ul>`;
  filtersContainer.appendChild(dropdownElement);
});




  