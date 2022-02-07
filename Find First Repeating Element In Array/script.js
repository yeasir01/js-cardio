const intArry = [1, 2, 3, 10, 4, 8, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const stringArry = ["cat", "dog", "mongoose", "snake", "mongoose", "snake"];

function getFirstRepeatingElement(arry = []) {
    let currentIndex = 0;
    let duplicate;

    while (!duplicate) {
        for (let i = currentIndex + 1; i < arry.length; i++){
            if (arry[currentIndex] === arry[i]){
                duplicate = arry[i];
                break;
            }
        }
        currentIndex++;
    }

    return duplicate;
};

console.log(getFirstRepeatingElement(intArry)); //prints 10
console.log(getFirstRepeatingElement(stringArry)); //prints "mongoose"