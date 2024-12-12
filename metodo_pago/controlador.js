document.addEventListener("DOMContentLoaded", () => {
    const total = localStorage.getItem("totalCarrito") || "0.00";
    document.getElementById("total").value = total;

    document.getElementById("pago-form").addEventListener("submit", async (event) => {
        event.preventDefault();

        const tipo_tarjeta = document.getElementById("tipo_tarjeta").value;
        const titular = document.getElementById("titular").value;
        const numero_tarjeta = document.getElementById("numero_tarjeta").value;
        const fecha_vencimiento = document.getElementById("fecha_vencimiento").value;
        const cvv = document.getElementById("cvv").value;
        const total = document.getElementById("total").value;
        const direccion_envio = document.getElementById("direccion_envio").value;
        const id_usuario = 2; // Cambiar por el ID del usuario actual

        try {
            const response = await fetch("http://localhost:3000/api/pagos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id_usuario, total, tipo_tarjeta, titular, numero_tarjeta, fecha_vencimiento, cvv, direccion_envio }),
            });

            if (response.ok) {
                alert("Pago realizado con éxito.");
                window.location.href = "confirmacion.html"; // Redirigir a una página de confirmación
            } else {
                const error = await response.json();
                alert("Error: " + error.error);
            }
        } catch (error) {
            console.error("Error al procesar el pago:", error);
            alert("Error al procesar el pago.");
        }
    });
});
