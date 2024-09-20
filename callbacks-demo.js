
// function fetchFromApiCB(successFunction) {
//     // usually a call is made to the server
//     setTimeout(() => {
//         successFunction("some data in callback");
//     }, 1);
// }

// function fetchFromAPI() {
//     return "some data";
// }

// const data1 = fetchFromAPI();
// console.log(data1);

// fetchFromApiCB((data) => {
//     console.log(data);
// });

// console.log("done");

// function customForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i);
//     }
// }

// const myArray = [
//     "ram",
//     "sita",
//     "ravan",
//     "laxman",
//     "laxman",
//     "laxman",
//     "laxman",
//     "laxman",
//     "laxman",
//     "laxman",
//     "laxman",
// ];

// customForEach(myArray, (item, index) => {
//     console.log(item, index);
// });

// console.log("bahira")

// setTimeout(() => {
//     console.log("timeout vitra ko code")
// });

// console.log("don");


function fetchFromApiPromise() {
    return new Promise((resol, reject) => {
        setTimeout(() => {
            reject("some data")
        }, 1)
    })
}

fetchFromApiPromise()
    .then((data) => {
        console.log(data);
    });

async function fetchAndDisplayData () {
    try {
        const x = y + z;
        const newData = await fetchFromApiPromise();
        
        console.log("await pachi");
        console.log(newData);
    } catch (e) {
        console.log("error aayo");
        console.log(e);
    }
}

fetchAndDisplayData()