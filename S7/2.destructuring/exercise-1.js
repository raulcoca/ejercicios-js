const game = {
    title: 'The last us 2',
    gender: ['action', 'zombie', 'survival'],
    year: 2020,
};

const { title, gender } = { ...game };

console.log(title);
console.log(gender);
