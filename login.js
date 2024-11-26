var buttonText = localStorage.getItem("lbl_btn");
if (buttonText && buttonText.trim() !== "") {
    document.getElementById("lbl_btn_cargo").innerText = "Bienvenido: " + buttonText;
} else {
    document.getElementById("lbl_btn_cargo").innerText = "No se encontró texto almacenado";
}

// En la página de login, cuando el usuario inicia sesión
function iniciarSesion() {
    const cargo = buttonText.trim(); // Obtener solo el cargo, sin el prefijo "Bienvenido: "
    if (cargo) {
        localStorage.setItem("cargo", cargo);  // Guardar solo el cargo
        window.location.href = "perfil.html"; // Redirigir a la página de gestión
    } else {
        alert("Por favor, selecciona un cargo");
    }
}




        