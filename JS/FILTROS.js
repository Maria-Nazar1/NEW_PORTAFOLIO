document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filtros-habilidades button');
  const tablaHabilidades = document.querySelectorAll('.tabla-habilidad');
  const contenidoFiltrado = document.getElementById('contenido-filtrado');
  const filtroNavegacionBotones = document.querySelectorAll('.filtro-navegacion button');
  const detalleSecciones = document.querySelectorAll('.detalle-seccion');
  const habilidadesContenedorPrincipal = document.querySelector('.habilidades-contenedor-principal'); // Nuevo contenedor

  function mostrarDetalle(seccionId) {
    detalleSecciones.forEach(seccion => {
      seccion.style.display = seccion.id === seccionId ? 'block' : 'none';
    });
    filtroNavegacionBotones.forEach(boton => {
      boton.classList.remove('activo-filtro');
      if (boton.dataset.seccion === seccionId) {
        boton.classList.add('activo-filtro');
      }
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove('activo'));
      this.classList.add('activo');

      tablaHabilidades.forEach(tabla => {
        tabla.style.display = filterValue === 'todos' || tabla.classList.contains(filterValue) ? 'table' : 'none';
      });

      if (filterValue === 'react' || filterValue === 'avanzado') {
        contenidoFiltrado.style.display = 'block';
        mostrarDetalle(`${filterValue}-detalles`);
      } else {
        contenidoFiltrado.style.display = 'none';
        detalleSecciones.forEach(seccion => seccion.style.display = 'none');
      }
    });
  });

  filtroNavegacionBotones.forEach(boton => {
    boton.addEventListener('click', function() {
      mostrarDetalle(this.dataset.seccion);
    });
  });
});