const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const getShuffledArray = (array = []) => {
    let arryClone = [...array]; //create a copy of the original array.
    let pointer = arryClone.length; //get the length of the array (15 in this case).
    let lastElement; //a placholder is neeeded when swaping element positions later on.
    
    while (pointer) { //while the pointer is over 0 the while loop will continue to iterate.
        let randomIdx = Math.floor(Math.random() * pointer); //generate a random number between 0 and the current pointers position (15, 14 ...).
        pointer-- // reduce the pointer(index) by one, until eventually you have cycled through the whole array.

        lastElement = arryClone[pointer]; //set the placeholder for the current pointed element.
        arryClone[pointer] = arryClone[randomIdx]; //swap the pointed element with a random element.
        arryClone[randomIdx] = lastElement; //set the random elements previous postion to the pointers element. 
    }

    return arryClone; // return the modified clone
}

console.log('Original Array: ', originalArray);
console.log('Shuffled Array: ',getShuffledArray(originalArray));