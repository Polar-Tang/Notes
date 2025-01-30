
#### Config file def:
The configuration in the nginx file has directives called blocks, when a block has a nested block, it's called context, and the other directives, in the parent, are considered to be in the main context
#### **Example**
#### Serving static html
For the static files, these should be served from different local directories, tipically the html files are all saved in `/data/www` and `/data/mages` for the images. If we want to serve this static files we will need an [server](https://nginx.org/en/docs/http/ngx_http_core_module.html#server) block, inside an [http](https://nginx.org/en/docs/http/ngx_http_core_module.html#http) block with two locations blocks
```nginx
server {
	server_name example.com
	location / {
		root /data/www;
	}
	location /images/ {
		root /data;
	}
}
```

## `location` directive
https://nginx.org/en/docs/http/ngx_http_core_module.html#location
location first select the endpoint of the URI. All the htmls will be serve with /data/www as the root of the URI.
Now in our nginx config, the html will be served in `http://localhost/` and the images in the `http://localhost/images/example.png`
*note*:
>`/var/log/nginx/access.log`it's a symbolic link (a pointer to another file or directory) to `/dev/stdout` if you're using docker and want to see this logs use `docker logs <container-name>` 

#### Routing static files with react
React routes all the endpoint in strange ways, because it's a SPA, we need to configure nginx for this behaviour, otherwise nginx will search literally for the specified endpoint:
```sh
"GET /login HTTP/1.1" 404 465 "-" "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0" "-" 
```
Here the browser sends an HTTP request to the server for `/login` and the server responds with a 404 because `/login` doesn't exist as a file.
At the same time that react is rendered the component of the same endpoint
```sh
"GET /assets/index-DOYdmDVo.js HTTP/1.1" 304 0 "http://localhost/login" "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0" "-"
```
So we are doing two request at the same time.
We tell nginx to handle this behaviour with
- `try_files $uri /index.html;` : When a file or directory is matching not found routes to `index.html`
- The root directive is set outside the location 
```ngix
server {
    root /data/www;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```
### Setting Nginx as a proxy server
#### Proxy def:
A proxy is a server that receives requests, passes them to the proxies servers, retrieves the response from them, and sends them back to the clients.
#### `listen` directive
https://nginx.org/en/docs/http/ngx_http_core_module.html#listen
For this we could declare the listen directive. The `listen` directive in an NGINX `server` block specifies the port on which NGINX will listen for incoming connections.
```nginx
server {
	listen 5000;
  
	root /data/www;

	location / {
	}
```
Here nginx will be listeng to the port 5000 instead of the port 80
**Form example** here's listening to the port 8080 to serve files, and with the location / directive, is serving directly in the root of the url. And the root
#### `proxy_pass`
https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass
The `proxy_pass` directive sends the incoming request from the client to a different server (a proxy server).
You could set this in the server block, rather as a address or as a uri
###### URI
- As a uri
	```nginx
	location /name/ {
    proxy_pass http://127.0.0.1/remote/;
	}
	```
	- Now the request to `localhost/name/test` are [normalized](https://nginx.org/en/docs/http/ngx_http_core_module.html#location) and routed to `localhost/remote/test`

###### Adress
- Now as an address the thing change
	```
	location /some/path/ {
	    proxy_pass http://127.0.0.1;
	}
	```
	The entire original URI is passed unchanged to the server.

#### pending to check https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_bypass


### Upstream server
Upstream server in nginx refers to the backend server that nginx proxies to