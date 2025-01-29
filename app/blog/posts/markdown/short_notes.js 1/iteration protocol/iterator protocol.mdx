https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol

It defines a standard way to produce a sequence of values.

An object is an iterator when it implements the `next()` method.
The `next()` method has two value.
### `next()`
This function accepts zero or more one argument If you try to iterate over the results it will throw a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) (`"iterator.next() returned a non-object value"`), to iterate over this see below.
##### [`done` Optional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#done)
This is a boolean that indicates if the next sequence is done. if the **current value** is present in the `next()` sequence it returns false, and if it not, slightly means that the sequence has finished, so the return value is true
##### [`value` Optional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#value)
The **current value** returned by the iterator


#### Example
We create a range where the number has a limit of 5 but starts in 1
```js
const createRangeIterator = (start, end) => {
    let current = start;

    // Return an object implementing the iterator protocol
    return {
        next() {
            if (current <= end) {
                return { value: current++, done: false };
            } else {
                return { value: undefined, done: true }; // Indicate the iteration is complete
            }
        }
    };
};

// Using the iterator
const range = createRangeIterator(1, 5);

console.log(range.next()); // { value: 1, done: false }
console.log(range.next()); // { value: 2, done: false }
console.log(range.next()); // { value: 3, done: false }
console.log(range.next()); // { value: 4, done: false }
console.log(range.next()); // { value: 5, done: false }
console.log(range.next()); // { value: undefined, done: true }
console.log(range.next()); // { value: undefined, done: true } - Always done now
```
-----
#### Return method
To use operations at the end of the iterator,  we could use the return method

##### [`return(value)` Optional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#returnvalue)
Return an object conforming to the iterator result. Usually mark the sequence as finish with `value` equal to the `value` passed in and `done` equal to `true`.

##### [`throw(exception)` Optional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#throwexception)
Throws an exception

```js
const createSafeRangeIterator = (start, end) => {
    let current = start;

    return {
        next() {
            if (current <= end) {
                return { value: current++, done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
        return(value) {
            console.log('Cleanup performed.');
            return { value, done: true }; // Marks the iterator as done
        },
        throw(error) {
            console.error('Iterator stopped due to an error:', error);
            return { value: undefined, done: true }; // Stop the iterator
        }
    };
};

// Create the iterator
const rangeIterator = createSafeRangeIterator(1, 5);

try {
    console.log(rangeIterator.next()); // { value: 1, done: false }
    console.log(rangeIterator.next()); // { value: 2, done: false }

    // Simulate stopping the iteration early
    console.log(rangeIterator.return('Manual stop')); // USE THE RETURN METHOD, { value: 'Manual stop', done: true }

    // Further calls to next() won't return valid values
    console.log(rangeIterator.next()); // { value: undefined, done: true }
} catch (error) {
    console.error(error);
}

try {
    console.log(rangeIterator.next()); // { value: 3, done: false }
    rangeIterator.throw(new Error('Something went wrong')); // Error logged, { value: undefined, done: true }
} catch (error) {
    console.error(error);
}
```

### To iterate over this
We should use the [[iterable protocol]] for iterate over this. So with `[Symbol.iterator]()` we invoke it:
```js
const createSafeRangeIterable = (start, end) => ({
    [Symbol.iterator]() {
        let current = start;
        return {
            next() {
                if (current <= end) {
                    return { value: current++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
            return() {
                console.log('Cleanup during for...of');
                return { value: undefined, done: true };
            }
        };
    }
});

const rangeIterable = createSafeRangeIterable(1, 5);

for (const value of rangeIterable) {
    console.log(value); // Logs 1, 2, 3
    if (value === 3) break; // Stops early, triggering return()
}
```
