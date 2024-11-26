document.getElementById("reset-password-form").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;

    // Verificar si el correo tiene un formato válido
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        event.preventDefault();  // Evita el envío del formulario si el correo no es válido.
    }
});
