A **goroutine** is Go's way of enabling **lightweight concurrency**. It’s like a thread but managed by the Go runtime rather than the operating system. 
Decalre a go routine is as simple as adding a `go` at the start of the function
```go
go doSomething()
```

- **Without `go`**: The program runs sequentially.
- **With `go`**: `printMessage("Goroutine Call")` runs concurrently.

#### For example
You could see here that when we add the "go" keyword to the function it executes in the background and the others function like "count("fish")"do not wait to the order to finish 
```go
package main

import (
    "fmt"
    "time"
)

func main() {
    go count("sheep")
    count("fish")
}

func count(thing string) {
    for i := 0; i < 10; i++ {
        fmt.Println(i, thing)
        time.Sleep(time.Second * 1)
    }
}
```
However here the go routines aren't waiting each other to finish. If we want the go routines to have an order, import sync library and utilize a wait group
```go
func main() {
    var wg sync.WaitGroup
    wg.Add(1)

	go func(file api.FileInfo) {
	    // Function body
	}(fileInfo) // Argument passed here

    wg.Wait()
}

```
- The part `func(file api.FileInfo)` defines an **anonymous function** that accepts an argument of type `api.FileInfo`.
- At the end, `(fileInfo)` **calls the anonymous function** with `fileInfo` as the argument.
But it's actually more safe to utilize [[markdown/short_notes.go 1/concurrency/go-routine/chan]]els for  type to comunication
```go
  func main() {
    c := make(chan string) // initialize it
    go count("A", c)

    for {
        msg := <-c      // reciven channel
        fmt.Println(msg)
    }
}

func count(thing string, c chan string) {

    for i := 0; i < 10; i++ {
        c <- fmt.Sprintf("%s: %d", thing, i)
        time.Sleep(time.Second * 1)
    }
}
```
**The count function**
- The function count isn't returning anything, but when it does `c <- fmt.Sprintf("%s: %d", thing, i)` is placing that sprintf (string) in the channel c 
- Another go routine or function now can receives that value from the channel 
**The main function**
- Now the main function uses the [[markdown/short_notes.go/operators/arrow-operator]] `msg := <-c` 
- i'm not directly invoking `count` function, its used whenever i used the same channel.
But this will cause a [[markdown/short_notes.go 1/concurrency/go-routine/deadlock]] because msg is always waiting for c, so use the close method to [[markdown/short_notes.go 1/concurrency/go-routine/close-the-chan]], which will "delete" the chanel, so let's check for its existence too.
```go
func main() {
    c := make(chan string) // initialize it
    go count("A", c)

    for {
        msg, ok := <-c      // sending channel
        if !ok {
	        break
        }
        fmt.Println(msg)
    }
}

func count(thing string, c chan string) {

    for i := 0; i < 10; i++ {
        c <- fmt.Sprintf("%s: %d", thing, i)
        time.Sleep(time.Second * 1)
    }
	close(c)
}
```