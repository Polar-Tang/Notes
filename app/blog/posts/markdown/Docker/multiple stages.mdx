When you have multiple images
```Dockerfile
FROM node:20

FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
```
then you have multiple stages
By default the stages aren't named and you refer to them as their index (0 for the first one, and so on).  However you can add a name by adding an AS in the from line
```Dockerfile
FROM node:20 AS build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
```
Or you could also copy the file in the from:
```Dockerfile
COPY --from=nginx:latest /etc/nginx/nginx.conf /nginx.conf
```


### Remove all images
```
 docker rmi $(docker images -q) --force
 ```
 remove all containers
 ```
docker rm $(docker ps -aq) --force
 ```