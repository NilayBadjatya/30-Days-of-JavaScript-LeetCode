/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let orig = init;
    let obj = {
        increment : function(){
            init++;
            return init;
        },
        reset : function(){
            init = orig;
            return init;
        },
        decrement : function(){
            init--;
            return init;
        }
    }
    return obj;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
