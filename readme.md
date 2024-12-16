La Casa de Hilos y Accesorios - Proyecto Web
La Casa de Hilos y Accesorios es una tienda en línea especializada en productos para costura y repuestos para máquinas de coser. Este proyecto de e-commerce tiene un diseño totalmente responsivo y permite a los usuarios navegar por categorías, buscar productos y agregar artículos al carrito de compras.

Funcionalidades Principales
1. Menú de Navegación
Inicio: Página principal de la tienda con acceso a las categorías y productos destacados.
Productos: Muestra una lista completa de los productos disponibles para la venta.
Contacto: Información de contacto y un formulario para consultas.
Carrito: Ícono para ver los productos agregados al carrito y proceder con la compra.
2. Carrito de Compras
Estructura básica para agregar productos al carrito.
En desarrollo para integrar la pasarela de pago.
Funcionalidad para mostrar, editar y eliminar productos en el carrito.
Mantiene la información del carrito después de recargar la página utilizando localStorage.
3. Gato Llamador (Gato de la Suerte)
Un ícono interactivo que, al hacer clic, muestra un mensaje de bienvenida o buena suerte al usuario.
Este ícono tiene como objetivo sorprender y agregar un toque divertido a la experiencia de compra.
El Gato Llamador puede ser expandido en el futuro para mostrar mensajes aleatorios y tener animaciones adicionales.
4. Buscador de Productos
Campo en desarrollo para permitir la búsqueda de productos por nombre, facilitando la navegación del sitio.
5. Imágenes de Producto
Cada producto tiene una imagen, nombre y descripción para que los usuarios puedan visualizar los detalles antes de realizar una compra.
Herramientas y Tecnologías Utilizadas
HTML5: Estructura de la página con etiquetas semánticas.
CSS3: Estilos visuales utilizando Bootstrap para un diseño responsivo y atractivo.
JavaScript: Interactividad, incluyendo el Gato Llamador y la futura funcionalidad del buscador de productos.
Bootstrap 5.3: Framework para un diseño responsivo que se adapta a diferentes tamaños de pantalla.
FontAwesome: Uso de íconos para mejorar la experiencia del usuario.
Instrucciones para Ejecutar Localmente
Clona el repositorio:

bash
Copiar código
git clone https://github.com/ridermanriquecueto/trabajo-final.github.io.git
Abre el proyecto en tu editor de código favorito (ej. Visual Studio Code).

Ejecuta el archivo index.html en tu navegador para ver el sitio.

Nota del Proyecto Integrador: Desarrollo de Sitio Web E-commerce
Objetivo del Proyecto:
La finalidad de este proyecto es desarrollar un sitio web de comercio electrónico completamente funcional que combine los conocimientos adquiridos en el curso. El sitio debe ser dinámico e interactivo, utilizando una API REST para mostrar productos y permitiendo a los usuarios agregar artículos a un carrito de compras. El desarrollo refleja una sólida comprensión de la estructuración semántica, diseño responsivo, manipulación del DOM, consumo de APIs y la implementación de funcionalidades clave en plataformas de e-commerce.

Requerimientos Obligatorios
Estructura HTML:

Generar una estructura básica utilizando etiquetas semánticas como header, nav, main, section y footer.
Incluir un archivo README.md explicando brevemente el propósito de la página.
Contenido Multimedia y Navegación:

Incluir al menos un archivo multimedia (imagen, vídeo o audio) correctamente integrado.
Implementar una lista desordenada con enlaces para simular la navegación interna (Inicio, Productos, Contacto, etc.).
Formulario de Contacto:

Crear un formulario con campos de nombre, correo electrónico y mensaje, utilizando Formspree para recibir mensajes.
Subida del Proyecto:

Subir el proyecto a un hosting gratuito (como GitHub Pages o Netlify) con una URL funcional.
Estilos Básicos Aplicados con CSS:

Utilizar un archivo styles.css para los estilos básicos aplicados a las secciones de header, footer y la lista de navegación.
Incorporar fuentes de Google Fonts.
Aplicar propiedades de background en alguna sección de la página.
Diseño Responsivo con Flexbox y Grid:

Organizar la sección "Productos" utilizando Flexbox de manera responsiva.
Organizar la sección "Reseñas" utilizando Grid.
Asegurar que la sección de "Contacto" sea responsiva con Media Queries.
Modelo de Caja (Box Model):

Implementar propiedades de Box Modeling (márgenes, rellenos, bordes) en los elementos del proyecto.
Uso de Bootstrap y Git:

Reemplazar el nav creado por un navbar responsivo utilizando Bootstrap, adaptado a la paleta de colores del proyecto.
Subir el proyecto a un repositorio de GitHub, documentando los cambios con commits.
Funcionalidad JavaScript:

Crear un archivo script.js y vincularlo al documento HTML.
Implementar condicionales y ciclos, como una función que verifique si todos los campos del formulario están completos y un ciclo para generar dinámicamente una lista de productos.
Manipulación del DOM y Eventos:

Implementar un evento click para mostrar la descripción ampliada de los productos.
Crear un listado dinámico de productos mediante una función en JavaScript.
Funciones Modulares:

Crear una función que cree un array de productos y los muestre en la página utilizando una plantilla HTML dinámica.
Asincronía y Consumo de API REST:

Utilizar fetch para obtener datos de una API pública y mostrarlos en la sección main del HTML.
Organizar los datos obtenidos en cards, utilizando Flexbox o Grid.
Carrito de Compras:

Implementar un carrito de compras que permita añadir productos desde las cards, utilizando localStorage y sessionStorage para almacenar la información del carrito.
Permitir la visualización, edición (modificación de cantidad) y eliminación de productos en el carrito.
Asegurar que la información del carrito se mantenga después de recargar la página.
Este README.md proporciona una descripción detallada del proyecto, su funcionalidad, las herramientas utilizadas y los pasos para ejecutarlo localmente. También incluye los requerimientos que guían el desarrollo del proyecto e-commerce.