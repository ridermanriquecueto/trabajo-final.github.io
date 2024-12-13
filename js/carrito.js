<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalPrecio = document.getElementById("total-precio");
    const vaciarCarritoBtn = document.getElementById("vaciarCarrito");
    const finalizarCompraBtn = document.getElementById("finalizarCompra");
    const mensajeFinalizado = document.getElementById("mensajeFinalizado");

    let total = 0;
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    function actualizarCarrito() {
        listaCarrito.innerHTML = "";
        total = 0;

        carrito.forEach((producto, index) => {
            const item = document.createElement("li");
            const texto = document.createElement("span");
            texto.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)} x ${producto.cantidad} (Total: $${(producto.precio * producto.cantidad).toFixed(2)})`;
            item.appendChild(texto);

            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar uno";
            botonEliminar.style.marginLeft = "10px";
            botonEliminar.style.color = "white";
            botonEliminar.style.backgroundColor = "green";
            botonEliminar.style.border = "none";
            botonEliminar.style.borderRadius = "5px";
            botonEliminar.style.padding = "5px 10px";

            botonEliminar.addEventListener("click", () => {
                if (producto.cantidad > 1) {
                    producto.cantidad -= 1;
                } else {
                    carrito.splice(index, 1);
                }
                actualizarCarrito();
            });

            item.appendChild(botonEliminar);
            listaCarrito.appendChild(item);
            total += producto.precio * producto.cantidad;
        });

        totalPrecio.textContent = `Total: $${total.toFixed(2)}`;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function vaciarCarrito() {
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
    }

    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    finalizarCompraBtn.addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío. Agrega productos antes de continuar.");
        } else {
            let resumenCompra = "Resumen de tu compra:\n\n";
            carrito.forEach((producto) => {
                resumenCompra += `${producto.nombre} - $${producto.precio} x ${producto.cantidad} = $${(producto.precio * producto.cantidad).toFixed(2)}\n`;
            });
            resumenCompra += `\nTotal: $${total.toFixed(2)}`;
            resumenCompra += `\n\n¡Gracias por tu compra! 🎉 Tu pago ha sido simulado exitosamente.!! que? queres comprobante!! eso no hace falta pibe disfruta de la compra sino pregunatele a tu abuelita q no hace falta! ajaja `; 

            alert(resumenCompra);

            vaciarCarrito();
            mensajeFinalizado.innerHTML = `
                <div style="color: #fff; background-color:rgb(131, 207, 188); padding: 10px; border-radius: 8px; text-align: center;">
                    <p style="font-size: 18px; font-weight: bold;">
                        ¡Compra exitosa! 🛍️ 🎉<br>
                        ¡Gracias por confiar en nosotros!
                    </p>
                </div>
            `;
            vaciarCarritoBtn.style.display = "none";
            finalizarCompraBtn.style.display = "none";
        }
    });

    actualizarCarrito();
});
=======
document.addEventListener("DOMContentLoaded", function () {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalPrecio = document.getElementById("total-precio");
    const vaciarCarritoBtn = document.getElementById("vaciarCarrito");
    const finalizarCompraBtn = document.getElementById("finalizarCompra");
    const mensajeFinalizado = document.getElementById("mensajeFinalizado");

    let total = 0; // Variable para el total del carrito
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Función para actualizar la vista del carrito
    function actualizarCarrito() {
        listaCarrito.innerHTML = ""; // Limpiar la lista
        total = 0; // Reiniciar el total

        carrito.forEach((producto, index) => {
            const item = document.createElement("li");

            // Crear el texto del producto
            const texto = document.createElement("span");
            texto.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)} x ${producto.cantidad} (Total: $${(producto.precio * producto.cantidad).toFixed(2)})`;
            item.appendChild(texto);

            // Crear el botón de eliminar
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar uno";
            botonEliminar.style.marginLeft = "10px";
            botonEliminar.style.color = "white";
            botonEliminar.style.backgroundColor = "green";
            botonEliminar.style.border = "none";
            botonEliminar.style.borderRadius = "5px";
            botonEliminar.style.padding = "5px 10px";

            botonEliminar.addEventListener("click", () => {
                if (producto.cantidad > 1) {
                    // Reducir la cantidad
                    producto.cantidad -= 1;
                } else {
                    // Eliminar el producto si su cantidad llega a 1
                    carrito.splice(index, 1);
                }
                actualizarCarrito(); // Actualizar vista
            });

            item.appendChild(botonEliminar);
            listaCarrito.appendChild(item);

            // Actualizar el total
            total += producto.precio * producto.cantidad;
        });

        totalPrecio.textContent = `Total: $${total.toFixed(2)}`;
        localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar en localStorage
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito)); // Asegurarse de que el localStorage se actualice
        actualizarCarrito();
        console.log("Carrito vacío:", carrito); // Verificar que el carrito se vació correctamente
    }

    // Vincula el botón "Vaciar Carrito"
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    // Función para finalizar la compra
    finalizarCompraBtn.addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío. Agrega productos antes de continuar.");
        } else {
            let resumenCompra = "Resumen de tu compra:\n\n";
            carrito.forEach((producto) => {
                resumenCompra += `${producto.nombre} - $${producto.precio} x ${producto.cantidad} = $${(producto.precio * producto.cantidad).toFixed(2)}\n`;
            });
            resumenCompra += `\nTotal: $${total.toFixed(2)}`;
            resumenCompra += `\n\n¡Gracias por tu compra! 🎉 Tu pago ha sido simulado exitosamente.`;
    
            alert(resumenCompra);
    
            vaciarCarrito();
            mensajeFinalizado.innerHTML = `
                <div style="color: #fff; background-color:rgb(131, 207, 188); padding: 10px; border-radius: 8px; text-align: center;">
                    <p style="font-size: 18px; font-weight: bold;">
                        ¡Compra exitosa! 🛍️ 🎉<br>
                        ¡Gracias por confiar en nosotros!
                    </p>
                </div>
            `;
            vaciarCarritoBtn.style.display = "none";
            finalizarCompraBtn.style.display = "none";
        }
    });

    // Inicializar el carrito al cargar la página
    actualizarCarrito();
});
>>>>>>> 99aaa3695348499e9d6b1a630e6e8526129aec8c
