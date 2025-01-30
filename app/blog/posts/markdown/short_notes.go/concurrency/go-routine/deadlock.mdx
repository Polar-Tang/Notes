In the channels exists deadlocks that could totally pause your script, in the last example, if we'd never set a value to ch variable and then try to send its value to a v variable through a reciver operator, then it will pause.
```go
func main() { 
	ch := make(chan int) 
	v := <-ch // This blocks forever because no value is sent into ch }
```
### Syntax: `<-ch`
We could use this syntax to await for a channel to be filled
- **`<-ch`**: This means "receive a value from the channel `ch`".
- It **blocks** until there is a value sent into the channel.
- It does not assign the received value to a variable, effectively discarding it.
So we could use this syntax and send an [[markdown/short_notes.go/data-types/struct/empty_struct]] which is usually used for singalization
```go
package main

import (
	"fmt"
	"time"
)

func worker(done chan struct{}) {
	fmt.Println("Working...")
	time.Sleep(2 * time.Second) // Simulate work
	fmt.Println("Done!")

	// Signal completion
	done <- struct{}{}
}

func main() {
	done := make(chan struct{})

	go worker(done)

	// Wait for the signal
	<-done
	fmt.Println("Worker has finished.")
}
```
And we send an empty struct which consume zero memory but indicates that the task has finished. 


#### Another example
Also we could send a value that is irrelevant:
```go
package main

import "fmt"

func notifier(ch chan int) {
	ch <- 1 // Send a signal (value is irrelevant)
}

func main() {
	ch := make(chan int)

	go notifier(ch)

	// Wait for a signal, but ignore the value
	<-ch
	fmt.Println("Received a signal!")
}
```

#### Example
We need to wait for every channel, otherwise the deadlock will be present.
```go
func waitForDBs(numDBs int, dbChan chan struct{}) {

    for i := 0; i < numDBs; i++ {

        <-dbChan

        fmt.Printf("All %v databases are online\n", numDBs)

  

    }

}
```
This without the for will cause an deadlock