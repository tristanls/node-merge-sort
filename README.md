# merge-sort

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

Merge sort.

## Usage

```javascript
var mergeSort = require('merge-sort');
...
var ascending  = mergeSort(array);                              // sort ascending
var descending = mergeSort(array, undefined, undefined, false); // sort descending
```

_yes, the descending case is sort of crappy usage, I doubt anyone will use this code though :)_