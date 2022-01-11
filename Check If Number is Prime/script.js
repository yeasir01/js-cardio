function isPrime1(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); //returns the square root of the passed value
    
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

console.log(isPrime1(3)); //Output: True
console.log(isPrime1(7)); //Output: True
console.log(isPrime1(6)); //Output: False