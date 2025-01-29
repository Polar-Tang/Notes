**Interfaces** define methods, and these are later utilized by functions as methods signatures.
You use interface as a type when you have several types which common behavior

```go
// DEFINE A METHOD THAT RETURN A FLOAT
type Shape interface {
    Area() float64
}

type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return 3.14 * c.Radius * c.Radius
}

type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func printArea(s Shape) {
    fmt.Printf("The area is: %.2f\n", s.Area())
}

func main() {
    c := Circle{Radius: 5}
    r := Rectangle{Width: 4, Height: 7}

    printArea(c) // Works with Circle
    printArea(r) // Works with Rectangle
}
```

The **empty interface** `interface{}` can hold values of any type because all types implement zero methods
```go
func PrintAnything(value interface{}) {
	fmt.Println(value)
}

func main() {
	PrintAnything(42)
	PrintAnything("Hello, Go!")
	PrintAnything([]int{1, 2, 3})
}

```

a type satisfies an interface simply by having all the methods required by that interface.
```go
package main

import "fmt"

// Define an interface
type Printer interface {
	Print()
}

// Define a type
type Document struct {
	Content string
}

// Add the method required by Printer to Document
func (d Document) Print() {
	fmt.Println(d.Content)
}

func main() {
	// Document satisfies Printer        
	var p Printer = Document{Content: "Hello, Go Interfaces!"}
	// here we define an "Object" first come the parameter name of the function
	//, and we utilize the data type of the struct.to define it a value 
	p.Print()
	// later we utilize the variable we just created with the method of the reciver
}

```
#### Interfaces with multiple methods
If an interface has multiple methods, a type must implement all of them to satisfy that interface. However, you don’t need to define a single function that handles all the methods. Instead, each method in the interface is implemented as a separate receiver function on the type.
```go
type Printer interface {
	Print()
	Delete()
}

type Document struct {
	Content string
}

func (d Document) Print() {
	fmt.Println("Printing:", d.Content)
}

func (d Document) Delete() {
	fmt.Println("Deleting:", d.Content)
}

```

#### Multiple interfaces
Also you could use multiple interfaces:
```go
type Printer interface {
	Print()
}

type Deleter interface {
	Delete()
}

type Document struct {
	Content string
}

func (d Document) Print() {
	fmt.Println("Printing:", d.Content)
}

func (d Document) Delete() {
	fmt.Println("Deleting:", d.Content)
}

```