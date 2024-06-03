const baseUrl = 'https://api.nationalize.io?name=';
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', function () {
    const name = input.value;
    fetch(baseUrl + name)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error:', error));
});
