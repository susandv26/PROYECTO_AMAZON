// Función para actualizar el idioma seleccionado
function setDropdownValue(abbreviation, flagUrl) {
    const button = document.getElementById('dropdownButton');
    button.innerHTML = `
      <span class="icp-nav-flag" style="background-image: url('${flagUrl}');"></span>
      <span>${abbreviation}</span>
    `;
  }


  /**/
// Datos de las imágenes del carrusel con enlaces
const productos1Images = [
  [
    { src: './img/decorations.jpg', link: 'https://example.com/product1' },
    { src: './img/decorations.jpg', link: 'https://example.com/product2' },
    { src: './img/decorations.jpg', link: 'https://example.com/product3' },
    { src: './img/decorations.jpg', link: 'https://example.com/product4' },
    { src: './img/decorations.jpg', link: 'https://example.com/product5' },
    { src: './img/decorations.jpg', link: 'https://example.com/product6' }
  ],
  [
    { src: './img/decorations.jpg', link: 'https://example.com/product7' },
    { src: './img/decorations.jpg', link: 'https://example.com/product8' },
    { src: './img/decorations.jpg', link: 'https://example.com/product9' },
    { src: './img/decorations.jpg', link: 'https://example.com/product10' },
    { src: './img/decorations.jpg', link: 'https://example.com/product11' },
    { src: './img/decorations.jpg', link: 'https://example.com/product12' }
  ]
];

// Función para generar el contenido del carrusel
function renderCarouselItems(images) {
  const carouselContent = document.getElementById('carouselContent');
  if (!carouselContent) {
    console.error("Carousel content container not found.");
    return;
  }

  // Limpiar contenido anterior
  carouselContent.innerHTML = '';

  // Generar diapositivas del carrusel
  images.forEach((group, index) => {
    const isActive = index === 0 ? 'active' : ''; // La primera diapositiva debe ser activa
    const itemDiv = document.createElement('div');
    itemDiv.className = `carousel-item ${isActive}`;

    // Crear imágenes dentro de la diapositiva con enlaces
    const imageGroup = group
      .map(
        (item) => `
        <div class="text-center">
          <a href="${item.link}" target="_blank">
            <img src="${item.src}" class="img-fluid" alt="Product Image">
          </a>
        </div>
      `
      )
      .join('');

    // Insertar contenido dinámico en el contenedor del carrusel
    itemDiv.innerHTML = `<div class="d-flex justify-content-around">${imageGroup}</div>`;
    carouselContent.appendChild(itemDiv);
  });
}

// Llamar a la función para renderizar el carrusel
renderCarouselItems(productos1Images);




// Datos de las imágenes del carrusel con enlaces
const productos2Images = [
  [
    { src: './img/img1-secc3.jpg', link: 'https://example.com/product1' },
    { src: './img/img2-secc3.jpg', link: 'https://example.com/product2' },
    { src: './img/img3-secc3.jpg', link: 'https://example.com/product3' },
    { src: './img/img4-secc3.jpg', link: 'https://example.com/product4' },
    { src: './img/img5-secc3.jpg', link: 'https://example.com/product5' },
    { src: './img/img6-secc3.jpg', link: 'https://example.com/product6' }
  ],
  [
    { src: './img/decorations.jpg', link: 'https://example.com/deco1' },
    { src: './img/decorations.jpg', link: 'https://example.com/deco2' },
    { src: './img/decorations.jpg', link: 'https://example.com/deco3' },
    { src: './img/decorations.jpg', link: 'https://example.com/deco4' },
    { src: './img/decorations.jpg', link: 'https://example.com/deco5' },
    { src: './img/decorations.jpg', link: 'https://example.com/deco6' }
  ]
];

// Función para generar el contenido del carrusel
function renderProductosCarousel(images) {
  const carouselProductosContent = document.getElementById('carouselProductosContent');
  carouselProductosContent.innerHTML = ''; // Limpiar contenido anterior

  images.forEach((group, index) => {
    const isActive = index === 0 ? 'active' : ''; // La primera diapositiva es activa
    const itemDiv = document.createElement('div');
    itemDiv.className = `carousel-item ${isActive}`;

    // Crear el grupo de imágenes con enlaces
    const imageGroup = group
      .map(
        (item) => `
        <div class="text-center">
          <a href="${item.link}" target="_blank">
            <img src="${item.src}" class="img-fluid" alt="Product Image">
          </a>
        </div>
      `
      )
      .join('');

    // Insertar el grupo de imágenes en la diapositiva
    itemDiv.innerHTML = `<div class="d-flex justify-content-around">${imageGroup}</div>`;
    carouselProductosContent.appendChild(itemDiv);
  });
}

// Renderizar el carrusel
renderProductosCarousel(productos2Images);
