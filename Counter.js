/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = 0;
    return () => {
        let val = n + counter;
        console.log(counter);
        counter++;
        return val;
    }
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
