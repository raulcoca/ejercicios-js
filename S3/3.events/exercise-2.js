let input = document.querySelector('input');

input.addEventListener('focus', (evento) => {
    console.log(evento.target.value);
});
