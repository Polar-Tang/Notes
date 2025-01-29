Keep the interfaces small.
>Interfaces are meant to define the minimal behavior necessary to accurately represent an idea or 

The interfaces are more like a contract, and this should be kept small
 
#### Example
This is an HTTP package:
It's defined for dealing with many data types besides the files, as this could be used for mulpiple types of data this is more scalable.
```go
type File interface {
    io.Closer
    io.Reader
    io.Seeker
    Readdir(count int) ([]os.FileInfo, error)
    Stat() (os.FileInfo, error)
}
```
Any type that satisfies the interface’s behaviors can be considered by the HTTP package as a _File_. This is convenient because the HTTP package doesn’t need to know if it’s dealing with a file on disk, a network buffer, or a simple `[]byte`.

#### Example
In this example:
```go
type car interface {
	Color() string
	Speed() int
	IsFiretruck() bool
}
```
Speed and Color could be a method for every car, but the isFiretruck is not for all the cars, but as it is defined in the interface it should be used for every car
Instead we should define that instance apart from the car interface:
```go
type firetruck interface {
	car
	HoseLength() int
}
```

#### Class vs interfaces
- Interfaces are not classes, they are slimmer.
- Interfaces don’t have constructors or deconstructors that require that data is created or destroyed.
- Interfaces aren’t hierarchical by nature, though there is syntactic sugar to create interfaces that happen to be supersets of other interfaces.
- Interfaces define function signatures, but not underlying behavior. Making an interface often won’t DRY up your code in regards to struct methods. For example, if five types satisfy the `fmt.Stringer` interface, they all need their own version of the `String()` function.

[Best Practices for Interfaces in Go](https://blog.boot.dev/golang/golang-interfaces/)