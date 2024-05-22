const userAnswers = [];

const confirmExample = (description) => {
    const confirmValue = confirm(description);
    userAnswers.push(confirmValue);
};

const promptExample = (description) => {
    const promptValue = prompt(description);
    userAnswers.push(promptValue);
};

const father = (description, callback) => {
    const result = callback(description);
    userAnswers.push(result);
};

father('¿Estás de acuerdo?', confirmExample);
father('Introduce tu nombre:', promptExample);

console.log(userAnswers); // Output: [true, 'Juan']
