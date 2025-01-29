Rate limit it's the max of request allowed in an API.
To test for this there's some additional header that snitched for the rate limiting:
```
x-rate-limit:
x-rate-limit-remaining:
```
This header migth not be present, but anyway there still could be an rate limit, after sending many request you could receive **the header**:
```
Retry-After:
```
Or maybe just a `429 too many request` after a bruteforcing.
###### Adjusting rate-limit in **WFUZZ**
Sometimes the rate-limit could be more tight of what you need, so you could adjust the flags in your WFUZZ. Using the -t option allows you to specify the concurrent number of connections, and the -s option allows you to specify a time delay between requests.
![[Pasted image 20241029103001.png]]

###### Adjusting rate-limit in **Burpsuite**
In intruder go to the options `rsource pool` and you could create a pool with the delay do you want
![[Pasted image 20241029103312.png]]
With **Intruder**, the attack type **Pitchfork** can send values for two different payload positions. In this case, you could place a payload at `uid` and a separate payload for `test`.

#### Bypass rate-limit
You also could bypass rate-limit using small variations on the url-path or adding **meaningless parameters** to requests. **For example** you subtly changing the URL path, such as through case changes or adding characters (like `%00` or `%20`), using a [[cache_buster]], or also:
- `POST /api/myprofile%00` – `%00` is a null byte often ignored by backend servers but may evade detection by the rate-limiting system.
- `POST /api/myProfile` vs. `POST /api/MyProfile` – Upper- and lowercase changes may be considered different paths by some rate-limiting systems. 
- Also using [[IP_Spoofing_Headers]]
- But if you're rich, you could use burpsuite pro and aws to [[rotate-IP_with_burpsuite]]