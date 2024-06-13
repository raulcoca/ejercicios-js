//Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

const runTimeOut = async () => {
    await new Promise((resolve) => {
        setTimeout(function () {
            resolve(console.log('Time out!'));
        }, 2000);
    });
};

runTimeOut();
