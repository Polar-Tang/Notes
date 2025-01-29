We sennd a basic request using net http packge
```go
import (
	"fmt"
	"io"
	"net/http"
)

func getProjects() ([]byte, error) {
	res, err := http.Get("https://api.jello.com/projects")
	if err != nil {
		return []byte{}, fmt.Errorf("error making request: %w", err)
	}
	defer res.Body.Close()

	data, err := io.ReadAll(res.Body)
	if err != nil {
		return []byte{}, fmt.Errorf("error reading response: %w", err)
	}
	return data, nil
}
```
Using http.get we use [`http.DefaultClient`](https://pkg.go.dev/net/http#DefaultClient) , but basically the [[http default client]] is used to make request with personalized headers. Then we use io to read the body response into a slice of bytes `[]byte`. `defer res.Body.Close()` ensures that the response body is properly closed after reading. Not doing so can cause memory issues. To convert the body response json in plain text see [[markdown/short_notes.go/built-in functions/packages/encoding json/encoding json]]
