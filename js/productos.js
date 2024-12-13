document.addEventListener("DOMContentLoaded", function () {
    const productosList = document.getElementById("productosList");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];  // Cargar carrito desde localStorage

    // Definir productos con stock
    const productos = [
        { id: 1, nombre: "Hilo Rojo", precio: 10, stock: 10, imagen: "img/hilo_rojo.jpg" },
        { id: 2, nombre: "Hilo Azul", precio: 12, stock: 5, imagen: "img/hilo_azul.jpg" },
        { id: 3, nombre: "Hilo Verde", precio: 15, stock: 7, imagen: "img/hilo_verde.jpg" },
        { id: 4, nombre: "Hilo Amarillo", precio: 8, stock: 8, imagen: "img/hilo_amarillo.jpg" },
        { id: 5, nombre: "Hilo Negro", precio: 20, stock: 3, imagen: "img/hilo_negro.jpg" },
        { id: 6, nombre: "Hilo Blanco", precio: 11, stock: 6, imagen: "img/hilo_blanco.jpg" },
        { id: 7, nombre: "Aguja de Costura", precio: 5, stock: 15, imagen: "img/aguja_costura.jpg" },
        { id: 8, nombre: "Aguja para Jeans", precio: 7, stock: 12, imagen: "img/aguja_jeans.jpg" },
        { id: 9, nombre: "Aceite para Máquinas", precio: 6, stock: 20, imagen: "img/aceite_maquinas.jpg" },
        { id: 10, nombre: "Carretel de Hilo", precio: 4, stock: 30, imagen: "img/carretel_hilo.jpg" },
        { id: 11, nombre: "Tela de Algodón", precio: 18, stock: 10, imagen: "img/tela_algodon.jpg" },
        { id: 12, nombre: "Hilo Elástico", precio: 9, stock: 8, imagen: "img/hilo_elastico.jpg" }
    ];

    // Verificamos que productosList no esté vacío
    if (!productosList) {
        console.error("El contenedor de productos no se encontró.");
        return;
    }

    // Cargamos los productos en el HTML
    productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto", "card", "mb-3");
        productoDiv.style.width = "18rem"; // Ajusta el tamaño de la tarjeta

        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <p>Stock disponible: ${producto.stock}</p>
                <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio}, '${producto.imagen}', ${producto.stock})">Agregar al Carrito</button>
            </div>
        `;

        // Agregar el producto al contenedor
        productosList.appendChild(productoDiv);
    });

    // Función para agregar un producto al carrito
    window.agregarAlCarrito = function (id, nombre, precio, imagen, stock) {
        const producto = { id, nombre, precio, imagen, cantidad: 1 };

        // Verificar si el producto ya está en el carrito
        const productoExistente = carrito.find(p => p.id === id);

        if (!productoExistente) {
            // Si no existe, agregarlo al carrito
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar el carrito en localStorage
            alert("Producto agregado al carrito");
        } else {
            // Si ya existe en el carrito, aumentar la cantidad
            if (productoExistente.cantidad < stock) {
                productoExistente.cantidad++;
                localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar el carrito en localStorage
                alert("Cantidad incrementada en el carrito");
            } else {
                alert("No hay suficiente stock disponible para agregar más.");
            }
        }

        actualizarCarrito();  // Actualizar el carrito en la interfaz
    };

    // Función para actualizar el carrito en la interfaz
    function actualizarCarrito() {
        const carritoList = document.getElementById("carritoList");
        carritoList.innerHTML = '';

        let total = 0;  // Total del carrito

        if (carrito.length === 0) {
            carritoList.innerHTML = "<p>No hay productos en el carrito.</p>";
        } else {
            carrito.forEach(producto => {
                const productoCard = document.createElement("div");
                productoCard.classList.add("producto-card");

                const img = document.createElement("img");
                img.src = producto.imagen;
                img.alt = producto.nombre;
                img.classList.add("producto-img");

                const info = document.createElement("div");
                info.classList.add("producto-info");

                const nombre = document.createElement("h3");
                nombre.classList.add("producto-nombre");
                nombre.textContent = producto.nombre;

                const precio = document.createElement("p");
                precio.classList.add("producto-precio");
                precio.textContent = `$${producto.precio} x ${producto.cantidad}`;

                const totalProducto = document.createElement("p");
                totalProducto.classList.add("producto-total");
                totalProducto.textContent = `Total: $${(producto.precio * producto.cantidad).toFixed(2)}`;

                const btnEliminar = document.createElement("button");
                btnEliminar.textContent = "Eliminar del Carrito";
                btnEliminar.classList.add("btn-eliminar");
                btnEliminar.addEventListener("click", () => {
                    const index = carrito.indexOf(producto);
                    if (index > -1) {
                        carrito.splice(index, 1); // Eliminar del carrito
                        localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar localStorage
                        actualizarCarrito(); // Actualizar la vista
                        alert("Producto eliminado del carrito");
                    }
                });

                info.appendChild(nombre);
                info.appendChild(precio);
                info.appendChild(totalProducto);
                info.appendChild(btnEliminar);

                productoCard.appendChild(img);
                productoCard.appendChild(info);

                carritoList.appendChild(productoCard);

                // Acumular el total
                total += producto.precio * producto.cantidad;
            });

            const totalCarrito = document.createElement("p");
            totalCarrito.classList.add("total-carrito");
            totalCarrito.textContent = `Total del Carrito: $${total.toFixed(2)}`;
            carritoList.appendChild(totalCarrito);
        }
    }

    // Llamada inicial para actualizar el carrito en la vista
    actualizarCarrito();
});
