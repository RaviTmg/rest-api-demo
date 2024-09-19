
function fetchFromApiCB(successFunction) {
    // usually a call is made to the server
    setTimeout(() => {
        successFunction("some data in callback");
    }, 1);
}

function fetchFromAPI() {
    return "some data";
}

const data1 = fetchFromAPI();
console.log(data1);

fetchFromApiCB((data) => {
    console.log(data);
});

console.log("done");

function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

const myArray = [
    "ram",
    "sita",
    "ravan",
    "laxman",
    "laxman",
    "laxman",
    "laxman",
    "laxman",
    "laxman",
    "laxman",
    "laxman",
];

customForEach(myArray, (item, index) => {
    console.log(item, index);
});

console.log("bahira")

setTimeout(() => {
    console.log("timeout vitra ko code")
});

console.log("don");


function fetchFromApiPromise() {
    return new Promise((resol, reject) => {
        setTimeout(() => {
            resol("some data")
        }, 1)
    })
}

const promise = fetchFromApiPromise()
    .then((data) => {

        console.log(data);
        return "modified promise data"
    })
    .then((data2) => {
        console.log(data2);
    })
    .catch((e) => {
        console.log("error block")
        console.log(e);
    })


function fetchFromApi2Promise() {
    return new Promise((resol, reject) => {
        setTimeout(() => {
            resol("some data 2")
        }, 1)
    })
}

Promise.all([
    fetchFromApiPromise(),
    fetchFromApi2Promise(),
]).then((data) => {
    console.log(data)
    return data[0]
}).then ((data2) => {
    console.log(data2)
}).catch(e => {
    console.log(e);
})