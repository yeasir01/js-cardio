const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const getShuffledArray = (array = []) => {
    let arryCopy = [...array]; //create a copy of the original array.
    let lastIdx = arryCopy.length; //set the intial value to the length of the array (15 in this case).
    
    while (lastIdx) { //while the pointer is over 0 the while loop will continue to iterate.
        let randomIdx = Math.floor(Math.random() * lastIdx); //generate a random number between 0 - lastIdx (14, 13, 12...).
        lastIdx-- // reduce the lastIndex by one until, eventually you have cycled through the whole array backwards.
        
        let placeholder = arryCopy[lastIdx]; //set the placeholder for the current pointed element.

        arryCopy[lastIdx] = arryCopy[randomIdx]; //reassign the pointed element with a random element position.
        arryCopy[randomIdx] = placeholder; //set the random elements previous postion to the placholder element. 
    }

    return arryCopy; // return the modified clone
}

console.log('Original Array: ', originalArray);
console.log('Shuffled Array: ',getShuffledArray(originalArray));