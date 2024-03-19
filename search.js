// utility function
function veryfy(test) {
    if (test !== "None") {
        return `Target element found at index ${test}`;
    }
    return `Target not found.`
}


// Linear Search

function linearSearch(array, target) {
    for (let item of array) {
        if (item === target) {
            return array.indexOf(item);
        }
    };

    return "None";
};

let testLinear = linearSearch([1, 2, 3, 4, 5, 6, 8], 5);
let linearResult = veryfy(testLinear);
console.log(linearResult);

testLinear = linearSearch([1, 2, 3, 4, 5, 6, 8], 20);
linearResult = veryfy(testLinear);
console.log(linearResult);


// Binary Search

function binarySearch(arr, target) {
    const array = arr.sort((a, b) => a - b);
    let first = 0, last = array.length - 1;

    while (first <= last) {
        let midPoint = Math.floor((first + last) / 2);

        if (array[midPoint] === target) {
            return midPoint;
        } else if (array[midPoint] < target) {
            first = midPoint + 1;
        } else {
            last = midPoint - 1;
        }
    }

    return "None";
};

let testBinary = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
let resultBinary = veryfy(testBinary);
console.log(resultBinary); // Output: Target found at index 6

// function recursiveBinarySearch(array, target) {
//     if (array.length === 0) return;
//     else {
//         // const array = arr.sort((a, b) => a - b);
//         let midPoint = Math.floor(array.length / 2);

//         if (array[midPoint] === target) {
//             return array.indexOf(target);
//         } else {
//             if (target > array[midPoint]) {
//                 return recursiveBinarySearch(array.slice(midPoint + 1), target);
//             } else {
//                 return recursiveBinarySearch(array.slice(0, midPoint - 1), target);
//             }
//         }
//     };
// }

// let testRecursiveBinary = recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
// let resultRecursiveBinary = veryfy(testRecursiveBinary);
// console.log(resultRecursiveBinary);