'use strict';

// 1. Paliandrome Checker
function palinadrome(str) {
    // Convert the string to lowercase
    const palString = str.toLowerCase();
    // Check it includes alphanumeric characters only
    //          match method returns an array
    const alphanumericOnly = palString.match(/[a-z0-9]/g);
    // We will compare original string with its reversed version

    return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');

};

// console.log(palinadrome('r__+a/C\|e Car'));

// 2. Convert to Roman Number

/*
M = 1000,
CM = 900
D = 500,
CD = 400
C = 100,
XC = 90,
L = 50,
XL = 40,
X = 10,
IX = 9,
V = 5,
IV = 4,
I = 1,

I. You can't write a symble 4 times consecutively:
=> 900 !== 'DCCCC' 🚫
=> 900 === 'CM' = 1000 - 100; ✅
=> 400 === 'CD'; ✅
=> 90 === 'XC'; ✅
=> 40 === 'XL'; ✅ (L - X);
...AND SO ON

*** A lower number preceded by a higher number means substraction
*/

function convertToRoman(num) {

    // Create roman number lookup table
    const romanNumTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    // Create roman numeral accumulator
    let accumulator = '';

    // Loop through lookup table
    for (const key in romanNumTable) {
        const numericValue = romanNumTable[key];

        // currentNumber <= num then substract currentNumber from
        // num. Add correct symbol to the accumulator
        while (numericValue <= num) {
            num -= numericValue;
            accumulator += key;
        }
    }


    // return the accumulator

    return accumulator;
}

// console.log(convertToRoman(3590));


// Caeser's Cipher

function rot13(str) {
    let decodedString = '';

    const alphabetFirst = 'abcdefghijklm'.toUpperCase();
    const alphabetLast = 'nopqrstuvwxyz'.toUpperCase();

    for (let i = 0; i < str.length; i++) {

        const letterToDecode = str[i];

        let indexFirst = alphabetFirst.indexOf(letterToDecode);
        let indexLast = alphabetLast.indexOf(letterToDecode);

        if (indexFirst >= 0) {
            decodedString += alphabetLast[indexFirst];
        } else if (indexLast >= 0) {
            decodedString += alphabetFirst[indexLast];
        } else {
            // In case of a space or any character
            decodedString += letterToDecode;
        }

    }

    return decodedString;
}

// console.log(rot13('SERR PBQR PNZC'));



// 4. Cash Register ///////

function checkCashRegister(price, cash, cid) {
    let change = (cash - price) * 100;
    let cidTotal = 0;

    for (const elem of cid) {
        cidTotal += elem[1] * 100;
    };

    if (change > cidTotal) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (change === cidTotal) {
        return { status: "CLOSED", change: cid };
    } else if (change < cidTotal) {

        let result = [];

        cid = cid.reverse();

        const currencyUnits = {
            'ONE HUNDRED': 10000,
            'TWENTY': 2000,
            'TEN': 1000,
            'FIVE': 500,
            'ONE': 100,
            'QUARTER': 25,
            'DIME': 10,
            'NICKEL': 5,
            'PENNY': 1,
        }

        for (let [cur, val] of cid) {

            let moneyHolder = [cur, 0];

            val = val * 100;

            while (change >= currencyUnits[cur] && val > 0) {
                change -= currencyUnits[cur];

                // Delete change money from particular drawer
                val -= currencyUnits[cur];

                // Divde by 100 to get the exact result, as we have multiplied with hundred to avoid complexity.
                moneyHolder[1] += currencyUnits[cur] / 100;

            };

            if (moneyHolder[1] > 0) {
                result.push(moneyHolder);
            };

        }

        if (change > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };

        return { status: "OPEN", change: result }

    }

}



// While change is .5 then currencyUnit will be quarter, cause we do not have any currency that matches 50 (100 * 0.5)

// console.log(checkCashRegister(19.5, 20,
//     [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

function repeatedChar(str) {
    const charObj = {};
    let max = 0, maxChar = '';

    for (const char of str) {
        if (charObj[char]) charObj[char] += 1;
        else charObj[char] = 1;
    }

    for (let key in charObj) {
        if (charObj[key] > max) {
            max = charObj[key];
            maxChar = key;
        };
    }

    return maxChar;
}

// console.log(repeatedChar('aaabbbbbbcccccccccdddeefffffffffsssssssssefff'));

function breakArray(array, size) {
    let index = 0, result = [];

    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    };

    return result;
}

// console.log(breakArray([1, 2, 3, 4, 5], 3));

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    // OR

    // for (let i = 2; i < num / 2; i++) {
    //     if (num % i === 0) return false;
    // }

    return true;
};

// console.log(isPrime(15));

function checkPrime(num) {
    if (num <= 1) return "Not Prime";

    let c = 2;
    while (c < num) {
        if (num % c === 0) return "Not prime";
        c += 1;
    }

    return "Prime";
};

const resultPrime = checkPrime(17); // It has a linear runtime [O(n)];
// console.log(resultPrime);

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const index = Math.floor(Math.random() * arr.length);

        [arr[i], arr[index]] = [arr[index], arr[i]];
    }

    return arr;
};

const suffledArray = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(suffledArray);