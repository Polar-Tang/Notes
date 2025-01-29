###### Bruteforce with wfuzz
To use encode value we use the `-e` flag, mor information https://wfuzz.readthedocs.io 
But the value are 

| Risk    | Description  | May ask you                                                                                                                        |
| ------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| hashes  | base64       | Encode the fiven string using base64                                                                                               |
| url     | urlencode    | Replaces special characters in strings using the %xx<br>escape. Letters, digits, and the characters ' _ . - '<br>are never quoted. |
| default | random_upper | Replaces random characters in strings with capital<br>letters.                                                                     |
| hashes  | md5          | Applies an MD5 hash to the given string                                                                                            |
| default | none         | Returns all characters without changes.                                                                                            |
| default | hexlify      | Converts every byte of data to its corresponding twodigit<br>hex representation.                                                   |
Now to use an encoder with wfuzz, add a comma operator with the payload and specify its name
```
wfuzz -z file,wordlist/api/common.txt,base64 http://hapihacker.com/FUZZ
```

**Explanation**:
In this case after the "-z" option the comma is used to separate different arguments. First the keyword "file" tells to wfuzz that the following will be a path to find the wordlist, so the next is the wordlist, and after these two arguments we got an optional which is the encoding, in this case "base64"

And if you want to encode every line of the wordlist using different encodings you could do this way:
```
wfuzz -z list,a,base64-md5-none
```
So here i provide after the "list" word three letters separated by a hyphen, and this it's like a write a wordlist in the oneliner instead of provide a file path, and later the differents encodings, like this:
```sh
$ wfuzz -z list,a-b-c,base64-md5-none -u http://hapihacker.com/api/v2/FUZZ
000000002: 404 0 L 2 W 155 Ch "0cc175b9c0f1b6a831c399e269772661"
000000005: 404 0 L 2 W 155 Ch "92eb5ffee6ae2fec3ad71c777531578f"
000000008: 404 0 L 2 W 155 Ch "4a8a08f09d37b73795649038408b5f33"
000000004: 404 0 L 2 W 127 Ch "Yg=="
000000009: 404 0 L 2 W 124 Ch "c"
000000003: 404 0 L 2 W 124 Ch "a"
000000007: 404 0 L 2 W 127 Ch "Yw=="
000000001: 404 0 L 2 W 127 Ch "YQ=="
000000006: 404 0 L 2 W 124 Ch "b"
```
So here is encoding a in base64, md5, and then no encoding, then the same with b and so on.

If, instead, you want each payload to be processed by multiple encoders,
separate the encoders with an @ sign:
```sh
$ wfuzz -z list,aaaaa-bbbbb-ccccc,base64@random_upper -u http://192.168.195.130:8888/identity/
api/auth/v2/FUZZ
000000003: 404 0 L 2 W 131 Ch "Q0NDQ2M="
000000001: 404 0 L 2 W 131 Ch "QUFhQUE="
000000002: 404 0 L 2 W 131 Ch "YkJCYmI="
```
Here, `@random_upper` applies a random capitalization on the provided payloads, **Then** apply `base64` encoding to the result of `random_upper`. 
- For `aaaaa`, `wfuzz` first applies `random_upper` (which might transform it to something like `aAaAa`), and then it base64-encodes that to produce a final value like `"QUFhQUE="`.
- The same two-step encoding is applied to each of `bbbbb` and `ccccc`, producing unique outputs for each.