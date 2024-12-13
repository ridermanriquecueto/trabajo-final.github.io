La Casa de Hilos y Accesorios - Proyecto Web

La Casa de Hilos y Accesorios es una tienda en línea especializada en productos para costura y repuestos para máquinas. Este proyecto de e-commerce tiene un diseño totalmente responsivo y permite a los usuarios navegar por categorías, buscar productos y agregar artículos al carrito de compras.

Funcionalidades Principales:
Menú de Navegación:

Inicio: Página principal
Productos: Lista de productos
Contacto: Información de contacto
Carrito: Ícono para ver los productos agregados
Carrito de Compras:

Estructura básica para agregar productos al carrito, en desarrollo para integrar la pasarela de pago.
Gato Llamador (Gato de la Suerte):

Un ícono interactivo que, al hacer clic, muestra una alerta de bienvenida.
Buscador de Productos:

Campo en desarrollo para buscar productos por nombre.
Imágenes de Producto:

Cada producto tiene una imagen, nombre y descripción.
Herramientas y Tecnologías Utilizadas:
HTML5: Estructura de la página con etiquetas semánticas.
CSS3: Estilos visuales usando Bootstrap para hacer el sitio responsivo y atractivo.
JavaScript: Interactividad, incluyendo el Gato Llamador y el futuro buscador de productos.
Bootstrap 5.3: Framework para diseño responsivo.
FontAwesome: Íconos para mejorar la experiencia del usuario.
Instrucciones para Ejecutar Localmente:
Clona el repositorio:
bash
Copiar código
git clone https://github.com/ridermanriquecueto/trabajo-final.github.io.git
Abre el proyecto en tu editor de código favorito (ej. Visual Studio Code).
Ejecuta el archivo index.html en tu navegador para ver el sitio.

Nota del Proyecto Integrador: Desarrollo de Sitio Web E-commerce
Objetivo del Proyecto: La finalidad de este proyecto es desarrollar un sitio web de comercio electrónico completamente funcional que combine los conocimientos adquiridos en el curso. El sitio debe ser dinámico e interactivo, utilizando una API REST para mostrar productos y permitiendo a los usuarios agregar artículos a un carrito de compras. El desarrollo debe reflejar una sólida comprensión de la estructuración semántica, diseño responsivo, manipulación del DOM, consumo de APIs y la implementación de funcionalidades clave en plataformas de e-commerce.

Requerimientos Obligatorios:
Estructura HTML:
Generar una estructura HTML básica utilizando etiquetas semánticas como header, nav, main, section y footer.
Incluir un archivo README.md explicando brevemente el propósito de la página.
Contenido Multimedia y Navegación:
Incluir al menos un archivo multimedia (imagen, vídeo o audio) correctamente integrado.
Implementar una lista desordenada con enlaces que simulen la navegación interna de la página (Inicio, Productos, Contacto, etc.).
Formulario de Contacto:
Crear un formulario de contacto con campos de nombre, correo electrónico y mensaje utilizando Formspree.
Subida del Proyecto:
Subir el proyecto a un hosting gratuito (Netlify o GitHub Pages) con una URL funcional.
Estilos Básicos Aplicados con CSS:
Utilizar un archivo styles.css que contenga los estilos básicos aplicados al header, footer y la lista de navegación.
Incorporar fuentes de Google Fonts.
Aplicar propiedades de background en alguna sección de la página.
Diseño Responsivo con Flexbox y Grid:
Organizar la sección "Productos" utilizando Flexbox de manera responsiva.
Organizar la sección "Reseñas" utilizando Grid.
Asegurar que la sección de "Contacto" sea responsiva con Media Queries.
Modelo de Caja:
Implementar las propiedades de Box Modeling (márgenes, rellenos, bordes) en los elementos del proyecto.
Uso de Bootstrap y Git:
Reemplazar el nav creado por un navbar responsivo utilizando Bootstrap, adaptado a la paleta de colores del proyecto.
Subir el proyecto a un repositorio de GitHub, documentando los cambios con commits.
Funcionalidad JavaScript:
Crear un archivo script.js y vincularlo al documento HTML.
Implementar condicionales y ciclos, como una función que verifique si todos los campos del formulario de contacto están completos y un ciclo para generar dinámicamente una lista de productos.
Manipulación del DOM y Eventos:
Implementar un evento click para mostrar la descripción ampliada de los productos.
Crear un listado dinámico de productos mediante una función en JavaScript.
Funciones Modulares:
Crear una función que cree un array de productos y los muestre en la página utilizando una plantilla HTML dinámica.
Asincronía y Consumo de API REST:
Utilizar fetch para obtener datos de una API pública y mostrarlos en la sección main del HTML.
Procesar los datos obtenidos para organizarlos en cards, utilizando Flexbox o Grid.
Carrito de Compras:
Implementar un carrito de compras que permita añadir productos desde las cards, utilizando localStorage y sessionStorage para almacenar la información del carrito.
Permitir la visualización, edición (modificación de cantidad) y eliminación de productos en el carrito.
Asegurar que la información del carrito se mantenga después de recargar la página.
