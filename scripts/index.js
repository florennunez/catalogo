document.addEventListener('DOMContentLoaded', function () {
    const carrito = new Carrito();
    const catalogo = new Catalogo(carrito);

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

    function mostrarNotificacion() {
        carrito.actualizarNotificacion();
    }

    document.querySelector('button[onclick="mostrarNotificacion()"]').addEventListener('click', mostrarNotificacion);
});
