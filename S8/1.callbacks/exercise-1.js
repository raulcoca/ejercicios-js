const numbersList = [];

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function father(a, b, callback) {
    const result = callback(a, b);
    numbersList.push(result);
}

father(10, 5, sum);
father(20, 10, subtract);

console.log(numbersList);
