module.exports = function reverse (n) {
    n = Math.abs(n);
    let reverseNum = 0; 
    
    while (n > 0) {
      reverseNum = reverseNum * 10 + n % 10;
      n = Math.floor(n / 10);
    }
    return reverseNum;
}
