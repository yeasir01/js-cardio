//Generate an array of numbers between a start & stop point
function numRangeArray(start, stop) {
    let numArray = [];

    if (typeof start !== 'number' || typeof stop !== 'number') {
        return new TypeError('Start & Stop arguments should be a number')
    }

    if (stop < start) {
        return new RangeError('First argument must be less than than second argument!')
    }

    for (let i = start; i <= stop; i++) {
        numArray.push(i);
    }

    return numArray;
}

console.log(numRangeArray(1,10));
//Expected [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]