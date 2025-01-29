In Go, a package is a way to group functions, Go packages allow **reusability** by letting you to use your own or other packages in your code, you code search for them:
https://pkg.go.dev/search?q=quote

The most common are:
#### Examples of Standard Library Packages:

| **Package** | **Function Examples**                                        |
| ----------- | ------------------------------------------------------------ |
| `fmt`       | `fmt.Println()`, `fmt.Printf()`, `fmt.Sprintf()`             |
| `strings`   | `strings.Contains()`, `strings.ToUpper()`, `strings.Split()` |
| `math`      | `math.Sqrt()`, `math.Pow()`, `math.Abs()`                    |
| `time`      | `time.Now()`, `time.Sleep()`, `time.Since()`                 |
| `os`        | `os.Open()`, `os.Create()`, `os.Remove()`                    |


I just realized, if an error is throwed, Go will stop in that first error throwed, and all the other prints will be ignored. So i go commited and uncommiting all the debugging this to see if the following error is trhowed in spite of the file of the other, but as they all depends from output file, all the debuggings will trigger an error. I try to just read the output file, and this throws the error:

```

outputFile := tmpFile.Name() + "_extracted.txt"

fmt.Printf("Attempting to extract content from PDF: %s to %s\n", tmpFile.Name(), outputFile)

// Debugging: Print the content of outputFile without using pdfcpu FIRST ERROR THROWED

content, err := readFileContent(outputFile)

if err != nil {

fmt.Printf("Failed to read extracted content from %s without use pdfcpu: %v\n", outputFile, err)

return nil

}

fmt.Println("Extracted Content:\n", content)

```

the error `Failed to read extracted content from /tmp/1182436164.pdf_extracted.txt without use pdfcpu: open /tmp/1182436164.pdf_extracted.txt: no such file or directory`

No such file or directory, so that is. I have give them all permisions, `tmpFile, err := os.CreateTemp("", "*.pdf")` here the tmp is created and later we copy the response body in to that file, without an error being throwed, because i have invesigated that we indeed copy the response body and this is a pdf.

