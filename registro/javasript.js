document.querySelector("#registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const password = document.querySelector("#password").value;

    try {
        const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo_electronico: correo, password }),
    });
    
    if (response.ok) {
        const data = await response.text();
        alert(data); // "Usuario registrado con éxito"
    } else {
        alert("Error al registrar usuario.");
    }
    } catch (err) {
        console.error("Error en la solicitud:", err);
    }
});
