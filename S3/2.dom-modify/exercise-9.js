let p = document.createElement('p');
p.textContent = 'Voy dentro!';

let divs = document.querySelectorAll('.fn-insert-here');

divs.forEach((div) => {
    div.appendChild(p.cloneNode(true));
});
