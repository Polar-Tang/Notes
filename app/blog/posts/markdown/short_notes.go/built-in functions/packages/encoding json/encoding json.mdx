When we recive the body in the response, we recive that as a stram of bytes. We need to know previously what will come in the respoe's body. Imagine we just got this JSON:
```json
[
  {
    "id": "001-a",
    "title": "Unspaghettify code",
    "estimate": 9001
  }
]
```
So with the standard [`encoding/json`](https://pkg.go.dev/encoding/json) package uses tags to map JSON fields to struct fields.
```go
type Issue struct {
	Id       string `json:"id"`
	Title    string `json:"title"`
	Estimate int    `json:"estimate"`
}
```
So after reciving the response we could encode the issues.
```go
var issues []Issue  // initialize the struct
decoder := json.NewDecoder(res.Body) // decode the response's body
	if err := decoder.Decode(&issues); err != nil { // handle the error
    fmt.Println("error decoding response body")
    return
}
```
And if no error occur we could just print it in the console:
```go
for _, issue := range issues {
    fmt.Printf("Issue – id: %v, title: %v, estimate: %v\n", issue.Id, issue.Title, issue.Estimate)
    // Issue – id: 001-a, title: Unspaghettify code, estimate: 9001
}
```