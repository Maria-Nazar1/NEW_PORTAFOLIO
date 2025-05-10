document.addEventListener('DOMContentLoaded', () => {
    const visitCounterElement = document.getElementById('visit-counter');
    const visitCountKey = 'portfolioVisitCount';
  
    // Función para obtener el contador de visitas desde LocalStorage
    function getVisitCount() {
      const count = localStorage.getItem(visitCountKey);
      return count ? parseInt(count) : 0;
    }
  
    // Función para actualizar y guardar el contador de visitas
    function updateVisitCount() {
      let count = getVisitCount();
      count++;
      localStorage.setItem(visitCountKey, count);
      visitCounterElement.textContent = `Visitas: ${count}`;
    }
  
    // Inicializar el contador al cargar la página
    updateVisitCount();
  });