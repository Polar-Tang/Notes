If we want to achive a **security semantic** as a [[Security notions]] we'll randomness to be more secure, and therefore a component to get this randomness, which is **RNG** (random number generator), and a **PRNG**s (pseudorandom number generators) which is the source of the entrophy.
The computer perce can't generate randomness, that's why the randomness comes from the environment, which is analog of chaotic, it might directly:
- sample bits from measurements of temperature
- acoustic noise, air turbulence
- or electrical static.
Also another source of randomness inside the operating system could be 
- drawing from attached sensors
- I/O devices
- network or disk activity
- system logs
- running processes
- user activities such as key presses and mouse movement.

-----
### Quantum random number generators (QRNGs)
Is randomness arise from the quantum mechanical phenomena such as:
- radioactive decay
- vacuum fluctuations
- observing photons’ polarization.
They are process qhich involve real randomness, but the speed to change this to bits could be slow, so we would need an additional component to make this process faster

-----
### Pseudorandom number generators (PRNGs)
Is to produce much more random bits from a fewer random bits. For exasmple an RNG taking randomness from the mouse movement will stop whenever you stop to move your mouse, whereas the PRNGs retrieve a pseudorandom numbers. So take this true random numbers which are saved in a **enptropy pool** then appl (DRBG) which make the number much more larger
![[Pasted image 20241230134925.png]]
So the PRNG perform the following operations:
- `init()`  Initializes the entropy pool and the internal state of the PRNG
	Reinitialize the resource pool to a default value
- `refresh(R)` Updates the entropy pool using some data, R, usually sourced from an RNG
	The refresh operation is often called *reseeding*, and the R argument is often called *seed*, which is the random
- `next(N)` Returns N pseudorandom bits and updates the entropy pool
	The next operationg **DRBG** modifies the enropy pool to produce the pseudo-random numbers
In order to increase [[Backtracking 1]], the PRNG must ensure that the process between the refresh and next is irreversible, this way if an atacker get the resource pool they can't determine the previous value or the previous generated bits.
There are PRNG for crypto and for non-crypto, you shouln't use the non-crypto in cryptographics, because they are used mostly in games, and they don't care much about it predictabillity, caring most of it bits quality.

Intel has a RPNG incorporated by the [rdrand](https://en.wikipedia.org/wiki/RDRAND) assembly instructions, which basically is a small hardware circuit that jumps between two states (0 or 1) depending on thermal noise fluctuations, at a frequency of 800 MHz