document.getElementById("registration-form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        event.preventDefault();  // Evita el envío del formulario si las contraseñas no coinciden.
    }
});
