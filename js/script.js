document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    actualizarContadorCarrito();
});

function mostrarProductos() {
    
}

function agregarAlCarrito(event) {
    const idProducto = event.target.getAttribute('data-id');
    const producto = productosDisponibles.find(p => p.id == idProducto);

    if (!producto) return;

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productoExistente = carrito.find(p => p.id == producto.id);
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contador = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    document.getElementById('carritoCount').textContent = contador;
}
