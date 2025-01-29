We could use [[markdown/short_notes.go 1/data-types/slice/variadic`...`]] to add some content dinamically
```go
func append(slice []Type, elems ...Type) []Type
```

- **`slice`**: The original slice to which elements will be added.
- `[]Type` the type of the slice you just passed
- **`elems ...Type`**: A variadic parameter that allows you to specify one or more elements to append.
- **Return Value**: A new slice that contains the original elements plus the appended ones.
If we pass the underliyng array stranger things will happen.
```go
func main() {
    original := make([]int, 3, 5) // Length 3, capacity 5
    original[0] = 1
    original[1] = 2
    original[2] = 3

    fmt.Println("Before append:", original, len(original), cap(original))

    // Append a single element (fits in the current capacity)
    updated := append(original, 4)
    fmt.Println("After append (within capacity):", updated, len(updated), cap(updated)) //Before append: [1 2 3] 3 5

    // Append more elements (exceeds current capacity)
    updated = append(updated, 5, 6, 7)
    fmt.Println("After append (new array):", updated, len(updated), cap(updated)) // After append (within capacity): [1 2 3 4] 4 5
}

```

#### Exceed the capabillity
When you exceed the capability of the array a new backing array it's created
1. You initialize `a`:
    
    ```go
    a := make([]int, 3)
    ```
    
    This creates a slice `a` with:
    
    - **Length**: 3
    - **Capacity**: 3
    - **Backing array**: `[0, 0, 0]`
2. You append to `a` to create `b`:
    
    ```go
    b := append(a, 4)
    ```
    
    Since the length of `a` equals its capacity (both are 3), `append` creates a new backing array, copies `[0, 0, 0]` into it, and appends `4`. The result is:
    
    - `b`: `[0, 0, 0, 4]`
    
    The original `a` is unaffected:
    
    - `a`: `[0, 0, 0]`
3. You append to `a` to create `c`:
    
    ```go
    c := append(a, 5)
    ```
    
    Again, since `a` was at full capacity, `append` creates another new backing array for `c`:
    
    - `c`: `[0, 0, 0, 5]`
    
    The original `a` remains:
    
    - `a`: `[0, 0, 0]`
    
    Now, `b` and `c` have different backing arrays, and changes to `b` or `c` do not affect `a`.
    
4. Addresses differ:
    
    ```go
    fmt.Println("addr of b:", &b[0])
    fmt.Println("addr of c:", &c[0])
    ```
    
    The addresses of `b` and `c` differ because `append` created new backing arrays for both.

#### Overwriting indexes
**`append` always adds elements starting at the next available index after the current length of the slice**, if you don't specify the index you want to change it will be by default the last one the the length. 
When you don't exceed the capacity but yes does with the length you overwrite that index.
```go
i := make([]int, 3, 8)
fmt.Println("len of i:", len(i))
fmt.Println("cap of i:", cap(i))
// len of i: 3
// cap of i: 8

j := append(i, 4)
fmt.Println("appending 4 to j from i")
fmt.Println("j:", j)
fmt.Println("addr of j:", &j[0])
// appending 4 to j from i
// j: [0 0 0 4]
// addr of j: 0x454000

g := append(i, 5)
fmt.Println("appending 5 to g from i")
fmt.Println("addr of g:", &g[0])
fmt.Println("i:", i)
fmt.Println("j:", j)
fmt.Println("g:", g)
// appending 5 to g from i
// addr of g: 0x454000
// i: [0 0 0]
// j: [0 0 0 5]
// g: [0 0 0 5]
```

#### Takeaways
Again, to avoid bugs like this, you should always use the `append` function on the same slice the result is assigned to:
```go
mySlice := []int{1, 2, 3}
mySlice = append(mySlice, 4)
```
#### Changing an specifi index
You could change a specifi index with append
```go
matrix := [][]int{}
matrix = append(matrix, []int{1, 2, 3})  // First row
matrix = append(matrix, []int{4, 5, 6})  // Second row

// Update an element in the second row
matrix[1][1] = 10
fmt.Println(matrix) // Output: [[1 2 3] [4 10 6]]
```