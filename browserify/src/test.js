/**
 * Created by nemotan on 16/12/7.
 */

var uniq = require('uniq');
var nums = [ 5, 2, 1, 3, 2, 5, 4, 2, 0, 1 ];
console.log(uniq(nums));

function Un(nums){
    return uniq(nums);
}

module.exports = Un;

