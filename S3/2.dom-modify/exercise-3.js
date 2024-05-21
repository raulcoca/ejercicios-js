let div = document.createElement('div');

for (let i = 0; i < 6; i++) {
    let p = document.createElement('p');
    p.textContent = 'p ' + (i + 1);
    div.appendChild(p);
}

document.body.appendChild(div);
