// A. Mensaje de bienvenida al cargar la página
alert("¡Bienvenido A Mi Portafolio!, Soy Juan Sebastian!");

// Seleccionamos los elementos del HTML
const boton = document.getElementById('boton-interactivo');
const parrafo = document.getElementById('parrafo-interactivo');

// B. Cambiar el texto y C. Mostrar/Ocultar con un efecto dinámico
boton.addEventListener('click', function() {
    
    // Cambiamos el texto del párrafo
    parrafo.innerText = "¡Gracias Por Interactuar! Estoy Aprendiendo JavaScript En Mi Portafolio.";
    
    // Efecto dinámico: Mostrar/Ocultar el párrafo
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block"; // Lo muestra
        boton.innerText = "Ocultar";
    } else {
        parrafo.style.display = "none"; // Lo oculta
        boton.innerText = "Toca Aqui";
    }
}); 