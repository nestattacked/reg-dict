# Server

### 1.create config

create server/config.js, you can just copy server/config.example.js and modify it

### 2.build database

```
mysql -uusername -p < server/words.sql
```

### 3.install npm package

```
cd ./server
npm install
```

### 4.run server

```
cd ./server
npm run start
npm run pm2start (if you use pm2 to manage process)
```

the server is running at port 8000

# Client

## Web

### 1.create config

create client/web/config.js, you can just copy client/web/config.example.js and modify it

### 2.install

```
npm install
gulp
```

the file will be output to ./build, copy ./build/index.html to your own web server and copy ./build/static/* to your static file server(like CDN)

### 3.development

```
gulp watch
```

if you want to start to develop on this project, you can run the command above, the webpage will fresh automatically when you change the code
