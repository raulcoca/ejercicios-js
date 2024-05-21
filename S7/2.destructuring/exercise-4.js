const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] };

const { name, itv } = { ...car };

const [age1, age2, age3] = [...itv];

console.log(name);
console.log(itv);
console.log(age1);
console.log(age2);
console.log(age3);
