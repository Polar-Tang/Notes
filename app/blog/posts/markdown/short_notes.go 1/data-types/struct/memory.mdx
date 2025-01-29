The [[markdown/short_notes.go 1/data-types/struct/struct]] in go occupy memory. The fields are placed right after another as defined in the struct.
Take this **example**:
```go
type stats struct {
	Reach    uint16 // 2 bytes
	NumPosts uint8  // 1 byte
	NumLikes uint8  // 1 byte
}
```
We know the wuantity of bytes (8 bits) ocuppy more memory than others
- `uint8` (1 byte) can be stored at any byte boundary.
- `uint16` (2 bytes) is faster to access if it is stored at an even byte boundary (divisible by 2).
- `uint32` (4 bytes) is fastest if stored at a byte boundary divisible by 4, and so on.
So there's a **natural boundary rules** where the byte should start from a number divisible:

- A `uint16` (2 bytes) should be at an address divisible by 2 (e.g., byte 0, 2, 4, ...).
- A `uint32` (4 bytes) should be at an address divisible by 4 (e.g., byte 0, 4, 8, ...).
- A `uint64` (8 bytes) should be at an address divisible by 8.

If data is not naturally aligned, the compiler inserts **padding bytes** to ensure proper alignment. 
The order in a struct really matters:
```go
type stats struct {
	NumPosts uint8  // 1 byte
	Reach    uint16 // 2 bytes
	NumLikes uint8  // 1 byte
}
```
Layout:

1. `NumPosts` (1 byte) starts at **byte 0**.
2. **Padding** (1 byte) is added at **byte 1** to align `Reach` to the nearest even byte (byte 2) because `Reach` is a `uint16` (2-byte alignment).
3. `Reach` (2 bytes) starts at **byte 2**.
4. `NumLikes` (1 byte) starts at **byte 4**.
5. **Padding** (1 byte) is added at **byte 5** to make the struct size a multiple of 2 (to maintain alignment for future array accesses or other optimizations).

### Takeaways
So it's important to order fields from the bigger to the smallest
##### Reflect
You could use the reflect package to se the type of a data
```go
typ := reflect.TypeOf(stats{})
fmt.Printf("Struct is %d bytes\n", typ.Size())
```
##### Unsafe

```go
package main

import (
	"fmt"
	"unsafe"
)

type statsOptimized struct {
	Reach    uint16
	NumPosts uint8
	NumLikes uint8
}

type statsNonOptimized struct {
	NumPosts uint8
	Reach    uint16
	NumLikes uint8
}

func main() {
	fmt.Println("Size of optimized struct:", unsafe.Sizeof(statsOptimized{}))    // 4 bytes
	fmt.Println("Size of non-optimized struct:", unsafe.Sizeof(statsNonOptimized{})) // 6 bytes
}

```