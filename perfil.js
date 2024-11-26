document.addEventListener("DOMContentLoaded", function() {
    // Recuperamos el cargo del usuario desde localStorage
    const cargo = localStorage.getItem("cargo");

    if (!cargo) {
        alert("No se ha encontrado un cargo válido. Por favor, inicia sesión nuevamente.");
        window.location.href = "login.html"; // Redirigir a login si no hay cargo
        return;
    }

    // Mostramos el cargo en la página (si lo deseas)
    document.getElementById("lbl_cargo").innerText = "Cargo: " + cargo;

    // Aquí habilitamos o deshabilitamos los botones según el cargo del usuario
    switch(cargo) {
        case "Auxiliar":
            habilitarBotones(["btnMiHerramienta", "btnSolicitarHerramienta", "btnDevolverHerramienta"]);
            deshabilitarBotones(["btnAutorizarCambio", "btnAutorizarEntrega", "btnInformeAsignacion", "btnStockHerramienta", "btnPedidoHerramienta", "btnAutorizarHerramienta"]);
            break;
        case "Tecnico":
            habilitarBotones(["btnMiHerramienta", "btnSolicitarHerramienta", "btnDevolverHerramienta",]);
            deshabilitarBotones(["btnAutorizarEntrega", "btnInformeAsignacion", "btnAutorizarCambio", "btnStockHerramienta", "btnPedidoHerramienta", "btnAutorizarHerramienta"]);
            break;
        case "Supervisor":
            habilitarBotones(["btnMiHerramienta", "btnSolicitarHerramienta", "btnDevolverHerramienta", "btnAutorizarCambio", "btnAutorizarEntrega", "btnAutorizarHerramienta"]);
            deshabilitarBotones(["btnInformeAsignacion", "btnStockHerramienta", "btnPedidoHerramienta"]);
            break;
        case "Coordinador":
            habilitarBotones([ "btnInformeAsignacion","btnStockHerramienta", "btnPedidoHerramienta", "btnAutorizarHerramienta"]);
            deshabilitarBotones(["btnMiHerramienta", "btnSolicitarHerramienta", "btnDevolverHerramienta", "btnAutorizarCambio", "btnAutorizarEntrega"]);
            break;
        case "Director":
            habilitarBotones([ "btnInformeAsignacion","btnStockHerramienta"]);
            deshabilitarBotones(["btnMiHerramienta", "btnSolicitarHerramienta", "btnDevolverHerramienta", "btnAutorizarCambio", "btnAutorizarEntrega", "btnPedidoHerramienta", "btnAutorizarHerramienta"]);
            break;
        default:
            alert("Cargo desconocido.");
            break;
    }
});

// Función para habilitar botones
function habilitarBotones(botones) {
    botones.forEach(function(id) {
        const boton = document.getElementById(id);
        if (boton) {
            boton.disabled = false;
        }
    });
}

// Función para deshabilitar botones
function deshabilitarBotones(botones) {
    botones.forEach(function(id) {
        const boton = document.getElementById(id);
        if (boton) {
            boton.disabled = true;
        }
    });
}
