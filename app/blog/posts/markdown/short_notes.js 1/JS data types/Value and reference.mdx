### Value and reference

#### 1. **Assigning by Value**

When a variable is **assigned by value**, it means that the actual data (the value) is copied into the new variable. So, both variables hold separate copies of the data. Changes to one variable **do not affect** the other.

In JavaScript, **primitive types** (e.g., numbers, strings, booleans, `null`, `undefined`, `symbol`, `bigint`) are assigned by value.

#### Example of Value Assignment:
```javascript
let x = 10;
let y = x;  // y gets a *copy* of x's value

y = 20;

console.log(x);  // Output: 10 (x is unchanged)
console.log(y);  // Output: 20 (y is now 20)
```

In this case:
- `x` holds the value `10`.
- `y` gets a copy of `x`’s value, so when we change `y`, it does **not affect** `x`.


#### Assigning by reference
When you assign by reference it means that it isn't a copy of a value, insted, they reference to the same **space in the memory**
```js
let obj1 = { name: "Alice" };
let obj2 = obj1;  // obj2 points to the same object as obj1

obj2.name = "Bob";

console.log(obj1.name);  // Output: "Bob" (both obj1 and obj2 reference the same object)
console.log(obj2.name);  // Output: "Bob"
```

In JavaScript, **functions** themselves are always passed **by reference**, meaning when you pass a function to another function or assign it to a variable, you’re passing a reference to that function (not a copy of it). However, the **parameters** passed to functions can either be passed **by value** (for primitives) or **by reference** (for objects/arrays).

#### How to Call a Function:
In functios, the data are always passed by reference. However, the **parameters** passed to functions can either be passed **by value** (for primitives) or **by reference** (for objects/arrays).

1. **Calling by Value (Primitive Types)**:
   When you pass **primitive types** (like `number`, `string`, `boolean`) to a function, they are passed **by value**. This means the function gets a **copy** of the value, and modifying the parameter inside the function does **not** affect the original variable.

   Example:
   ```javascript
   const programa1 = (param1 = 0, param2 = 0) => { 
     return param1 + param2;  // The function works with copies of param1 and param2
   }

   console.log(programa1(21, 22));  // Output: 43

   let param1 = 34;
   let param2 = 2;
   console.log(programa1(param1, param2));  // Output: 36
   console.log(programa1(2, 2)) // Output: 4
   ```

   In this case, `param1` and `param2` are passed by value. If you modify `param1` or `param2` inside the `programa1` function, it won’t affect the original variables.
   Functions by default return undefined, so to avoid this, whenever you declared a variable, or a params must be initialized, in this case is initialized with 0 
1. **Calling by Reference (Objects/Arrays)**:
   When you pass **objects** or **arrays** as arguments, they are passed **by reference**. This means the function receives a **reference to the original object**, so if the object is modified inside the function, those changes will be reflected outside the function as well.

   Example:
   ```javascript
   const programa2 = (arr) => {
     arr.push(5);  // Modifies the original array
     return arr;
   }

   let numbers = [1, 2, 3];
   console.log(programa2(numbers));  // Output: [1, 2, 3, 5]
   console.log(numbers);  // Output: [1, 2, 3, 5] (numbers was modified by reference)
   ```

   In this case, the array `numbers` was passed by reference. Changes made to `arr` inside the function affect `numbers` outside the function.

### Array copies
#### **Shallow copie**
```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };  // Shallow copy

obj2.b.c = 3;  // Changes obj1.b.c as well

console.log(obj1.b.c);  // Output: 3
```
#### **Deep copies**
```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = JSON.parse(JSON.stringify(obj1));  // Deep copy

obj2.b.c = 3;  // Does not affect obj1

console.log(obj1.b.c);  // Output: 2
```
###  **Assigning by Reference**

When a variable is **assigned by reference**, the new variable doesn’t get a copy of the data. Instead, both variables point to the **same object in memory**. If you change the data in one variable, the other will reflect those changes, because they reference the **same memory location**.

In JavaScript, **objects** (e.g., arrays, functions, objects) are assigned by reference.

#### Example of Reference Assignment:
```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1;  // obj2 points to the same object as obj1

obj2.name = "Bob";

console.log(obj1.name);  // Output: "Bob" (both obj1 and obj2 reference the same object)
console.log(obj2.name);  // Output: "Bob"
```

In this case:
- `obj1` and `obj2` reference the **same object**.
- Changing `obj2.name` also changes `obj1.name`, because they both refer to the same object in memory.

#### **Key Differences Between Value and Reference Assignment**

| Aspect               | **Assigned by Value**                                 | **Assigned by Reference**                        |
|----------------------|-------------------------------------------------------|-------------------------------------------------|
| **Data Types**       | Primitives (numbers, strings, booleans, `null`, etc.) | Objects (arrays, objects, functions)            |
| **Memory**           | Stores a **copy** of the value                        | Stores a **reference** (memory address)         |
| **Effect of Changes**| Changes to one variable **do not affect** the other   | Changes to one variable **affect** the other    |
| **Example**          | `let a = 5; let b = a;`                               | `let obj1 = { }; let obj2 = obj1;`              |
