const grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
let total = 0;
let average = 0.0;

// column-wise computation
for (let row = 0; row < grades.length; row++) {

    for (let col = 0; col < grades[row].length; col++) {

        total += grades[row][col];

    }

    average = total / grades[row].length;

    console.log(`Student ${row + 1}: Average ${average.toFixed(2)}`);

    total = 0;
    average = 0.0;
}

console.log("\n");

// row-wise computation
for (let col = 0; col < grades.length; col++) {
    for (let row = 0; row < grades[col].length; row++) {
        total += grades[row][col];
    }

    average = total / grades[col].length;

    console.log(`Test ${col + 1} => Average ${average.toFixed(2)}`);

    total = 0;
    average = 0.0;
}