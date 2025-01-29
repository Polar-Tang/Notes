The feistel scheme is a [[block cipher 1]] system created in 1970 by Horst Feistel, an IBM enginer, a system called '*Lucifer*'
1. Split the 64-bit block into two 32-bit halves, L and R.
2. Set L to L ⊕ F(R), where F is a substitution–permutation round.
3. Swap the values of L and R.
4. Go to step 2 and repeat 15 times.
5. Merge L and R into the 64-bit output block.

![[markdown/short_notes/Pasted image 20241231202638.png]]
The quantity of the rounds may vary, [[Data Encryption Standard DES 1]] performs 16 rounds, whereas GOST 28147-89 performs 32 rounds.

### The F function
The F function can be either a pseudorandom permutation (PRP) or a pseudorandom function (PRF). The F funciton operates in a block of 32-bit and usually consist of four stages:
1. **Expansion**: The 32 bit key is increased of size. For example by duplicating the half of bits, for example 48 bits, that's the 8 bits multiplied by 6-bit (8 × 6 = 48 bits)
2. **Key-Missing**: The result is combined with a subkey, a [[Key Schedule 1]] derived from the master key
3. **Substitotion**: The 6 bits are divided in 8 parts and replaced by values from s-box, see [[block cipher 1]]
4. 1. _Permutation_: finally, the 32 outputs from the S-boxes are rearranged according to a fixed [permutation](https://en.wikipedia.org/wiki/Permutation "Permutation"), the _P-box_. This is designed so that, after permutation, the bits from the output of each S-box in this round are spread across four different S-boxes in the next round.
#### Example
First let's generate a round keys, with a function that accepts a slice of bytes and an integer of the numbers of rounds:
```go
func generateRoundKeys(key []byte, rounds int) [][]byte {
// acc
    roundKeys := [][]byte{}
// do this process the number of rounds
    for i := 0; i < rounds; i++ {
// convert the key to a 32 bit integer
        ui := binary.BigEndian.Uint32(key)
// apply a bitwise rotation
        rotated := bits.RotateLeft32(uint32(ui), i)
// turn the 32 int into an slice of bytes
        finalRound := make([]byte, len(key))
        binary.LittleEndian.PutUint32(finalRound, uint32(rotated))
// save it all in the accumulator
        roundKeys = append(roundKeys, finalRound)
    }
// return a slice of slices from each round
    return roundKeys
}
```
Here let's see a function where we xor the left side with a the right side, but the right side is hashed using the round key
```go
func feistel(msg []byte, roundKeys [][]byte) []byte {
    // split in the middle the 64 bits
    lhs := msg[:len(msg)/2] // First half
    rhs := msg[len(msg)/2:] // Second half

    for _, key := range roundKeys {

        // stream XOR
        xor := func(lhs, rhs []byte) []byte {
            res := []byte{}
            for i := range lhs {
                res = append(res, lhs[i]^rhs[i])
            }
            return res
        }

        // pseudorandom byte by hashing
        hash := func(first, second []byte, outputLength int) []byte {
            h := sha256.New()
            h.Write(append(first, second...))
            return h.Sum(nil)[:outputLength]
        }
        nextRHS := xor(lhs, hash(rhs, key, 32))
        // swap the two sides
        lhs, rhs = rhs, nextRHS
    }

	// Finally concatenate the two sides 
    result := append(rhs, lhs...)

    return result
}
```
Now to decrypt the thing we could use the inverse proces:
```go
func reverse[T any](s []T) []T {
    for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
        s[i], s[j] = s[j], s[i]
    }
    return s
}
func main(){
	decrypted := feistel(encrypted, reverse(roundKeys))
}
```