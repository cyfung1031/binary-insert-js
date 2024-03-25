"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryInsert = void 0;
/**
 * Takes in a __SORTED__ array and inserts the provided value into
 * the correct, sorted, position.
 * @param array the sorted array where the provided value needs to be inserted (in order)
 * @param insertValue value to be added to the array
 * @param comparator function that helps determine where to insert the value (
 */
function binaryInsert(array, insertValue, comparator) {
    /*
    * These two conditional statements are not required, but will avoid the
    * while loop below, potentially speeding up the insert by a decent amount.
    * */
    var left = 0;
    var right = array.length;
    var z;
    // Directly return if array is empty or the insertValue should be at the end
    if (right === 0 || (z = comparator(array[right - 1], insertValue)) <= 0) {
        array.push(insertValue);
        return array;
    }
    // Check if the insertValue should be at the beginning
    if ((right === 1 ? z : comparator(array[0], insertValue)) >= 0) {
        array.unshift(insertValue);
        return array;
    }
    ++left;
    --right;
    // Main binary search loop to find the insertion position
    while (left < right) {
        var mid = Math.floor((right + left) / 2);
        var compared = comparator(array[mid], insertValue);
        if (compared < 0) {
            left = mid + 1;
        }
        else if (compared > 0) {
            right = mid;
        }
        else {
            // If equal, insert at the mid position
            left = right = mid;
            break;
        }
    }
    // Insertion is always at the right position due to the nature of the binary search
    array.splice(right, 0, insertValue);
    return array;
}
exports.binaryInsert = binaryInsert;
