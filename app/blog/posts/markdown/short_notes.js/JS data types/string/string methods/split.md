https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Takes a pattern and divide the string for each time this patters gets repeated, without including the pattern. 

#### Example
```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
// Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
```
### [Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#parameters)

#### [`separator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#separator)
The separator is the pattern where to split the array

#### [`limit`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#limit)
A positive number indicating the number of indexes to apply the splitting

### [Return value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#return_value)

An [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of strings, split at each point where the `separator` occurs in the given string.

### Description
If the pattarn isn't in the string, it returns the entire string, if the pattern appears in the string is included in the array returned as a zero value
#### Example:
```js
const paragraph = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number Some function may be expecting to utilize an number as as argunment, so in JavaScript the values are forcibly turned into another data types, example where a value is forced as a number:"

  

const regex = /https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/g;
  
console.log(paragraph.split((regex)))
// out: 
[
  '',  // the pattern is not included
  ' Some function may be expecting to utilize an number as as argunment, so in JavaScript the values are forcibly turned into another data types, example where a value is forced as a number:'
]
```