const visitedCities = cities.map((city) => {
    if (city.isVisited) {
        return city.name + ' (Visitado)';
    } else {
        return city.name;
    }
});

console.log(visitedCities);
