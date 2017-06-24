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
```

# Client

## Web

### 1.install

```
npm install
gulp
```

the file will be output to build folder, copy it to your own web server
