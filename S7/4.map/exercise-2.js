const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' },
];

let userCopy = users.map((user) => {
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    } else {
        return user.name;
    }
});

console.log(userCopy);
