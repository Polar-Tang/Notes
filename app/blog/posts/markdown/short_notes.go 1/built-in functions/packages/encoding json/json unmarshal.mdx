`json.Unmarshal` works with data that's already in `[]byte` format.
Using a `json.Decoder` can be more memory-efficient because it doesn't load all the data into memory at once. `json.Unmarshal` is ideal for small JSON data you already have in memory.
When we type the strcut of the JSON response we should utilize the response read by io read all, and use the memory address from that type from the struct we previously defined
```go
package main

import (
    "encoding/json"
    "fmt"
)

// Define the struct to match the JSON structure
type Person struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}

func main() {
    jsonData := `{"name": "John Doe", "age": 30}`

    var person Person
    err := json.Unmarshal([]byte(jsonData), &person)
    if err != nil {
        fmt.Println("Error unmarshaling JSON:", err)
        return
    }

    fmt.Printf("Unmarshaled Struct: %+v\n", person)
}

```

If you want to iterate over the response you should do it to the entire Type
```go
func getIPAddress(domain string) (string, error) {
    url := fmt.Sprintf("https://cloudflare-dns.com/dns-query?name=%s&type=A", domain)

    var DNSResponse DNSResponse

    req, err := http.NewRequest("GET", url, nil)
    
    if err != nil {
        return "", fmt.Errorf("error creating request: %w", err)
    }
    req.Header.Set("accept", "application/dns-json")  

    client := http.Client{}
    res, err := client.Do(req)
    if err != nil {
        return "", fmt.Errorf("error sending request: %w", err)
    }
    defer res.Body.Close()

    body, err := io.ReadAll(res.Body)
    if err != nil {
        return "", fmt.Errorf("error reading response body: %w", err)
    }

    if err := json.Unmarshal(body, &DNSResponse); err != nil {
        return "", fmt.Errorf("error unmarshalling JSON: %w", err)
    }

    var answerString string

    for _, ans := range DNSResponse.Answer {
        answerString += ans.Data + " "
    }

    IPdomain := fmt.Sprintf("The domain %s resolves to %s", domain, answerString)

    return IPdomain, nil
}
```