class Carrito {
    constructor() {
        this.items = [];
        this.contadorCarrito = document.getElementById('notificacion');
    }

    agregarProducto(producto) {
        const index = this.items.findIndex(item => item.nombre === producto.nombre);
        if (index === -1) {
            this.items.push({ ...producto, cantidad: 1 });
        } else {
            this.items[index].cantidad += 1;
        }
        this.actualizarCarrito();
        this.actualizarNotificacion();
    }

    actualizarNotificacion() {
        const totalItems = this.items.reduce((total, item) => total + item.cantidad, 0);
        if (totalItems > 0) {
            this.contadorCarrito.style.display = 'block';
            this.contadorCarrito.innerHTML = totalItems;
        } else {
            this.contadorCarrito.style.display = 'none';
        }
    }

    actualizarCarrito() {
        const carritoDiv = document.getElementById('carrito');
        carritoDiv.innerHTML = '';
        let totalPrecio = 0;

        this.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item', 'mb-3');
            const nombreEl = document.createElement('h3');
            nombreEl.textContent = item.nombre;
            const cantidadEl = document.createElement('p');
            cantidadEl.textContent = `Cantidad: ${item.cantidad}`;
            const precioEl = document.createElement('p');
            const totalItemPrecio = item.precio * item.cantidad;
            precioEl.textContent = `Precio: $${totalItemPrecio}`;
            totalPrecio += totalItemPrecio;
            itemDiv.appendChild(nombreEl);
            itemDiv.appendChild(cantidadEl);
            itemDiv.appendChild(precioEl);
            carritoDiv.appendChild(itemDiv);
        });

        const totalPrecioDiv = document.createElement('div');
        totalPrecioDiv.classList.add('total', 'mt-3');
        const totalPrecioEl = document.createElement('h3');
        totalPrecioEl.textContent = `Total: $${totalPrecio}`;
        totalPrecioDiv.appendChild(totalPrecioEl);
        carritoDiv.appendChild(totalPrecioDiv);
    }
}