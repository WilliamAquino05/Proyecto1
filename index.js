// index.js

// Función para validar el formulario
function validateForm(event) {
    // Obtén los elementos del formulario
    const usuario = document.getElementById('usuario').value;
    const lugarDeTrabajo = document.getElementById('lugar-de-trabajo').value;
    const sexo = document.getElementById('sexo').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const provincia = document.getElementById('provincia').value;
    const ciudad = document.getElementById('ciudad').value;

    // Verifica si todos los campos están llenos
    if (!usuario || !lugarDeTrabajo || !sexo || !fechaNacimiento || !provincia || !ciudad) {
        alert('Por favor, completa todos los campos.');
        event.preventDefault(); // Evita que el formulario se envíe
        return false;
    }

    // Si todos los campos están llenos
    alert('Formulario enviado con éxito.');
    return true;
}

// Añade un evento al formulario para validar antes de enviar
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});
