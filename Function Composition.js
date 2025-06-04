/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(arr) {
    let n = arr.length;
    return function(x) {
        let val = x;
        for(let i = n-1; i >= 0; i--){
            x = arr[i](x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
