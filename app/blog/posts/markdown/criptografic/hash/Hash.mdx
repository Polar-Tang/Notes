Hash refers to the output of a **[[hash function]]**, this function condense an input into a string that seems random, but essentially, represents that transformed input.
This has some features as:
- The hash functions utilize a **[[Deterministic algorithm]]** to scramble the data. the same input will always produce the same hash output.
	![[Pasted image 20250105231308.png]]
	For example if i get a rubic's cube and i start to scramble the colors, it will result in somthing that doesn't resemble to the first rubic's cube, but if i start again and i do exaclty the same moves i will come up with the same result

- The output is always a fix size, in case of [[SHA-256]] it will always be 256 bits
- It has a fast computation
- You usually cannot guess the input by the output, the difficulty to take the original input from the hash output it's called: **Preimage Resistance**, more of this below
## Hash functionality

The hash has a fixed size but the input could be any size. Unlike the standard encryption, hash don't relies in confidentiality, this instead guarantees the data integrity.  This is a big **difference between the encryption**, while the hash goals wants to preserve the confidentially while the other guarantee to keep the input/data unmodified.

###### **Common hash function**
So the hashes are basically a fingerprint, **For example**, when you download a file you also download it fingerprint, this way the antivirus, or whatever software could compare the changes that happen to the file. Here are mor specif cases:  
- cloud storage systems use them to identify identical files and to detect modified files
- the Git revision control system uses them to identify files in a repository
- host-based intrusion detection systems ([HIDS](https://en.wikipedia.org/wiki/Host-based_intrusion_detection_system)) use them to detect modified files
- network-based intrusion detection systems ([NIDS](https://es.wikipedia.org/wiki/NIDS)), use hashes to detect known-malicious data going through a network;
- Whether you’re encrypting an email, such as [GPG4win](https://www.gpg4win.org/about.html#:~:text=What%20is%20Gpg4win?,for%20Information%20Security%20(BSI).) and [here](https://medium.com/@cbanowsky/gpa-and-encrypted-messaging-ebbd66fcf570)'s a write up to do so

- sending a message on your mobile phone, 
- connecting to an HTTPS website
- connecting to a remote machine through IPSec or SSH


- forensic analysts use hash values to prove that digital artifacts have not been modified; 
- Bitcoin uses a hash function in its proof-of-work systems
- and there are many more.
there’s a hash function somewhere under the hood.


The most common functions to achive this are the **digital signatures**, or just **signatures**.

### Signatures
**Signatures**: The application process the data to be singed rather than the message itself, thereby the hash acts as an identifier of the text. So enough changing a single bit to cause the hash to totally change
![[Pasted image 20250105000810.png]]

#### Unpredictable
Let's take a look at this [NIDS](https://es.wikipedia.org/wiki/NIDS) example where the output changes drastically by simply changing a single bit.
As you can see, though the values a, b, and c differ by only one or two bits (a is the bit sequence 01100001, b is 01100010, and c is 01100011),
![[Pasted image 20250105132909.png]]
Given the output would be impossible to guess the value of the input. The unpredictable result is often refered as **random oracle**. Basically **a secure hash function should be like a black box that returns a random string each time it receives an input.**

The randomness and unpredictable behavior could be divided into two main categorais, **preimage reisistance** and **colision resistance**

### Preimage resistance
We mention earlier the preimage resistance feature, basically this guarantee to be impossible to reverse the output of the hash. If i had an output it seems random and totally unrelated with the input that produced it.

hash functions are sometimes called one-way functions because it cannot be inverted. Even with a compunter unlimited power.
For example, suppose that I hash some message using the SHA-256 hash function and get this 256-bit hash value:
```
f67a58184cef99d6dfc3045f08645e844f2837ee4bfcc6c949c9f7674367adfd
```
I would need to brute-force a 2²⁵⁶ possible values of a 256-bit hash. But there are many more values, supposing the message has 1024 bit, each possible 256-bit hash value
will have `2^1024 / 2^256 = 2^1024 – 256 = 2^768`, so with 2⁷⁶⁸ preimages of 1024 bits would be practically imposible to map a string to the original value.

#### The cost of a preimage
GIven a function and a hash value `H`, we could try different messages until hit a value.
```
find-preimage(H) {
repeat {
	M = random_message()
	if Hash(M) == H then return M
	}
}
```
random_message() generates a random message (say, a random 1024-bit value). Obviously, find-preimage() will never complete if the hash’s bit length, n, is large enough, because it will take on average 2^n attempts before finding a preimage. That’s a hopeless situation when working with n = 256, as in modern hashes like SHA-256 and BLAKE2.
>Second-preimage
resistance, on the other hand, describes the case that when given a
message, M1, it’s practically impossible to find another message, M2, that
hashes to the same value that M1 does.



In the SHA-256 hash we just implemented, there are an _infinite_ number of possible inputs, but only `2^256` possible _outputs_. This means that there is a chance (albeit a very small one) that two different inputs can result in the _same_ output.

**For example** consider a hash function where there's only 15 possibles outputs. WIth this smal number of possibilities, some inputs could be assigned to the same value
![[Pasted image 20250105225322.png]]

The most common hashes are:
- MD5
- SHA-1
- SHA-256
- SHA-3
- BLAKE2