- You will want to use a pointer in a mutex if you want to pass it through different functions
```go
func main() {
    m := map[int]int{}
    mu := &sync.Mutex{}
    go writeLoop(m, mu)
    go readLoop(m, mu)

    // stop program from exiting, must be killed
    block := make(chan struct{})
    <-block
}

func writeLoop(m map[int]int, mu *sync.Mutex) {
    for {
        for i := 0; i < 100; i++ {
            mu.Lock()
            m[i] = i
            mu.Unlock()
        }
    }
}

  

func readLoop(m map[int]int, mu *sync.Mutex) {
    for {
        mu.Lock()
        for k, v := range m {
            fmt.Println(k, "-", v)
        }
        mu.Unlock()
    }
}
```
- When the mutex is part of a struct, and you want multiple references to access the same mutex instance.
```go
type SharedResource struct {
    mu sync.Mutex
}

func (s *SharedResource) CriticalSection() {
    s.mu.Lock()
    defer s.mu.Unlock()
    fmt.Println("Critical section")
}

```