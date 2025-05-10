document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const modoNocheKey = 'modoNocheActivado';

    // Función para activar el modo noche
    const activarModoNoche = () => {
        body.classList.add('modo-noche');
        localStorage.setItem(modoNocheKey, 'true');
        // Actualiza el icono si es necesario
        const sunIcon = themeToggle.querySelector('.fa-sun');
        const moonIcon = themeToggle.querySelector('.fa-moon');
        if (sunIcon && moonIcon) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        }
    };

    // Función para desactivar el modo noche
    const desactivarModoNoche = () => {
        body.classList.remove('modo-noche');
        localStorage.setItem(modoNocheKey, 'false');
        // Actualiza el icono si es necesario
        const sunIcon = themeToggle.querySelector('.fa-sun');
        const moonIcon = themeToggle.querySelector('.fa-moon');
        if (sunIcon && moonIcon) {
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        }
    };

    // Comprobar la preferencia almacenada al cargar la página
    if (localStorage.getItem(modoNocheKey) === 'true') {
        activarModoNoche();
    } else {
        desactivarModoNoche();
    }

    // Evento al hacer clic en el botón de tema
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('modo-noche')) {
            desactivarModoNoche();
        } else {
            activarModoNoche();
        }
    });
});