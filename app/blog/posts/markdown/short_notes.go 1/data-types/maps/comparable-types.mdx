Comparable types are the types that could be compared using the [[markdown/short_notes.go/operators/Comparison-Operators]]. The types that are comparable are:
- boolean
- numeric
- string
- pointer
- channel
- interface 
- structs or arrays
The non comparable are:
- slices
- maps
- functions

This is a map of string to (map of string to int). Each key of the outer map is the path to a web page with its own inner map. Each inner map key is a two-letter country code. This expression retrieves the number of times an Australian has loaded the documentation page:

```go
n := hits["/doc/"]["au"]
```


Unfortunately, this approach becomes unwieldy when adding data, as for any given outer key you must check if the inner map exists, and create it if needed:

```go
func add(m map[string]map[string]int, path, country string) {
    mm, ok := m[path]
    if !ok {
        mm = make(map[string]int)
        m[path] = mm
    }
    mm[country]++
}
add(hits, "/doc/", "au")
```


### Why struct is there?
We want to avoid a complex code like this:
```go
func add(m map[string]map[string]int, path, country string) {
    mm, ok := m[path]
    if !ok {
        mm = make(map[string]int)
        m[path] = mm
    }
    mm[country]++
}
add(hits, "/doc/", "au")
```
By using a struct instead of nesting a map in another:
```go
type Key struct {
    Path, Country string
}
hits := make(map[Key]int)
```


