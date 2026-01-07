const points = [40, 100, 1, 5, 25, 10, 11, 22, 33, 44, -1, -5];

function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
console.log("The Smallest Number is " + myArrayMin(points));

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
console.log("The Bigest Number is " + myArrayMax(points));

const cars = [
    {
        name: "Volvo",
        price: 200000,
        color: "black",
        year: 2016
    },
    {
        name: "BMW",
        price: 150000,
        color: "red",
        year: 2022
    },
    {
        name: "Audi",
        price: 180000,
        color: "blue",
        year: 2020
    }
];
cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
});
console.log(cars);

const myArr = [
    { name: "x00", price: 100 },
    { name: "x01", price: 100 },
    { name: "x02", price: 100 },
    { name: "x03", price: 100 },
    { name: "x04", price: 100 },
    { name: "x05", price: 100 }
];

myArr.sort((p1, p2) => {
    if (p1.price < p2.price) return -1;
    if (p1.price > p2.price) return 1;
    return 0;
});

let txt = "";
myArr.forEach(myFunction);
function myFunction(value) {
    txt += value.name + " " + value.price + "<br>";
}
document.getElementById("demo").innerHTML = txt;
