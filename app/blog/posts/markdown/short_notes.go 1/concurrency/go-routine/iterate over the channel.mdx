`for textByte := range textCh`

Iterate over textCh, where each element contain a byte from the whole channel. If we want to iterate over two channels or mor at the same time, we could include the initialization inside the loop, without needing of nesting loops:
```go
func crypt(textCh, keyCh <-chan byte, result chan<- byte) {

    for keyByte := range keyCh {
        textByte, ok := <-textCh
        if !ok {
            break
        }
        xored := keyByte ^ textByte
        result <- xored
    }

    close(result)
```
Here we are fetching text channel in spite of just iterating over one channel
