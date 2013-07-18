/*

index.js - merge sort

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

/*
The entire merge sort relies on divide-and-conquer strategy working with an
array and subdividing array[p..r] interval into array[p..q] and array[q+1..r]
intervals during the division phase, then merging them again in sorted order
across the interval array[p..r].
*/

var mergeSort = module.exports = function mergeSort (array, p, r, ascending) {
    ascending = (typeof ascending === "undefined") ? true : ascending;
    p = (typeof p === "undefined") ? 0 : p;
    r = (typeof r === "undefined") ? array.length - 1 : r;
    if (p < r) {
        var q = Math.floor((p + r) / 2);
        mergeSort(array, p, q, ascending);
        mergeSort(array, q + 1, r, ascending);
        merge(array, p, q, r, ascending);
    }
    return array;
};

var merge = function merge (array, p, q, r, ascending) {
    ascending = (typeof ascending === "undefined") ? true : ascending;
    var lengthLeftArray  = q - p + 1;
    var lengthRightArray = r - q; // r - (q + 1) + 1; reduces to r - q;
    var left = [];
    var right = [];
    for (var leftIndex = 0; leftIndex < lengthLeftArray; leftIndex++) {
        left.push(array[p + leftIndex]);
    }
    for (var rightIndex = 0; rightIndex < lengthRightArray; rightIndex++) {
        right.push(array[q + 1 + rightIndex]);
    }
    var takeFromLeftArray;
    for (var k = p; k < r + 1; k++) {
        if (left.length == 0) {
            takeFromLeftArray = false;
        } else if (right.length == 0) {
            takeFromLeftArray = true;
        } else if (ascending) {
            takeFromLeftArray = left[0] <= right[0];
        } else {
            takeFromLeftArray = left[0] >= right[0];
        }

        array[k] = takeFromLeftArray ? left.shift() : right.shift();        
    }
}