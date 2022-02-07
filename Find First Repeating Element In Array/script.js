const numbers = [1, 2, 3, 10, 4, 8, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const animals = ["cat", "dog", "mongoose", "snake", "mongoose", "snake"];
const norepeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function findFirstRepeatingElement(arry = []) {
    const set = new Set();

    for (let i = 0; i < arry.length; i++) {
        if (set.has(arry[i])) {
            return arry[i]
        } else {
            set.add(arry[i])
        }
    }

    return -1;
}

console.log(findFirstRepeatingElement(numbers)); //prints 8
console.log(findFirstRepeatingElement(animals)); //prints "mongoose"
console.log(findFirstRepeatingElement(norepeat)); //prints -1
