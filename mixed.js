const greeting = "Hello";

// From array.js
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

// From objectmethod.js
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    // Mixing in the data from array.js
    points: [40, 100, 1, 5, 25, 10, 11, 22, 33, 44],

    // Method from objectmethod.js
    getName: function () {
        return this.firstName + " " + this.lastName;
    },

    // New method utilizing the mixed functions
    showStats: function () {
        const minScore = myArrayMin(this.points);
        const maxScore = myArrayMax(this.points);

        console.log(`${greeting}, ${this.getName()}!`);
        console.log(`Your stats based on ID ${this.id}:`);
        console.log(`- Minimum Score: ${minScore}`);
        console.log(`- Maximum Score: ${maxScore}`);
    }
};

// Execute the mixed functionality
person.showStats();
