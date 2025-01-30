By adding the label `loop:` before the `for` statement and using `break loop`, you explicitly tell Go to break out of that specific labeled loop.
```go
func bigfunc() {
    // ... lotta code ...

    go func() {
        selectingColor("Starting a goroutine...")
        defer selectingColor("Exiting goroutine...")

    loop: // Label the outer loop
        for {
            var ok bool
            select {
            case resultJSONName, ok = <-outputFileNameChan:
                if !ok {
                    break loop // Break out of the labeled loop
                }
                // ... process resultJSONName ...
            case err, ok = <-errorschan:
                if !ok {
                    break loop // Break out of the labeled loop
                }
                fmt.Printf("Error: %v\n", err)
            case _, ok = <-done:
                if !ok {
                    break loop // Break out of the labeled loop
                }
                selectingColor("All files processed")
                return // You can also use return here to exit the goroutine entirely
            }
        }
    }()
}
```