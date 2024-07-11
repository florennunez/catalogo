class Producto {
    constructor(nombre, categoria, imagen, descripcion, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

/* Para consultar: MODAL
//boton modal
            const modalDescripcion = document.createElement('button');
            modalDescripcion.classList.add('btn');
            modalDescripcion.classList.add('btn-outline-dark');
            modalDescripcion.classList.add('m-2');
            modalDescripcion.textContent = 'Ver más';
            modalDescripcion.setAttribute('data-bs-toggle', 'modal');
            modalDescripcion.setAttribute('data-bs-target', '#modalDescripcion');
            //funcion del modal
            modalDescripcion.addEventListener('click', () => {
                // Crear el modal
                const modal = document.createElement('div');
                modal.classList.add('modal');
                modal.setAttribute('tabindex', '-1');
                modal.setAttribute('role', 'dialog');
                modal.setAttribute('id', 'modalDescripcion');

                //Crear el dialogo del modal
                const modalDialog = document.createElement('div');
                modalDialog.classList.add('modal-dialog');
                modalDialog.setAttribute('role', 'document');
                modal.appendChild(modalDialog);

                //Crear el contenido del modal
                const modalContent = document.createElement('div');
                modalContent.classList.add('modal-content');
                modalDialog.appendChild(modalContent);

                //Crear el header del modal
                const modalHeader = document.createElement('div');
                modalHeader.classList.add('modal-header');
                modalContent.appendChild(modalHeader);

                //Crear el titulo del modal
                const modalTitle = document.createElement('h5');
                modalTitle.classList.add('modal-title');
                modalTitle.textContent = producto.nombre;
                modalHeader.appendChild(modalTitle);

                const closeButton = document.createElement('button');
                closeButton.type = 'button';
                closeButton.classList.add('btn-close');
                closeButton.setAttribute('data-bs-dismiss', 'modal');
                closeButton.setAttribute('aria-label', 'Close');
                modalHeader.appendChild(closeButton);

                // Crear el cuerpo del modal
                const modalBody = document.createElement('div');
                modalBody.classList.add('modal-body');
                const modalText = document.createElement('p');
                modalText.textContent = producto.descripcion;
                modalBody.appendChild(modalText);
                modalContent.appendChild(modalBody);

                            // Crear el footer del modal
                const modalFooter = document.createElement('div');
                modalFooter.classList.add('modal-footer');
                modalContent.appendChild(modalFooter);

                const closeButtonFooter = document.createElement('button');
                closeButtonFooter.type = 'button';
                closeButtonFooter.classList.add('btn', 'btn-secondary');
                closeButtonFooter.setAttribute('data-bs-dismiss', 'modal');
                closeButtonFooter.textContent = 'Close';
                modalFooter.appendChild(closeButtonFooter);

                // Agregar el modal al DOM, por ejemplo, al final del body o cerca del elemento del producto
                document.body.appendChild(modal);
            });
            
            
            */