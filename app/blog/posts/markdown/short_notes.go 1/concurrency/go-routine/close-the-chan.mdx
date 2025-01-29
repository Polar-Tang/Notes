Channels could be explicilty closed by a sender.
```go
ch := make(chan int)

// do some stuff with the channel

close(ch)
```
It's similar to an [[markdown/short_notes.go/operators/Identity (Ok)]] checking for the existence of a channel:
```go
v, ok := <-ch
```

#### You must
You must use this when to incicate a explicit receiver that nothing else is going on. Because if we send a closed channel it will cause:
	a chain of closed goroutine -> panic!
So don't worry if you leave open channels, the garbage collector will carry of this an will clean it.

#### Example
```go
package main

func countReports(numSentCh chan int) int {
    var v int

    for {
        val, ok := <-numSentCh
        if !ok {
            break
        }
        v = val + v
    }
    return v
}

func sendReports(numBatches int, ch chan int) {
    for i := 0; i < numBatches; i++ {
        numReports := i*23 + 32%17
        ch <- numReports
    }
    close(ch)
}
```