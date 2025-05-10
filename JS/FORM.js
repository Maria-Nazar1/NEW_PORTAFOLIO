// js/form.js
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".formulario-contacto");
    const telefonoInput = document.getElementById("telefono");
  
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre");
      const apellido = document.getElementById("apellido");
      const email = document.getElementById("email");
      const telefono = telefonoInput;
  
      limpiarErrores();
  
      let errores = 0;
  
      if (nombre.value.trim() === "") {
        mostrarError(nombre, "El nombre es obligatorio");
        errores++;
      }
  
      if (apellido.value.trim() === "") {
        mostrarError(apellido, "El apellido es obligatorio");
        errores++;
      }
  
      if (email.value.trim() === "") {
        mostrarError(email, "El email es obligatorio");
        errores++;
      } else if (!validarEmail(email.value.trim())) {
        mostrarError(email, "El formato de email no es válido");
        errores++;
      }
  
      if (telefono.value.trim() === "") {
        mostrarError(telefono, "El teléfono es obligatorio");
        errores++;
      } else if (!/^[0-9]+$/.test(telefono.value.trim())) {
        mostrarError(telefono, "El teléfono solo puede contener números");
        errores++;
      }
  
      if (errores === 0) {
        Swal.fire({
          title: '¡Enviado!',
          text: 'Tu mensaje ha sido enviado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          background: getComputedStyle(document.body).backgroundColor, // Hereda el fondo actual
          color: getComputedStyle(document.body).color, // Hereda el color de texto actual
          confirmButtonColor: '#f06292', // Mantiene tu color de acento
        }).then((result) => {
          if (result.isConfirmed) {
            formulario.submit(); // O podrías realizar alguna otra acción aquí
            formulario.reset(); // Limpiar el formulario después del envío exitoso
          }
        });
      } else {
        Swal.fire({
          title: '¡Error!',
          text: 'Por favor, revisa los campos marcados.',
          icon: 'error',
          confirmButtonText: 'Entendido',
          background: getComputedStyle(document.body).backgroundColor, // Hereda el fondo actual
          color: getComputedStyle(document.body).color, // Hereda el color de texto actual
          confirmButtonColor: '#f06292', // Mantiene tu color de acento
        });
      }
    });
  
    function mostrarError(campo, mensaje) {
      const error = document.createElement("span");
      error.classList.add("error-mensaje");
      error.textContent = mensaje;
      campo.parentElement.appendChild(error);
      campo.classList.add("input-error");
    }
  
    function limpiarErrores() {
      document.querySelectorAll(".error-mensaje").forEach(el => el.remove());
      document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));
    }
  
    function validarEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    telefonoInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  });