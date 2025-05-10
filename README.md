# 🌟 Mi Portafolio Personal - María Isabel Nazar

¡Bienvenid@ a mi portafolio web! Este sitio fue diseñado para mostrar quién soy, mi experiencia profesional, mis proyectos, habilidades, intereses y contacto.

## 👩‍💻 Sobre mí

Soy María Isabel Nazar, docente y directora en una escuela técnica de la Provincia de Buenos Aires. Con más de 10 años en el ámbito educativo y formación en Ciencias Exactas, actualmente me encuentro finalizando la carrera de Desarrollo de Software. Mi misión es ser un puente entre la formación técnica y el mercado laboral, apostando por una educación inclusiva, profesional e innovadora.

## 🧰 Tecnologías usadas

- HTML5
- CSS3
- Font Awesome
- Google Fonts
- Diseño responsivo

## 🗂️ Secciones del sitio

- **Sobre mí**: Conocé mi perfil académico y profesional.
- **Proyectos**: Presentación de iniciativas educativas y de desarrollo de software.
- **Habilidades**: Tabla comparativa de tecnologías que domino y deseo aprender.
- **Películas favoritas**: Mis inspiraciones del cine 🎬.
- **Formulario de contacto**: ¡Podés dejarme un mensaje!

## 🌐 Vista previa

