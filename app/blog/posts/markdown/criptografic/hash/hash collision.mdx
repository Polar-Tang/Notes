This CTF marked the start of my journey on preparing myself to convert my role from Software Engineer to Security Engineer for the next 4 years.  
On this CTF, I managed to solve 2 Crypto Challenge

- Alkoloid Stream (134 pts)
- GoodHash (218 pts)

Today, I will explain my solution on solving the GoodHash.

## [](#GoodHash-218-pts "GoodHash-218-pts")GoodHash (218 pts)

> I think I made a good hash function based on AES. Could you test this?  
> `nc good-hash.chal.perfect.blue 1337`  
> Author: rbtree  
> file: `main.py`

### [](#Source-Code "Source-Code")Source Code

```
#!/usr/bin/env python3

from Crypto.Cipher import AES
from Crypto.Util.number import *
from flag import flag
import json
import os
import string

ACCEPTABLE = string.ascii_letters + string.digits + string.punctuation + " "


class GoodHash:
    def __init__(self, v=b""):
        self.key = b"goodhashGOODHASH"
        self.buf = v

    def update(self, v):
        self.buf += v

    def digest(self):
        cipher = AES.new(self.key, AES.MODE_GCM, nonce=self.buf)
        enc, tag = cipher.encrypt_and_digest(b"\0" * 32)
        return enc + tag

    def hexdigest(self):
        return self.digest().hex()


if __name__ == "__main__":
    token = json.dumps({"token": os.urandom(16).hex(), "admin": False})
    token_hash = GoodHash(token.encode()).hexdigest()
    print(f"Body: {token}")
    print(f"Hash: {token_hash}")

    inp = input("> ")
    if len(inp) > 64 or any(v not in ACCEPTABLE for v in inp):
        print("Invalid input :(")
        exit(0)

    inp_hash = GoodHash(inp.encode()).hexdigest()

    if token_hash == inp_hash:
        try:
            token = json.loads(inp)
            if token["admin"] == True:
                print("Wow, how did you find a collision?")
                print(f"Here's the flag: {flag}")
            else:
                print("Nice try.")
                print("Now you need to set the admin value to True")
        except:
            print("Invalid input :(")
    else:
        print("Invalid input :(")

```

### [](#Analysis "Analysis")Analysis

#### [](#General-key-points "General-key-points")General key points

I really love this challenge, because I learn a lot of new things during taking my time to solve this challenge. After I read the source code, some key notes that we could infer:

- It use AES-GCM
- It give us the encryption key `goodhashGOODHASH`
- It require us to find a hash collision with some constraints:
    - The message should be in json format
    - The message should only contains characters from the `ACCEPTABLE` variable
    - The message will need to contain `"admin": true` if we want to get the flag
- Our input is actually being used as the AES-GCM nonce, not as the plaintext.
    - If you read the source code, the plaintext message always `\0*32`
        - Check `digest` method

