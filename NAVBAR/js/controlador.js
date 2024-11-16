// Función para actualizar el idioma seleccionado
function setDropdownValue(abbreviation, flagUrl) {
    const button = document.getElementById('dropdownButton');
    button.innerHTML = `
      <span class="icp-nav-flag" style="background-image: url('${flagUrl}');"></span>
      <span>${abbreviation}</span>
    `;
  }
