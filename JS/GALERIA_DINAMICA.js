document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const peliculaWrappers = document.querySelectorAll('.pelicula-wrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const numPeliculas = peliculaWrappers.length;
    let currentIndex = 0;
  
    function scrollToWrapper(index) {
      const translateX = -index * 100; // Desplazamiento en porcentaje
      galleryContainer.style.transform = `translateX(${translateX}%)`;
  
      // Opcional: Actualizar la clase 'active-wrapper' si la estás usando para estilos
      peliculaWrappers.forEach((wrapper, i) => {
        wrapper.classList.remove('active-wrapper');
        if (i === index) {
          wrapper.classList.add('active-wrapper');
        }
      });
    }
  
    function nextCard() {
      currentIndex = (currentIndex + 1) % numPeliculas;
      scrollToWrapper(currentIndex);
    }
  
    function prevCard() {
      currentIndex = (currentIndex - 1 + numPeliculas) % numPeliculas;
      scrollToWrapper(currentIndex);
    }
  
    // Event listeners para las flechas
    if (leftArrow) {
      leftArrow.addEventListener('click', prevCard);
    }
    if (rightArrow) {
      rightArrow.addEventListener('click', nextCard);
    }
  
    // Mostrar la primera película al cargar (o la activa inicial si la hay)
    const initialActiveWrapper = document.querySelector('.pelicula-wrapper.active-wrapper');
    if (initialActiveWrapper) {
      currentIndex = Array.from(peliculaWrappers).indexOf(initialActiveWrapper);
      scrollToWrapper(currentIndex);
    } else if (numPeliculas > 0) {
      scrollToWrapper(0);
    }
  });