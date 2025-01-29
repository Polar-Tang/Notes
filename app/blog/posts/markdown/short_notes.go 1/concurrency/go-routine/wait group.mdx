Each time you start a new goroutine, you call `wg.Add(1)` to signal that a new goroutine will do some work.
```go
func worker(id int, wg *sync.WaitGroup) {

    defer wg.Done() // Signal that this goroutine is done

    fmt.Printf("Worker %d starting\n", id)

    time.Sleep(time.Second) // Simulate work

    fmt.Printf("Worker %d done\n", id)
}
  
func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 3; i++ {
        wg.Add(1)         // Increment the WaitGroup counter
        go worker(i, &wg) // Launch a goroutine
    }

    wg.Wait() // Block until all workers are done
    fmt.Println("All workers completed")
}
```
The defer wg.Done() is inside the go function, to close it at the end of processing, and the wg.wait must be in the "parent fucntion" of the go function