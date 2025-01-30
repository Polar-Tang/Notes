New request is a method that takes as a request and use trhee arguments, the method, the url to fetch, and the body of that request
```go
req, err := http.NewRequest("PUT", fullURL, bytes.NewBuffer(jsonData))
```
In the body request we could use nil if we want to, just like we do in whatever request that doesn't require a body such as `DELETE`:
```go
req, err := http.NewRequest("DELETE", url, nil)
```

If you want to add some headers to the request you should use the: `req.Header.Add` so que utilize the variable we created using this method, and then we define some headers:
```go
req.Header.Add("X-API-Key", apiKey)
req.Header.Add("Content-Type", "application/json")
```
Now we craft the request, but we didn't send it. So let's utilize the [[markdown/short_notes.go/built-in functions/packages/net http/http client]]
```go
client := &http.Client{}
res, err := client.Do(req)
if err != nil {
        return data, err
    }
defer res.Body.Close()
```