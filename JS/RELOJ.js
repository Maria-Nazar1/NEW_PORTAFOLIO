document.addEventListener('DOMContentLoaded', () => {
    const deadlineBadge = document.getElementById('deadline-badge');
    const deadlineTimerElement = document.getElementById('deadline-timer');
  
    // **¡IMPORTANTE!** Reemplaza con la fecha y hora de entrega de tu trabajo práctico (en formato ISO 8601)
    const deadlineDate = new Date('2025-05-09T23:59:00-03:00'); // Ejemplo: 15 de mayo de 2025 a las 23:59 (hora de Argentina)
  
    function updateTimer() {
      const now = new Date();
      const timeLeft = deadlineDate.getTime() - now.getTime();
  
      if (timeLeft <= 0) {
        deadlineTimerElement.textContent = '¡Entrega Finalizada!';
        deadlineBadge.style.backgroundColor = '#4CAF50'; // Cambiar color si ya pasó
        clearInterval(timerInterval); // Detener la actualización
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
        deadlineTimerElement.textContent = `Tiempo Restante: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }
  
    // Actualizar el temporizador cada segundo
    const timerInterval = setInterval(updateTimer, 1000);
  
    // Ejecutar la función una vez al cargar la página
    updateTimer();
  });