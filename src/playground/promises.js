const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is first resolved data');
        // reject('It is totally Wrong')
    }, 5000)
});

console.log('before');
promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is second resolved data');
        }, 5000)
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log(error)
});

// promise.then((data) => {
//     console.log('2', data);
// });

console.log('after');