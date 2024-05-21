let button = document.createElement('button');
button.id = 'btnToClick';
button.textContent = 'Click aquí';

// Agregar el evento de click al botón
button.addEventListener('click', (evento) => {
    // Imprimir la información del evento en la consola
    console.log(evento);
});

// Agregar el botón al body del documento
document.body.appendChild(button);
