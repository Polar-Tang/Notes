A **channel** is a type used for communication between [[markdown/short_notes.go 1/concurrency/go-routine/Goroutine]] or normal function, they pass values with no needing of return statements.
It allows one goroutine to send data and another to receive it, ensuring **thread-safe communication**.
#### Declaration
Creates a channel of type `int`.
```go
ch := make(chan int)
```
Now to **send data** to a channel we use an [[arrow-operators]], which is basically blocking the task. To avoiding blocking we could use [[select]]
Let's use the channel variable:
```go
ch <- 69
```
**`<-`**: This is the **receive operator**. 
```go
v := <-ch
```
Now the reciver operator is reading the contet of the chanel and the value recived from the ch variable is assigned to v
The program will **block** (pause execution) until there is a value available to receive from the channel `ch`.
This would look like:
```go
package main

import "fmt"

func main() {
	ch := make(chan int)

	// Start a goroutine to send a value into the channel
	go func() {
		ch <- 42 // Send the value 42 into the channel
	}()

	v := <-ch // Receive the value from the channel
	fmt.Println(v) // Output: 42
}
```

#### Example
Here we create a fibonacci, with no return statements, if the function do not have the `go` keyword it will never be executed, and it would cause a [[markdown/short_notes.go 1/concurrency/go-routine/deadlock]].
```go
package main

func concurrentFib(n int) []int {
    // create a channel of ints
    ch := make(chan int)
    var sliceToReturn []int

    // call fibonacci concurrently
    go fibonacci(n, ch)
    // Use a range loop to read from the channel and append the values to a slice
    for item := range ch {
        sliceToReturn = append(sliceToReturn, item)
    }
    return sliceToReturn
}

// don't touch below this line

func fibonacci(n int, ch chan int) {
    x, y := 0, 1
    for i := 0; i < n; i++ {
        ch <- x
        x, y = y, x+y
    }
    close(ch)
}
```

#### Make an arbitrary limit of channels
With a [[markdown/short_notes.go 1/concurrency/go-routine/buffered-chanel]]
![[Pasted image 20241215123354.png]]