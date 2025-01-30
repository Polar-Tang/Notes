Imagine we got this thing, the important here it's that recives trhee numbers and a function and then it returns three numbers:
```go
func conversions(converter func(int) int, x, y, z int) (int, int, int) {
	convertedX := converter(x)
	convertedY := converter(y)
	convertedZ := converter(z)
	return convertedX, convertedY, convertedZ
}
```

We could call a named function:
```go
func double(a int) int {
    return a + a
}

func main() {
    // using a named function
	newX, newY, newZ := conversions(double, 1, 2, 3)
	// newX is 2, newY is 4, newZ is 6
}
```
Or instead of that we could use a anonymous function, and define the simple function right in the argument:
```go
func main() {
    // using an anonymous function
	newX, newY, newZ = conversions(func(a int) int {
	    return a * a
	}, 1, 2, 3)
	// newX is 1, newY is 4, newZ is 9
}
```


#### Function inside a function
We couldn't use an named function inside another function, so let's use anonymous function instead:
```go
func main() {
	createOutputFile := func(keyword string) (string, error) {
		filename := fmt.Sprintf("results-%s.json", keyword)
		dir, err := os.Open(".")
		if err != nil {
			return "", fmt.Errorf("failed opening the directory: %w", err)
		}
		defer dir.Close()

		var acc int
		names, err := dir.Readdirnames(-1)
		if err != nil && err != io.EOF { // EOF means end of directory
			return "", fmt.Errorf("error reading directory: %w", err)
		}

		for _, name := range names {
			if name == filename || name == fmt.Sprintf("results-%s-%d.json", keyword, acc) {
				acc++
			}
		}

		if acc > 0 {
			filename = fmt.Sprintf("results-%s-%d.json", keyword, acc)
		}

		return filename, nil
	}

	fmt.Println(createOutputFile("go.mod"))
}
```