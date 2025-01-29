Dockerfile it's a key name that docker identifies for builds images

When we have to write a docker file the are a few keywords that you need to know:

Sure! Let’s break down **volumes** and the **parameters in a Dockerfile** in detail. I’ll start with **volumes** in `docker-compose.yml` and then explain Dockerfile parameters.

#### **FROM**

```dockerfile
FROM node:18
```

- Specifies the **base image** to use for the container.
- Example:
    - `node:18`: A prebuilt Node.js image with Node.js version 18 and npm.
    - `ubuntu:20.04`: A minimal Ubuntu Linux image.

#### **WORKDIR**

```dockerfile
WORKDIR /app
```

- Sets the **working directory** inside the container. All subsequent commands (like `COPY` and `RUN`) will use this directory as their base.
- If `/app` doesn’t exist, it will be created automatically.

---

#### **COPY**

```dockerfile
COPY . .
```

- Copies files from the host machine into the container.
- **First argument**: The source directory on the host (`.` means current directory).
- **Second argument**: The destination directory in the container (`.` means the current working directory inside the container).

---

#### **RUN**

```dockerfile
RUN npm install
```

- Executes commands in the container during the build process.
- Commonly used to install dependencies, build assets, etc.
- Example:
    - `RUN apt-get update && apt-get install -y curl`: Updates the package list and installs `curl`.

---

#### **CMD**

```dockerfile
CMD ["node", "index.js"]
```

- Specifies the **default command** to run when the container starts.
- **Example**: `["node", "index.js"]` starts a Node.js server.
- It’s the equivalent of running `node index.js` in the container’s terminal.

---

#### **EXPOSE**

```dockerfile
EXPOSE 3000
```

- Documents the **port** the container will listen on.
- Does **not** publish the port; you must map it in `docker-compose.yml` (e.g., `ports: - "3000:3000"`).

---

#### **ENV**

```dockerfile
ENV NODE_ENV=production
```

- Sets **environment variables** inside the container.
- Example:
    - `NODE_ENV=production`: Configures the app to run in production mode.

---

#### **ENTRYPOINT**

```dockerfile
ENTRYPOINT ["npm", "start"]
```

- Defines the **main process** to run in the container.
- Difference from `CMD`:
    - `ENTRYPOINT` cannot be overridden at runtime unless you use `docker run --entrypoint`.

---

#### **VOLUME**

```dockerfile
VOLUME /data
```

- Creates a **persistent volume** that isn’t deleted when the container stops.
- Similar to defining volumes in `docker-compose.yml`.

---

#### **Final Example Dockerfile**

```dockerfile
FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

1. **`FROM node:18`**: Use Node.js 18 as the base image.
2. **`WORKDIR /app`**: Set `/app` as the working directory.
3. **`COPY package.json package-lock.json ./`**: Copy dependency files first (enables caching).
4. **`RUN npm install`**: Install dependencies.
5. **`COPY . .`**: Copy all remaining files into `/app`.
6. **`EXPOSE 3000`**: Inform Docker that the container listens on port 3000.
7. **`CMD ["npm", "start"]`**: Run the app when the container starts.

---

