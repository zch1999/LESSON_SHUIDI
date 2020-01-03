'use strict'

function findIndex(array, predicate, context) {
    // console.log(array.length);
    for (var i = 0; i < array.length; i++) {
        if (predicate.call(context, array[i], i)) {
            return i;
            break;
        }
    }
    return -1;
}

console.log(findIndex([1, 2, 3, 4], function(item, i) {
    // console.log(this);
    // console.log(array.length);
    // for (let i = 0; i < this.length; i++) {
    if (item == 3) {
        return true;
    } else {
        return false;
    }
    // }
}, [1, 2, 3, 4]))