const baseUrl = 'https://api.nationalize.io?name=';
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', function () {
    const name = input.value;
    fetch(baseUrl + name)
        .then((response) => response.json())
        .then((data) => {
            data.country.forEach((item) => {
                const p = document.createElement('p');
                p.textContent = `El nombre ${data.name} tiene un ${(
                    item.probability * 100
                ).toFixed(2)} porciento de ser de ${item.country_id}`;
                document.body.appendChild(p);
            });
        })
        .catch((error) => console.error('Error:', error));
});
