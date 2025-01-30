This could happen when the index exceeds the limit of a slice.
I mean whatever slice.
**For example** when you try to access to an index that doens't exists:
```go
package main

func padWithZeros(block []byte, desiredSize int) []byte {
    sliceCero := make([]byte, desiredSize)
    for i := range sliceCero {
        if block[i] != 0 {
            sliceCero[i] = byte(0)
        }
        sliceCero[i] = block[i]
    }

    return sliceCero
}
```
Here i'm trying to assing `block[i]` but if the desiredSize it's bigger than the length of the block i will trying to access to an index that doesn't exist.
The approach should be different:
```go
package main

func padWithZeros(block []byte, desiredSize int) []byte {
    sliceCero := make([]byte, desiredSize)
    for i := range sliceCero {
        if i < len(block) {
            sliceCero[i] = block[i]
        } else {
            sliceCero[i] = byte(0)
        }

    }

    return sliceCero
}
```
