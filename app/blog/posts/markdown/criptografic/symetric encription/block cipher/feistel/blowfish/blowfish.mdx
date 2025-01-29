
How you could apply a reverse enginering utilizing that algorithm if every bcript has a random nonce.

![[Pasted image 20241221214617.png]]
1. **Input Splitting (Plaintext)**
	- The plain text is divided into 64 bits blocks, then these are divided into two halfs of 32 bits,  (L) **Left** and (R) **Right**
	- The Feistel structure 16 rounds
2. **Key Initialization and Subkeys (p-boxes)**
	- Blowfish generates 18 subkeys (P₁ to P₁₈), the [[p-box]]
	- 16 of them are used (`P₁` to `P₁₆`) and the last two is for the last computation
3. **Feistel Network with 16 rounds**
	- For the 16 rounds:
		- The **L** is XORed with the current [[p-box]] key **(P₁, P₂, ..., P₁₆)**.
		- Now the xored L is passed into the **F function**
			- this split the 32 bit text into 4 chunks of 8 bits
			- Each 8 bit is redefined to a S-box value (of 32 bits) 
			- Now the four 32 bits are xored between them to produce a single value of 32 bits
			- The new xored value is the result of this **F function**
		- Now the result of the **F function** it's xored with the **R** 
		- Swap L and R and repeat, exept for the last roun
4. In the last round there's no swap, and finally the **R** is xored with **P₁₇** and **L** is xored with **P₁₈**
5. The two values now are concatenated and give us a 64-bit

-----
 