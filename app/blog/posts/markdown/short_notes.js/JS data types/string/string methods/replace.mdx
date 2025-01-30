https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

Search for a pattern, it could be a string or a regexp, and replace it for other.

>**This method does not mutate the string value it's called on. It returns a new string.his method does not mutate the string value it's called on. It returns a new string.**

```js
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
```
### Syntax
```js
replace(pattern, replacement)
```

### [Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#parameters)

#### [`pattern`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#pattern)

THis is the pattern to look for, it could be string or a regex. If the value isn't a string then the method apply [[markdown/short_notes.js/Implicit coercion]] to turn it into a string

#### [`replacement`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#replacement)

Can be a string or a function.

- If it's a string, it will replace the substring matched by `pattern`. 
- If it's a **function**, the return value will be used

### [Return value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value)

A new string, with one, some, or all matches of the pattern replaced by the specified replacement.
### Patterns
If you don't provide a pattern the first character we'll be replaced
```js
"xxx".replace("", "_"); // "_xxx"
```
When you use a **regexp** you should use with the `g` flag to replace more than once
If some group in the [[disjunction]] doesn't existing, it will be ignored
Also there are special character which serve of special replacements:

#### `$$`
Replace a value with a dolar sign.
```js
const text = "Total price is 100.";

const result = text.replace(/\d+/, "$$$$"); // Replace the number with "$$"
console.log(result);
// Output: "Total price is $$."
```

#### `$&`
Inserts the exact match of the string that matches the regex
```js
const text = "I love JavaScript.";

const result = text.replace(/JavaScript/, "TypeScript ($&)");
console.log(result);
// Output: "I love TypeScript (JavaScript)."
```

#### `$``
Inserts part of the string before the string that match
```js
const text = "The quick brown fox jumps over the lazy dog.";

const result = text.replace(/fox/, "cat (`$`)");
console.log(result);
// Output: "The quick brown cat (The quick brown ) jumps over the lazy dog."
```

#### `$'`
Inserts part of the string after the string that match
```js
const text = "The quick brown fox jumps over the lazy dog.";

const result = text.replace(/fox/, "cat ($')");
console.log(result);
// Output: "The quick brown cat ( jumps over the lazy dog.) jumps over the lazy dog."
```

#### `$n`
This is kinda a formating and insert the captured value
```js
const text = "Name: John, Age: 30";

const result = text.replace(/Name: (\w+), Age: (\d+)/, "Age: $2, Name: $1");
console.log(result);
// Output: "Age: 30, Name: John"
```

#### `$<Name>`
This is naming using captured groups
```js
const text = "Name: John, Age: 30";

const result = text.replace(
    /Name: (?<name>\w+), Age: (?<age>\d+)/,
    "Age: $<age>, Name: $<name>"
);
console.log(result);
// Output: "Age: 30, Name: John"
```
### function
The magic start when we use the function option combined with the [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), *You can specify a function as the second parameter* and its returned value will be used as the replacement of the string.
This function has the following signature:
```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```
#### [`match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#match)
This is the matched substring

#### [`p1`, `p2`, …, `pN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#p1)

Are the capture group got from the regex. For example, if the `pattern` is `/(\a+)(\b+)/`, then `p1` is the match for `\a+`, and `p2` is the match for `\b+`.

#### [`offset`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#offset)
Is the index of the match in the string.
```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```
#### [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#string)
The whole string being examined.

#### [`groups`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#groups)
AN object containing the regex groups

### Examples
Utilizing almost all the values, we could do this:
```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

```js
const text = "The USA and UK are leading countries in AI and ML.";

const abbreviations = {
    USA: "United States of America",
    UK: "United Kingdom",
    AI: "Artificial Intelligence",
    ML: "Machine Learning"
};

// Replace abbreviations with full forms using a function
const result = text.replace(/\b(USA|UK|AI|ML)\b/g, (match) => {
    return abbreviations[match]; // Lookup the full form from the dictionary
});

console.log(result);
// Output: "The United States of America and United Kingdom are leading countries in Artificial Intelligence and Machine Learning."
```