> Podés ver el sitio online gracias a GitHub Pages:  
👉 [https://maria-nazar1.github.io/NEW_PORTAFOLIO/](https://maria-nazar1.github.io/NEW_PORTAFOLIO/)

## 🖼️ Captura del sitio

![Captura del sitio](img/proyect1.png)

## 📝 Posibles mejoras futuras

- Menú hamburguesa para dispositivos móviles.
- Validación del formulario con JavaScript.
- Integración con backend (Node.js / Firebase).
- Opción de descarga de CV en PDF.
- Portfolio en inglés.

## 📫 Contacto

Podés encontrarme en:

- [GitHub](https://github.com/Maria-Nazar1)
- [LinkedIn](https://linkedin.com/in/tu_usuario) *(completar tu usuario)*
- [WhatsApp](https://wa.me/549XXXXXXXXXX) *(completar tu número)*

---
 
 **CAMBIOS ESTRUCTURALES AL PORTAFOLIO!** 


 # Portafolio Web Interactivo - Trabajo Práctico

Este portafolio web ha sido desarrollado como parte de un trabajo práctico, incorporando diversas funcionalidades interactivas para mejorar la experiencia del usuario y la presentación del contenido. A continuación, se detallan los cambios y funcionalidades implementadas, junto con una breve justificación de su elección.

## Funcionalidades Obligatorias con JavaScript

1.  **Validación de Formulario:**
    * **Implementación:** Se adjuntó un event listener al envío del formulario de contacto. Dentro de este listener, se verifican los campos Nombre, Apellido, Email y Teléfono. Si algún campo está vacío, se llama a `sweetalert2` para mostrar un mensaje de error estilizado y se previene el envío del formulario.
    * **Justificación:** Asegura que se recopile la información esencial del usuario, mejorando la calidad de los datos y proporcionando retroalimentación visual inmediata sobre campos incompletos, lo que mejora la experiencia del usuario.

2.  **Modo Oscuro/Claro:**
    * **Implementación:** Se creó un botón que, al ser clickeado, añade o remueve una clase (`dark-mode`) al `<body>` o a un contenedor principal. El estado preferido del usuario se guarda en `LocalStorage` y se aplica al cargar la página.
    * **Justificación:** Mejora la accesibilidad y la comodidad visual, permitiendo a los usuarios adaptar la apariencia del sitio a sus preferencias y condiciones de iluminación. Recordar la preferencia con `LocalStorage` ofrece una experiencia más personalizada y persistente.

3.  **Ocultar y/o Mostrar Contenido:**
    * **Implementación:** Se utilizaron botones con event listeners que modifican la propiedad `display` de elementos HTML específicos (inicialmente ocultos o visibles). Al hacer clic, se alterna entre `none` y `block` (u otra propiedad de display apropiada). En la sección de habilidades, al aplicar ciertos filtros (Frontend, Avanzado), se muestra una capa con navegación que permite mostrar u ocultar contenido detallado adicional relacionado con ese filtro.
    * **Justificación:** Permite presentar información de manera jerárquica y concisa. Los usuarios pueden enfocarse en la información principal y expandir detalles solo cuando sea necesario, lo que mejora la legibilidad y reduce la sobrecarga cognitiva. En la sección de habilidades, esto permite ofrecer información más profunda sin abrumar la vista principal.

4.  **Galería de Imágenes Dinámica:**
    * **Implementación:** Se gestiona un array de rutas de imágenes en JavaScript. Los botones de "anterior" y "siguiente" tienen event listeners que actualizan un índice, y este índice se utiliza para cambiar la `src` de un elemento `<img>` visible.
    * **Justificación:** Proporciona una forma interactiva y visualmente atractiva de presentar múltiples imágenes sin ocupar demasiado espacio en la pantalla. La navegación dinámica permite al usuario explorar las imágenes a su propio ritmo.

5.  **Filtros en el Contenido:**
    * **Implementación:** Se adjuntaron event listeners a botones de filtro en la sección de "Habilidades". Al hacer clic en un filtro, se obtiene el valor del filtro (a través de `data-filter`). Se itera sobre los elementos a filtrar (inicialmente tablas), y se modifica su propiedad `display` (`table` o `none`) basándose en si contienen una clase CSS o un atributo de datos que coincida con el valor del filtro.
    * **Justificación:** Mejora significativamente la usabilidad al permitir a los usuarios enfocarse rápidamente en las áreas de experiencia que les resulten más relevantes. Facilita la exploración de un conjunto potencialmente grande de habilidades.

## Funcionalidades Adicionales Implementadas y Justificación

* **Contador de Visitas:**
    * Se implementó un contador de visitas utilizando JavaScript y `LocalStorage`.
    * **Justificación:** Permite al propietario del portafolio tener una idea básica del interés que genera su sitio web, aunque sea a nivel local del navegador del visitante. Es una forma sencilla de obtener una métrica de uso.
* **Rediseño de la Navegación del Filtro (Dentro del Contenido Filtrado):**
    * Se implementó una barra de navegación (con apariencia de pestañas) dentro de la sección de "Contenido Filtrado" para organizar el contenido detallado asociado a cada filtro.
    * **Justificación:** Mejora la experiencia del usuario al proporcionar una forma clara y organizada de navegar por la información adicional relacionada con un filtro específico. El patrón de pestañas es intuitivo y facilita la exploración del contenido.
* **Animaciones Dinámicas:**
    * Se utilizaron JavaScript para agregar animaciones sutiles (como el seguidor del mouse y las interacciones de hover).
    * **Justificación:** Las animaciones sutiles pueden mejorar la experiencia del usuario al hacer la interacción más atractiva y proporcionar retroalimentación visual sobre las acciones.
* **Temporizador o Reloj:**
    * Se incluyó un temporizador que indica el tiempo restante para la entrega del trabajo práctico.
    * **Justificación:** En el contexto de un trabajo práctico con una fecha límite, un temporizador visible puede ayudar a recordar la urgencia.

## Mejoras o Cambios en el Diseño y Código

1.  **Mejor Organización de los Contenedores (Sección de Habilidades con Grid):**
    * **Cambio Realizado:** Se refactorizó la estructura de la sección de "Habilidades" para utilizar CSS Grid en lugar de tablas para la disposición de los elementos de habilidad.
    * **Justificación:** El uso de CSS Grid permite un diseño más flexible y adaptable a diferentes tamaños de pantalla. Facilita la creación de un layout responsivo donde los elementos de habilidad se reorganizan de manera óptima en dispositivos móviles y de escritorio. Esto mejora la experiencia del usuario al asegurar que la información sea siempre legible y accesible, independientemente del dispositivo que esté utilizando.

    **Captura de Pantalla (Diseño Anterior):**

    `./img/page_anterior.png`

2.  **Rediseño de la Navegación del Filtro (Dentro del Contenido Filtrado):**
    * **Cambio Realizado:** Se implementó una barra de navegación con apariencia de pestañas dentro de la sección de "Contenido Filtrado".
    * **Justificación:** La navegación con pestañas proporciona una interfaz más intuitiva y organizada para explorar el contenido detallado asociado a cada filtro. En lugar de tener una lista vertical o botones dispersos, las pestañas agrupan visualmente las opciones y hacen que sea más fácil para el usuario entender qué contenido está disponible y cómo acceder a él. Esto mejora la experiencia del usuario al hacer la navegación más clara y eficiente.

    **Captura de Pantalla (Diseño Actualizado):**

    `./img/page_actual.png`

## Tecnologías Utilizadas

* **HTML:** Estructura del contenido web.
* **CSS:** Estilos visuales de la página.
* **JavaScript:** Interacción y funcionalidades dinámicas.
* **Librerías/Frameworks:**
    * `sweetalert2`: Para alertas y notificaciones estilizadas.
    * `Font Awesome`: Para iconos vectoriales.

## Fuentes Utilizadas

* Google Fonts (`Roboto`): Para una tipografía legible y moderna.
* CDN de Font Awesome: Para facilitar el uso de iconos.
* CDN de SweetAlert2: Para integrar fácilmente alertas personalizadas.
**Gracias por visitar mi proyecto. ¡Tu feedback es bienvenido!** 🙌
