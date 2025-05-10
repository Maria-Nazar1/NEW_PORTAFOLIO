document.addEventListener('DOMContentLoaded', () => {
    const mouseFollower = document.getElementById('mouse-follower');
    const destacados = document.querySelectorAll('.destacado');
    let isHovering = false;
  
    document.addEventListener('mousemove', (e) => {
      mouseFollower.style.left = `${e.clientX}px`;
      mouseFollower.style.top = `${e.clientY}px`;
      mouseFollower.style.opacity = 1;
      mouseFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  
    destacados.forEach(elemento => {
      elemento.addEventListener('mouseenter', () => {
        isHovering = true;
        mouseFollower.style.transform = 'translate(-50%, -50%) scale(1.5)'; // Icono más grande al hover
        mouseFollower.style.color = '#28a745'; // Cambia de color al hover
      });
  
      elemento.addEventListener('mouseleave', () => {
        isHovering = false;
        mouseFollower.style.transform = 'translate(-50%, -50%) scale(1)'; // Icono vuelve a su tamaño normal
        mouseFollower.style.color = '#007bff'; // Restaura el color original
      });
    });
  
    document.addEventListener('mouseleave', () => {
      mouseFollower.style.opacity = 0;
      mouseFollower.style.transform = 'translate(-50%, -50%) scale(0.8)'; // Oculta con una pequeña retracción
    });
  });