Slices are portions of arrays with elements fixed to the same type:
```go
var myInts [10]int
```
For example myInts has ten integers.
But you could declare and initialize
```go
primes := [6]int{2, 3, 5, 7, 11, 13}
```
Anyway it's different from the array because this could be modified and are more flexible than the array.

The original array where comes from the slice it's called "underlying array", for example:
```go
arr := [5]int{1, 2, 3, 4, 5}
slice := arr[1:4] // A slice of the array

```

#### Example
I like to see this example of a structs being populated:
```go
func tagMessages(messages []sms, tagger func(sms) []string) []sms {
    messagesTagged := make([]sms, len(messages))
    for i, msg := range messages {
        tags := tagger(msg)
        messagesTagged[i].id = msg.id
        messagesTagged[i].content = msg.content
        messagesTagged[i].tags = tags
    }
    return messagesTagged
}
```
The entire file:
```go
package main

type sms struct {
    id      string
    content string
    tags    []string
}

func tagMessages(messages []sms, tagger func(sms) []string) []sms {
    messagestagged := make([]sms, len(messages))
    for key, msg := range messages {
        tags := tagger(msg)
        messagestagged[key] = sms{msg.id, msg.content, tags}
    }
    return messagestagged
}

func tagger(msg sms) []string {
    tags := []string{}
    for _, char := range msg.content {
        tags = append(tags, string(char))
    }
    return tags
}
```