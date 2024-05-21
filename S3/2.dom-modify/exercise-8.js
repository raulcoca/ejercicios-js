// Crear nuevo elemento p
let p = document.createElement('p');
p.textContent = 'Voy en medio!';

// Obtener el primer div
let div = document.querySelector('div');

// Insertar el nuevo elemento después del primer div
div.parentNode.insertBefore(p, div.nextSibling);
