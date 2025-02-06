https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
Maps are objects that holds key pair values, and remember taht injection in order of the value. The values are set with `.set`, and then retrieved by `.get`
```js
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2
```

#### Description
Map set unreapeatable value that could be retrieved by [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) and this return the values.
##### Object vs Map
They are fairly similar to an object, and object many times is used as a map, but there are several differences:
- Key in objects could colide
- The keys are unfixed, and could be victim of [object injection attacks](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md)
- In object the key  must be either a [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or a [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), in spite of map that could be any data type