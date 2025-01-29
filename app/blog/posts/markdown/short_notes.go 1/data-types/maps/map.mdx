A map is a key-values pair that utilizes hash table, [[markdown/short_notes.go 1/data-types/maps/maps-are-faster]]. 
The syntax is the following:
```go
map[KeyType]ValueType
```

- **`KeyType`** should be any type of the [[markdown/short_notes.go 1/data-types/maps/comparable-types]]
- **`ValueType`** could be any type, even a map
-----
##### Maps are passed by reference
Changes made to the map within the function are reflected in the original map variable outside the function.

-------
#### Declaration
the keytype is a strin and the value type is an int:
##### (Don't do this)
```go
var m map[string]int
```
The [[markdown/short_notes.go/varaible declaration/zero_value]] of a map is nil.
But this will cause a run time panic. To avoid that use a [[markdown/short_notes.go/data-types/slice/make]] for better [[markdown/short_notes.go/memory/memory-allocating]]
##### Initialize the map thus:
```GO
m := make(map[string]int)
```

-----
### Insert an element
To initialize any object of the slice we could use:
```go
m[key] = elem
```
If you wan to initize multiple data you should to specify the key and the value exlpicitly
```go
commits := map[string]int{
    "rsc": 3711,
    "r":   2138,
    "gri": 1908,
    "adg": 912,
}
```
The same syntax could be used to initialize a zero value:
```go
m = map[string]int{}
```
###### Get an example
```go
func getUserMap(names []string, phoneNumbers []int) (map[string]user, error) {
    if len(names) != len(phoneNumbers) {
        return nil, errors.New("invalid sizes")
    }

    newUser := make(map[string]user)

    for i := 0; i < len(names); i++ {
        newUser[names[i]] = user{
            name:        names[i],
            phoneNumber: phoneNumbers[i],
        }
    }

    return newUser, nil
}
```
------
#### To declare a map inside a map
##### (Don't do this)
```go
n := hits["/doc/"]["au"]
```
So instead of returning an entire map and do complicating things, first create a struct:
```go
type Key struct {
    Path, Country string
}
hits := make(map[Key]int)
```
 we use the [[markdown/short_notes.go 1/data-types/maps/mutation]], which is a feature of the map, and we were just changing an element of the map and not the entire map
```go
 hits[Key{"/", "vn"}]++
```
And now you're working with a copy of that value,
##### Initialize the map thus:
We actually want to initiaze an interface

```go
type Key struct {
	Path, Country string
}
hits := make(map[Key]int)
```

--------
### Get an element
Get an element looks 
```go
elem = m[key]
```
- This expression does **not** just refer to the key (`message`).
- It actually accesses the **value** associated with the key `message` in the `validUsers` map.
If you try to get a value that doesn't exist, you will get its [[markdown/short_notes.go/varaible declaration/zero_value]]
No need to use a for to access to the code:
```go
func deleteIfNecessary(users map[string]user, name string) (deleted bool, err error) {
    user, ok := users[name]
    if !ok {
        return false, errors.New("not found")
    }

    if user.scheduledForDeletion {
        return true, nil
    }
    
    return false, nil
}
```
If i'd use a for here the ok condition would never worked



-------
### Delete an element
```go
delete(m, key)
```
The `delete` function doesn’t return anything, and will do nothing if the specified key doesn’t exist.

--------
### Check if a key exists
```go
elem, ok := m[key]
```
If 

#### Iterate over the map
To iterate on the maps you MUST utilize [[markdown/short_notes.go/looping/for...range]] 
```go
for key, value := range m {
    fmt.Println("Key:", key, "Value:", value)
}
```
