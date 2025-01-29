A **composite literal** is a way to create and initialize a composite data type (like a struct, array, slice, or map).

When we are using a composite literal we are declaring and initializing at the same time:
```go
return &hasher{
	hash: sha256.New(),
}
```

Without a composite literal this will look like
```go
h := hasher{}                  // Create an empty hasher struct
h.hash = sha256.New()          // Set the hash field
return &h                      // Return a pointer to h
```
is basically to define composite values which you could later giving different values, they have the advantage to be scalable


They are a way to declare and/or initialize multiple values at once. This can be a `struct`, `array`, `slice`, or `map`.

A composite literal consists of the **type name** followed by a **list of elements enclosed in braces `{}`**.

```go
Type{Field1: Value1, Field2: Value2, ...}
```
Omitted fields get the zero value for that field
#### Data structures

The key is interpreted as a field name for struct literals, an index for array and slice literals, and a key for map literals

###### Struct
So we could type a struct data type and later intilize it:
```go
type Point struct {
    X, Y float64
}

p := Point{X: 10, Y: 20} // X: 10, Y: 20
```
With this we also could initialize the values as the order it is:
```go
type Point struct {
    X, Y float64
}

p := Point{10, 20} // X: 10, Y: 20
```
Create a [[markdown/short_notes.go 1/pointer]]
```go
p := &Point{X: 1.5, Y: -2.3} // Creates a pointer to Point{1.5, -2.3}
```

#### Declaring and initializating
###### Array
In the **arrays** we declare the values in orded of the fixed indexes, The length of an array literal is the length specified in the literal type.
```go
arr := [5]int{0: 1, 1: 2, 3: 4} // [1, 2, 0, 4, 0]
```
If fewer elements than the length are provided in the literal, the missing elements are set to the zero value for the array element type. 
###### Map
On the other hand [[markdown/short_notes.go 1/data-types/maps/map]]s are always initializated and declared, as they are pair values, the thing need to be explicit
```go
ages := map[string]int{
    "Alice": 25,
    "Bob":   30,
    "Carol": 29,
}
```
But we could initilize them later:
```go
type Point struct {
    X, Y int
}

points := map[Point]string{
    {X: 0, Y: 0}: "Origin",
    {X: 1, Y: 2}: "Point A",
}

```

#### Example
Declare a typing using composite literals
```go
type Point struct {
    X, Y float64
}

type Line struct {
    Start, End Point
}

line := Line{
    Start: Point{X: 0, Y: 0},
    End:   Point{X: 10, Y: 10},
}

```

#### Example
In this example we pass a hash.Hash value to a struct with a pointer:
```go
type hasher struct { 
	hash hash.Hash 
}

return &hasher{
	hash: sha256.New(),
}
```