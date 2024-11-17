// Función para alternar la visibilidad del contenido
function toggleHelp() {
    var helpContent = document.getElementById('help-content');
    if (helpContent.style.display === 'none') {
        helpContent.style.display = 'block';
    } else {
        helpContent.style.display = 'none';
    }
}







// Lista de países
const paises = [
    'Afganistán', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Antigua y Barbuda',
    'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaiyán', 'Bahamas', 'Bangladés', 'Barbados', 'Baréin', 'Bélgica',
    'Belice', 'Benín', 'Bielorrusia', 'Bolivia', 'Bosnia y Herzegovina', 'Botsuana',
    'Brasil', 'Brunéi', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Bután',
    'Cabo Verde', 'Camboya', 'Camerún', 'Canadá', 'Catar', 'Chad', 'Chile', 'China',
    'Chipre', 'Colombia', 'Comoras', 'Corea del Norte', 'Corea del Sur', 
    'Costa de Marfil', 'Costa Rica', 'Croacia', 'Cuba', 'Dinamarca', 'Dominica',
    'Ecuador', 'Egipto', 'El Salvador', 'Emiratos Árabes Unidos', 'Eritrea',
    'Eslovaquia', 'Eslovenia', 'España', 'Estados Unidos', 'Estonia', 'Etiopía',
    'Filipinas', 'Finlandia', 'Francia', 'Gabón', 'Gambia', 'Georgia', 'Ghana',
    'Grecia', 'Guatemala', 'Guinea', 'Guinea-Bisáu', 'Guyana', 'Haití', 'Honduras',
    'Hungría', 'India', 'Indonesia', 'Irak', 'Irán', 'Irlanda', 'Islandia', 'Israel',
    'Italia', 'Jamaica', 'Japón', 'Jordania', 'Kazajistán', 'Kenia', 'Kirguistán',
    'Kuwait', 'Laos', 'Letonia', 'Líbano', 'Liberia', 'Libia', 'Liechtenstein',
    'Lituania', 'Luxemburgo', 'Madagascar', 'Malasia', 'Malaui', 'Maldivas',
    'Malí', 'Malta', 'Marruecos', 'Mauricio', 'México', 'Moldavia', 'Mónaco',
    'Mongolia', 'Montenegro', 'Mozambique', 'Namibia', 'Nepal', 'Nicaragua',
    'Níger', 'Nigeria', 'Noruega', 'Nueva Zelanda', 'Omán', 'Países Bajos',
    'Pakistán', 'Panamá', 'Papúa Nueva Guinea', 'Paraguay', 'Perú', 'Polonia',
    'Portugal', 'Reino Unido', 'República Checa', 'República Dominicana', 'Rumania',
    'Rusia', 'San Marino', 'Senegal', 'Serbia', 'Seychelles', 'Singapur', 'Siria',
    'Sri Lanka', 'Sudáfrica', 'Suecia', 'Suiza', 'Tailandia', 'Tanzania', 'Túnez',
    'Turquía', 'Ucrania', 'Uganda', 'Uruguay', 'Venezuela', 'Vietnam', 'Yemen',
    'Zambia', 'Zimbabue'
];

// Llenar el menú desplegable
const selectPais = document.getElementById('pais');
paises.forEach(pais => {
    const option = document.createElement('option');
    option.value = pais;
    option.textContent = pais;
    selectPais.appendChild(option);
});
// Llenar el menú desplegable aqui termina