![[Pasted image 20240724201929.png]]
El protocolo http HiperText Transfer Protocol es el protocolo por excelencia y fundamental de la World Wide Web, en donde un cliente, generalmente un navegador, hace peticiones a un servidor y este responde a dichas peticiones. HTTP permite múltiples peticiones http en una misma sola conexión TCP/TLS, lo cual es lo opuesto a [[HTTP pipeling]] donde se puede enviar repetidas peticiones sin esperar respuestas a cambio y de forma desincronizada. 
El httpm smuggling suscede cuando hay una ambiguedades  en las cabeceras HTTP, principalmente utilizando los siguientes parametros:
- **Content-Length**: Indica el tamaño del cuerpo de la petición HTTP en bytes. Es crucial para que el servidor sepa cuándo ha recibido todo el contenido de la petición.
- **Transfer-Encoding**: Puede ser usado, por ejemplo, con el valor `chunked`, para indicar que la petición se envía en fragmentos de tamaño variable.
Esta ambigüedad puede ser explotada dependiendo de cómo el front-end y el back-end manejen estas cabeceras.
En los dos tipos de HTTP smuggling se distinguen dos 
- **CL.TE (Content-Length to Transfer-Encoding)**:
    
    - **Front-End**: Interpreta el cuerpo de la petición usando `Content-Length`.
    - **Back-End**: Interpreta el cuerpo de la petición usando `Transfer-Encoding: chunked`.
- **TE.CL (Transfer-Encoding to Content-Length)**:
    
    - **Front-End**: Interpreta el cuerpo de la petición usando `Transfer-Encoding: chunked`.
    - **Back-End**: Interpreta el cuerpo de la petición usando `Content-Length`.