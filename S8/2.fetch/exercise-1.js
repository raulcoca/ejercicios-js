async function getUserData(name) {
    try {
        const response = await fetch(`https://api.agify.io?name=${name}`);
        const userData = await response.json();
        console.log(userData);
    } catch (error) {
        console.error('Error:', error);
    }
}

getUserData('michael');
