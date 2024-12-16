document.addEventListener("DOMContentLoaded", function () {
    const productosList = document.getElementById("productosList");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (!productosList) {
        console.error("El contenedor de productos no se encontró.");
        return;
    }

   
    fetch('js/productos.json')
        .then(response => response.json())  
        .then(productos => {
            productos.forEach(producto => {
                const productoDiv = document.createElement("div");
                productoDiv.classList.add("producto", "card", "mb-3");
                productoDiv.style.width = "18rem";
                productoDiv.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <p>Stock disponible: ${producto.stock}</p>
                        <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio}, '${producto.imagen}', ${producto.stock})">Agregar al Carrito</button>
                    </div>
                `;
                productosList.appendChild(productoDiv);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });

    window.agregarAlCarrito = function (id, nombre, precio, imagen, stock) {
        const producto = { id, nombre, precio, imagen, cantidad: 1 };
        const productoExistente = carrito.find(p => p.id === id);

        if (!productoExistente) {
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert("Producto agregado al carrito");
        } else {
            if (productoExistente.cantidad < stock) {
                productoExistente.cantidad++;
                localStorage.setItem("carrito", JSON.stringify(carrito));
                alert("Cantidad incrementada en el carrito");
            } else {
                alert("No hay suficiente stock disponible para agregar más.");
            }
        }

        actualizarCarrito();
    };

    function actualizarCarrito() {
        const carritoList = document.getElementById("carritoList");
        carritoList.innerHTML = '';
        let total = 0;

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
                        carrito.splice(index, 1);
                        localStorage.setItem("carrito", JSON.stringify(carrito));
                        actualizarCarrito();
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

                total += producto.precio * producto.cantidad;
            });

            const totalCarrito = document.createElement("p");
            totalCarrito.classList.add("total-carrito");
            totalCarrito.textContent = `Total del Carrito: $${total.toFixed(2)}`;
            carritoList.appendChild(totalCarrito);
        }
    }

    actualizarCarrito();
});
