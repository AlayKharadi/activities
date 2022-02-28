const a = new Promise((resolve, reject) => {
    var x = 0;
    if(x === 0){
        resolve(x);
    }else{
        var y = new Error(x);
        reject(y);
        throw y;
    }
});

a.then(data => {
    console.log("output-" + data)
}).catch(error => {
    console.log(error)
});

function wait(value, ms){
    console.log(`waited for ${ms} seconds...`);
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

const b = wait(5, 5000).then(() => {
    return wait(5, 4000);
}).then(() => {
    return wait(5, 3000);
}).then(() => {
    return wait(5, 2000);
}).then(() => {
    return wait(5, 1000);
}).then(() => {
    console.log("done...");
})

Promise.all([wait(4, 4000), wait(5, 4000), wait(6, 4000)]).then(value => console.log(value))

Promise.all([wait(4, 1000), wait(5, 1000), "hello world"]).then(value => console.log(value))

Promise.race([wait(4, 4000), wait(5, 4000), wait(6, 4000)]).then(value => console.log(value))

wait(4, 4000).then(value => console.log(value)).catch(error => console.log(error)).finally(() => console.log("Done......"))

async function output(){
    const a = await new Promise((resolve, reject) => {
        let x = 0;
        if(x === 0){
            resolve(4);
        }else{
            reject(7);
        }
    })
    console.log(a);
}

output();