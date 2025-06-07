/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

var promiseAll = function(functions) {
    let arr = [];
    let resolveCount = 0;
    return new Promise((resolve, reject) =>{
        functions.forEach((ele, index) => {
            ele().then((value) => {
                arr[index] = value;
                resolveCount++;
                if(resolveCount == functions.length){
                    resolve(arr);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
