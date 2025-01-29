# Tipos de datos
## Dinamic typing
Bash is a dinamic typing style. This means you can easily just use a name and an equal followed by its variable value. By default it's trated as a string
**integer**
## Declare options
By using declare you could specified the date type and it would be trated as that
**Integer**
```
declare -i var
var="10 + 5"
printf "%d\n" "$var"  # Output: 15
```
**const**
Using `declare -r` (read-only) makes the variable immutable:
   ```bash
   declare -r var="initial"
   var="changed"  # Error: var is read-only
   ```
   This is useful for defining constants that shouldn't be modified in your script.
**array**
```bash
	declare -a my_array=("one" "two" "three")
    printf "%s\n" "${my_array[1]}"  # Output: two
```
   - Associative arrays (`-A`):
     ```bash
     declare -A my_assoc_array
     my_assoc_array=([name]="Alice" [age]="30")
     printf "%s\n" "${my_assoc_array[name]}"  # Output: Alice
     ```
   Without `declare`, bash treats the variable as a simple string, not an array.

**export [subshells](https://www.geeksforgeeks.org/shell-scripting-subshell/)**
Declare with -x flag is used to export to subshells, subshell are isolated instances which doesn't share the same functions
   ```bash
   var="local"
   bash -c 'echo $var'  # Output: (empty, not exported)

   declare -x var="exported"
   bash -c 'echo $var'  # Output: exported
   ```
   The `-x` flag exports the variable, making it available to child processes.
**lowercase**
   ```bash
   var="Some Text"
   var=$(echo "$var" | tr '[:upper:]' '[:lower:]')  # Convert to lowercase
   ```
**uppercase**
   ```bash
   declare -l var="Some Text"
   printf "%s\n" "$var"  # Output: some text

   declare -u var="Some Text"
   printf "%s\n" "$var"  # Output: SOME TEXT
   ```

# Print
## Printf
**Control over formatting**: `printf` allows you to format output using format specifiers like `%s` (string), `%d` (integer), etc.
```
printf "String: %s, Number: %d\n" "Hello" 42
```
This ensures the output is formatted exactly as expected, unlike `echo`, which doesn't offer this precision.

# Pipe ("|")
connects the output of one command to the input of another. The two commands run in **separate processes** (subshells), and the output of the first command is passed as input to the second.
## Semicolon 
**Semicolon (`;`)** is used to **separate commands** on the same line or in a subshell. It doesn't change how the shell runs the commands except for sequencing them in the same context.
# xargs
`xargs` takes **input** from another command (like the output of `find`, `ls`, or `echo`) and **constructs commands** from that input. It can also execute those commands in **parallel**, which is something pipes alone cannot do.
# fg
Runs jobs in the foreground.

# jobs
- **Built-in shell command**.
- Shows **only the background jobs** managed by the current shell session.
- Gives job IDs (like `[1]` for each background job), but it does **not** show detailed process information like CPU or memory usage.
# ps -aux
- **Not** a built-in command (it's a Unix/Linux utility).
- Shows **all processes** running on the system, including those started by other users and not related to your shell session.
- Displays detailed information like **process ID (PID), CPU usage, memory usage**, and **command details**.