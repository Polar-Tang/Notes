In go channels sending an [[markdown/short_notes.go/data-types/struct/empty_struct]] is unary value, which means that is an operation that receives a single input.
We can block and wait until _something_ is sent on a channel using the following syntax
```go
<-ch
```
So this is used as a singla to wait for something,
```go
package main

import "fmt"

func main() {
        done := make(chan struct{})

        go func() {
                // Simulate some work
                time.Sleep(2 * time.Second)
                // Send a signal
                done <- struct{}{} 
        }()

        // Wait for the signal
        <-done
        fmt.Println("Work completed!")
}
```
### Example
Here we utilize a semaphore to await all goroutines and don't do everything at once
```go
concurrencyLimit := 6
semaphore := make(chan struct{}, concurrencyLimit)

go func(file api.FileInfo) {
                semaphore <- struct{}{}
                fmt.Print("Starting a goroutine...")
                fmt.Printf("Goroutines waiting: %d\n", len(semaphore))
                defer func() {
                    <-semaphore
                    fmt.Print("Exiting goroutine...")
                }()

                result := download.ProcessFile(file, extensions)
}
```
First we create a semaphore, a [[markdown/short_notes.go 1/concurrency/go-routine/buffered-chanel]], and everty time the go function executes send that empty struct, when reach the limit of the buffer, it finnaly awaits blocking the channel `<-semaphore`