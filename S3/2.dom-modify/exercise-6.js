const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let list = document.createElement('ul');

apps.forEach((app) => {
    let li = document.createElement('li');
    li.textContent = app;
    list.appendChild(li);
});

document.body.appendChild(list);
