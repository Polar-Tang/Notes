Recursion are the self invoked function, which are usually implemented to solve subproblems

#### Example
```js
const recursionTill100 = (int: number ) => {

if (int < 100){
	console.log("int is less ", int)
	int++
	recursionTill100(int)
}
	return
}

console.log(recursionTill100(0))
```
