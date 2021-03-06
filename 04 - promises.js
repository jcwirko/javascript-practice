const fechaData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 2000);
    });
    return promise;
};

setTimeout(() => {
    console.log('Final Draw');
    fechaData().then(done => {
        console.log(done);
    });
});

console.log('Hi');