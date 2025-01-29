https://en.wikipedia.org/wiki/Block_cipher

### Introduction

During the cold war, USA have developed their own ciphers, they called Data Encryption Standard which was adopted as a federal standard from 1979 to 2005, while the KGB developed GOST 28147-89 an algorithm kept in secret until 1990. In 2000, the US-based National Institute of Standards and Technology (NIST) selected the successor to DES, called the Advanced Encryption Standard (AES), an algorithm developed in Belgium and now found in most electronic devices. AES, DES, and GOST 28147-89 have something in common: they’re all block ciphers.

-----

### What is a **Block Cypher**?
A block cipher is a [[Deterministic algorithm]] that operates in a fixed-length groups of bits, this means that instead of going encrypting byte by byte, such as we were doing with [[markdown/criptografic/stream cypher]], this instead divide the plaintext into fixed-size of bits
This consist of an encryption algorithm and a description algorithm
- The *encryption algorithm* (**E**): Takes a key *K* and a plain text block *P* and produce a cipher text block *C*. We write an operation such as *C* = **E**(*K*, *P*).
- The *description algorithm* (**D**) is the inverses that the process which encrypts the data, and decrypts the cipher text to the original plain text *P*. This operation is written as *P* = **D**(*K*, *P*) 
Since the encryption and decryption involves the same algorithm, usually involves similar operations

#### Randomnes
In the cypher block exist a pseudorandom permutation (PRP), thereby the block is safe as the attackers have no access to the key. They should have no clue about what E(K, P) looks like, for
any given P.
#### Block size
The blocks are fixed-size, but the plain text aren't necessarily the same. This encryption works well independently from the length of the plain text, and keys doesn't need to be the same length that the text. This length may vary assuming the algorithm
- [3DES](https://en.wikipedia.org/wiki/Triple_DES): blocksize=64 bits, keysize=128 bits
- [AES-256](https://blog.boot.dev/cryptography/aes-256-cipher/): blocksize=128 bits, keysize=256 bits

###### Example
Imagine we got a alorithm that chunk the text into blocks of 256, but we got a text of 650 bits. Then the chunk will go this way:
```
block1 = first 256 bits
block2 = next 256 bits
block3 = last 138 bits
```
The block is then [[padding]] with extra bits

- AES requires a key length of 16, 24, or 32 bytes.
- DES requires a key length of exactly 8 bytes.
- These validations are enforced before creating the cipher.


### Rounds
The rounds are layers of encryption to the plaintext, such as *C* = *R3*(*R2*(*R1*(*P*))), where the rounds are *R1, R2,* and *R3* and *P*. Which also has an inverse, *P* = *iR1*(*iR2*(*iR3*(*C*))), where *iR1* is the inverse of R1, and so on, which are paramatized with a value called *round key*, when the key is different, the round behave different.
#### Key Schedule
round keys are derived from the main key using an algorithm called *key schedule*, which basically derive a master key in a different key for each round

For example, we could take a round number (random input) and get the round key by xoring it with the master key
```go
func deriveRoundKey(masterKey [4]byte, roundNumber int) [4]byte {
    roundKey := make([]byte, 4)
    for i, b := range masterKey {
        roundKey[i] = b ^ byte(roundNumber)
    }
    return [4]byte(roundKey)
}
```

confusion means that the input (plain text, encriptyon key) undergoes complex transformations
And diffusion means that those transformation depend equally on all bits of the input.
#### S-box
Cubstitution boxes, essentially are a *diffusion* mechanism which maps a byte to another
```go
func basicSubstitution(data [4]byte) {
    sBox := map[byte]byte{
        0x00: 0x63,
        0x01: 0x7c,
        0x02: 0x77,
        0x03: 0x7b,
        0x04: 0xf2,
        0x05: 0x6b,
        0x06: 0x6f,
        0x07: 0xc5,
        0x08: 0x30,
        0x09: 0x01,
    }

    for _, char := range data {
        changedChar := sBox[char]
        fmt.Printf("The substitution for %b is %b\n", char, changedChar)
    }
}
```

#### Permutation
The permutation substitution
for example in a network could be as simple as change the order of the bits through algebra operations, cipher FOX transforms a 4-byte vector (a, b, c, d) to (a′, b′, c′, d′)
![[Pasted image 20241231200055.png]]

## Examples of Block ciphers


### The Slide attacks 
No round keys should be identical to the other, to avoid **slide attacks**. 
In slide channel attacks, as the round key **R** was always the same, this means that P2 = R(P1), implies the relation C2 = R(C1)
Slide attacks:
https://www.iacr.org/archive/eurocrypt2000/1807/18070595-new.pdf
### Code book attack
Is like a storage of what plain texts corresponds to a cypher blocks. So it's a table that maps plain text to blocks