After reading many articles in the internet about AES-GCM, below is the encryption scheme.  
![](https://i.imgur.com/S4Eebgb.png)

Further analysis:

- If you notice, because our plaintext is always 0, we can safely ignore the plaintext and just focus on the nonce (because if you see the image `pt1^Ek(Counter 1) = Ek(Counter 1)` because of null plaintext)
- Turns out, the recommended nonce length for AES-GCM is 96 bits (12 bytes), so that the first block of encryption will be `iv||counter`, where iv is 12 bytes and counter is 4 bytes.
- If the nonce length is not 96 bit (whether shorter or longer), the nonce will be hashed by using the GHASH algorithm.
    - **Reading the source code, we know that the targeted input (`'{"token":"xxx", "admin": false}'`) and our input length will always be longer than 12 bytes, which mean our nonce will be always hashed by GHASH method.** **(This is important note)**

#### [](#GHASH-Explained "GHASH-Explained")GHASH Explained

For detailed info, you can read [wiki](https://en.wikipedia.org/wiki/Galois/Counter_Mode), but I'll try to explain it.

Defined as GHASH(H,A,C), it requires 3 inputs:  
H: The secret key, calculated by Ek('\0'*16)  
A: Associated data  
C: Message that we want to authenticate

```
GHASH Pseudocode:
----------------------------------------------
x = bytes(16) # Initialize x with 16 bytes of 0
padded_a = pad(a) # Append extra '\x00' until the size is divisible by 16
padded_c = pad(c) # Append extra '\x00' until the size is divisible by 16
for i in range(0,len(padded_a),16):
    x = xor(x, padded_a[i:i+16])•H
for i in range(0,len(padded_c),16):
    x = xor(x, padded_c[i:i+16])•H
# Notes:
# conv is illustration function that will convert integer to 16 bytes representation
# Example:
# 1 -> b'\x00\x00\x00\x00\x00\x00\x00\x01'
# 8 -> b'\x00\x00\x00\x00\x00\x00\x00\x08'
# 11 -> b'\x00\x00\x00\x00\x00\x00\x00\x0b'
return xor(x, conv(len(padded_a)+len(padded_c)))•H
```

Notes:  
The multiplication of xor(x1,x2)•H is happen on GF(2128) defined by polynomial

Poly=x128+x7+x2+x+1

#### [](#Vulnerability "Vulnerability")Vulnerability

So, if you read the source code, you can see that:

- Our input is limited to 64
- Target hash is created from nonce `{"token: "xxxxxxxxxxxxxxxx", "admin": false}`, which length is 61.

I've explained above that if the nonce is not equal to 92 bit, by default AES-GCM will GHASH the nonce. Let's try to simulate it:

- Let say that the nonce is `{"token: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "admin": false}`. Length is 61
- AES-GCM will call `GHASH(H,bytes(),nonce)` (without any associated data)
- GHASH will pad the nonce and split it per 16 bytes.

```
block_1 = '{"token": "xxxxx'
block_2 = 'xxxxxxxxxxxxxxxx'
block_3 = 'xxxxxxxxxxx", "a'
block_4 = 'dmin": false}\x00\x00\x00'
```

- GHASH will initialize x with 16 bytes of `\x00`. `final_x` will be used as the AES-GCM first block input (substitute of `iv||counter`)

```
x0 = '\x00'*16
x1 = xor(x0, block_1)•H
x2 = xor(x1, block_2)•H
x3 = xor(x2, block_3)•H
x4 = xor(x3, block_4)•H
final_x = xor(x4, ('\x00'*15 + '\x3d'))•H # \x3d is nonce length representation in bytes, \x3d == 61
```

- After this, the AES-GCM will start and give the encrypted+tag

The vulnerability of this code is we know the secret key `H`. Because we know the secret, we can do preimage attack. Consider the below equation, which is how GHASH works:  
xi=(xi−1⊕Ai)⋅H where A is the input that we control.  
If we know state xi, and we want the next state xi+1 equals to let say P  
𝑃=x𝑖+1=(x𝑖⊕A𝑖+1)⋅𝐻  
We can get the correct Ai+1 by multiplying it with H−1.  
Ai+1=(P⋅H−1)⊕xi

#### [](#Attack-Idea "Attack-Idea")Attack Idea

So, based on that preimage attack, we can craft a valid nonce which hash collides with the given hash, yet contains of `"admin": true`

Connect to the server, we got this:

```
Body: {"token": "c6ffded97492efee4eca42ac218a7088", "admin": false}
Hash: e7f0421f828d7a7ae902cb2dfbd3a3fa00e1953b0ebd647acc121c352b208156e51c5823199fb39e7de53e4f4c43ece2
```

First, we need to calculate the GHASH of the `body`. By doing the previous simulation, we will have:

- `target_x1` (hash of block1, `{"token": "c6ffd`)
- `target_x2` (hash of block2, `ed97492efee4eca4`)
- `target_x3` (hash of block3, `2ac218a7088", "a`)
- `target_x4` (hash of block4, `dmin": false}\x00\x00\x00`)
- `target_finalx` (hash of nonce length)

After calculating each block hash, we can start crafting our payload:

- Set `block_1` with `'{"admin":true, "'` (len = 16). So:
    - `new_block1='{"admin":true, "'`
    - `new_x1=xor(x0, block_1)•H`
- Set `new_block2` with random string length of 16, which all the characters are allowed. Example, the random string is `aaaabbbbccccdddd`, so:
    - `new_block2='aaaabbbbccccdddd'`
    - `new_x2=xor(x1, block_2)•H`
- Apply preimage attack to the `new_block3`, so that the `new_block3` hash value will be the same as `target_x3`.
    - Calculate the correct value by do:
        - `new_block3=xor((target_x3⋅H^-1), new_x2)`
- And then, for the `new_block4`, reuse the given `block4`, which is `dmin": false}\x00\x00\x00`
    - We can do this because we apply preimage attack on the third block, which mean the value of `new_x3` is equals to `target_x3`, which mean the value of `new_finalx` will be equals to `target_finalx`, and because it is the same **hash collision will happen!!**

Important note during crafting the payload:

- We need to brute force the `new_block2` string until the correct value of `new_block3` consist of the allowed characters.

### [](#Solution "Solution")Solution

So, here is my full solution.

```
from Crypto.Util.number import *
from Crypto.Cipher import AES
from multiprocessing import Process
import random

acceptable = string.ascii_letters + string.digits + '!#$%&()*+,-.:;<=>?@[]^_`|~ '
key = b'goodhashGOODHASH'

def tobin(x, n):
    x = Integer(x)
    nbits = x.nbits()
    assert nbits <= n
    return [0] * (n - nbits) + x.bits()[::-1]
 
def frombin(v):
    return int("".join(map(str, v)), 2 )

X = GF(2).polynomial_ring().gen()
poly = X**128 + X**7 + X**2 + X**1 + 1
F = GF(2**128, name='a', modulus=poly)
 
def toF(x):
    # Little endian, so need bit reverse
    x = frombin(tobin(x, 128)[::-1])
    return F.fetch_int(x)
 
def fromF(x):
    # Little endian, so need bit reverse
    x = x.integer_representation()
    x = frombin(tobin(x, 128)[::-1])
    return x
 
def field_mult(a, b):
    return fromF(toF(a) * toF(b))

def rand_str():
    global acceptable
    n = 16
    return ''.join(random.choice(acceptable) for _ in range(n)).encode()

# Calculate H and H^-1
ex = False
Ek = AES.new(key, AES.MODE_ECB)
hkey = Ek.encrypt(b'\x00'*(16))
h = bytes_to_long(hkey)
inverse_h = fromF(toF(h)^-1)

target_json = b'{"token": "a617eb720dd41c256119c8b8e64d50d1", "admin": false}'
padded_target_json = target_json + b'\x00'*((16-len(target_json)%16)%16)
target_x = [0] # initialize with 0
for i in range(0, len(padded_target_json), 16):
    block = padded_target_json[i:i+16]
    x = field_mult(target_x[-1]^^bytes_to_long(block), h)
    target_x.append(x)

def solve():
    global target_x
    global h
    global inverse_h
    global target_json
    # Craft payload
    new_x = [0]
    new_block1 = b'{"admin":true, "'
    new_x.append(field_mult(new_x[-1]^^bytes_to_long(new_block1), h))
    while True:
        new_block2 = rand_str()
        new_x2 = field_mult(new_x[-1]^^bytes_to_long(new_block2), h)
        new_block3 = long_to_bytes(field_mult(target_x[3], inverse_h)^^new_x2)
        # print new_block1+new_block2+new_block3+target_json[48:], target_x[3] == field_mult(new_x2^^bytes_to_long(new_block3), h)
        if not any(v not in acceptable.encode() for v in new_block3):
            payload = new_block1+new_block2+new_block3+target_json[48:]
            print('[+] Payload:', payload)
            exit()

def finds():
    global ex
    while True:
        if ex:
            break
        solve()

if __name__ == '__main__':
    proc = []
    for _ in range(6):
        p = Process(target=finds)
        p.start()
        proc.append(p)
    input()
    ex = True
    for p in proc:
        p.join()
```

Running the code will give you this  
![](https://i.imgur.com/YUXDmvl.png)  
Putting one of the found payload will give you the flag  
![](https://i.imgur.com/iFpncht.png)

`Flag: pbctf{GHASH_is_short_for_GoodHash_:joy:}`