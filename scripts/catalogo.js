class Catalogo {
    constructor(carrito) {
        this.productos = [];
        this.carrito = carrito;
    }

    cargarProductos(data) {
        this.productos = data;
    }

    filtrarProductos(categoria) {
        if (categoria === '') {
            return this.productos;
        }
        return this.productos.filter(producto => producto.categoria === categoria);
    }

    mostrarProductos(categoria) {
        const catalogoDiv = document.getElementById('productos');
        // Limpiar el contenido actual
        catalogoDiv.innerHTML = '';
        
        const productosFiltrados = this.filtrarProductos(categoria);

        productosFiltrados.forEach(producto => {
            // Crear contenedor para cada producto
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');

            // Crear y configurar elementos para imagen, nombre, descripción y precio
            const imagenEl = document.createElement('img');
            imagenEl.src = producto.imagen;
            imagenEl.alt = producto.nombre;
            const nombreEl = document.createElement('h2');
            nombreEl.textContent = producto.nombre;
            const descripcionEl = document.createElement('p');
            descripcionEl.textContent = producto.descripcion;
            const precioEl = document.createElement('p');
            precioEl.textContent = `Precio: $${producto.precio}`;

            // Agregar boton del carrito
            const agregarBoton = document.createElement('button');
            agregarBoton.classList.add('btn', 'btn-outline-success');
            agregarBoton.textContent = 'Agregar al carrito';
            agregarBoton.addEventListener('click', () => {
                this.carrito.agregarProducto(producto);
            });

            // Agregar elementos al div del producto
            productoDiv.appendChild(imagenEl);
            productoDiv.appendChild(nombreEl);
            productoDiv.appendChild(descripcionEl);
            productoDiv.appendChild(precioEl);
            productoDiv.appendChild(agregarBoton);

            // Agregar el div del producto al contenedor del catálogo
            catalogoDiv.appendChild(productoDiv);
        });
    }
}