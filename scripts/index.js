'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const carrito = new Carrito();
    const catalogo = new Catalogo(carrito); // Se crea una instancia de la clase Carrito

    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            catalogo.cargarProductos(data);
            catalogo.mostrarProductos('');
        });

    const filters = document.querySelectorAll('.filtro');
    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            const categoria = filter.dataset.categoria;
            catalogo.mostrarProductos(categoria);
        });
    });
});

let contadorCarrito = 0;

function mostrarNotificacion() {
    if (contadorCarrito === 0) {
        const notificacion = document.getElementById('notificacion');
        notificacion.style.display = 'none';
    }
    else {
        const notificacion = document.getElementById('notificacion');
        notificacion.style.display = 'block';
        notificacion.innerHTML = contadorCarrito;
    }
};