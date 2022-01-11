//Generate an array of numbers between a start & stop point
function numberRange(start, stop) {
    let numArray = [];

    if (typeof start !== 'number' || typeof stop !== 'number') {
        throw new TypeError('Start & Stop arguments should be a number')
    }

    if (stop < start) {
        throw new RangeError('First argument must be less than than second!')
    }

    for (let i = start; i <= stop; i++) {
        numArray.push(i);
    }

    return numArray;
}

module.exports = numberRange;