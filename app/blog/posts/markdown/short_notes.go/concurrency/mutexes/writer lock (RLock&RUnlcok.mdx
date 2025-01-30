We could use RLOCK and RUnlock to only block the reading process
```go
package main

import (
    "sync"
    "time"
)

  

type safeCounter struct {
    counts map[string]int
    mu     *sync.RWMutex
}

  
func (sc safeCounter) inc(key string) {
    sc.mu.Lock()
    defer sc.mu.Unlock()
    sc.slowIncrement(key)
}

func (sc safeCounter) val(key string) int {
    sc.mu.RLock()
    defer sc.mu.RUnlock()
    return sc.counts[key]
}

// don't touch below this line

func (sc safeCounter) slowIncrement(key string) {
    tempCounter := sc.counts[key]
    time.Sleep(time.Microsecond)
    tempCounter++
    sc.counts[key] = tempCounter

}
```
A read/write mutex allows all the readers to access the map at the same time, but a writer will still lock out all other readers and writers.
If we utilize the read process in many proces but the writting thing only in one thread, we could implement this, here's an example:
```GO
package main

import (
	"fmt"
	"sync"
)

func main() {
	m := map[int]int{}

	mu := &sync.RWMutex{}

	go writeLoop(m, mu)
	go readLoop(m, mu)
	go readLoop(m, mu)
	go readLoop(m, mu)
	go readLoop(m, mu)

	// stop program from exiting, must be killed
	block := make(chan struct{})
	<-block
}

func writeLoop(m map[int]int, mu *sync.RWMutex) {
	for {
		for i := 0; i < 100; i++ {
			mu.Lock()
			m[i] = i
			mu.Unlock()
		}
	}
}

func readLoop(m map[int]int, mu *sync.RWMutex) {
	for {
		mu.RLock()
		for k, v := range m {
			fmt.Println(k, "-", v)
		}
		mu.RUnlock()
	}
}
```