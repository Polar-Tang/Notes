The mnt is a RPNG, see [[markdown/short_notes/RNG]], 
This basically has a has a entropy pool of 624 number of 32 bits integer which as a [[markdown/short_notes/masking]] operation, is xored with the biggest integer of 32 bits, this gives it a state space of 2^32×624, or 2^199682. That's a huge number, but the which is predictable and shouldn't be used in cryptography 
```go
func main() {
    // supossed here are 624 items
    pool := [4]uint32{1234, 5678, 9012, 3456}
    var a uint32

    for k := 0; k < len(pool)-1; k++ {
        a = (pool[k] ^ 0x80000000) & (pool[k+1] ^ 0x7fffffff)
        fmt.Printf("Step %d: Result = %d\n", k, a)
    }

}
```
As we say later we have to avoid to utilize non-crypto PRNG for encriptyion, there's an interesting case in wikipedia, where they had used MT for generate passowrds and tokens, here's a snippet of the source code:
```
	/**
	* Generate a hex-y looking random token for various uses.
	* Could be made more cryptographically sure if someone cares.
	* @return string
	*/
	function generateToken( $salt = '' ) {
	$token = dechex(mt_rand()).dechex(mt_rand());
	return md5( $token . $salt );
}
```

There are difference between the software security and criptography, in the software securirty someone achive to securize the code to avoid attackers to abuse for certain  thing, the security in cryptography means to ensure that all the problems are imposible to solve 