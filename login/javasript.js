document.querySelector('#loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); //evita que la pagina se recargue
   // window.location.href = '/FRONTEND/landing_page/landing_page.html';
    const correo = document.querySelector('#correo').value;
    const password = document.querySelector('#password').value;

    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo_electronico: correo, password }),
    });

    if (response.ok) {
        const data = await response.json();

        // Guardar los datos del usuario en localStorage
        localStorage.setItem('user', JSON.stringify(data.user)); // Incluye id, email y name

        localStorage.setItem('token', data.token);
        alert('Inicio de sesión exitoso');
        window.location.href = '/FRONTEND/landing_page/landing_page.html'; // Redirigir al landing page
    } else {
        alert('Credenciales incorrectas');
    }
});

function registroRederigir(){
    window.location.href = '../registro/registro.html';
}
