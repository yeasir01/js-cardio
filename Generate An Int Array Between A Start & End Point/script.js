//Generate an array of numbers between a start & end point
function numRangeArray(start, end) {
    let numArray = [];

    if (typeof start !== 'number' || typeof end !== 'number') {
        return new TypeError('Start & end arguments should be a number')
    }

    if (end < start) {
        return new RangeError('First argument must be less than than second argument!')
    }

    for (let i = start; i <= end; i++) {
        numArray.push(i);
    }

    return numArray;
}

console.log(numRangeArray(1,10));
//Expected [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]