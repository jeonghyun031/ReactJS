const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
    text += person[x];
}

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    txt += numbers[x];
}

const number2 = [45, 4, 9, 16, 25];

let txt2 = "";
number2.forEach(myFunction);

function myFunction(value, index, array) {
    txt2 += value;
}