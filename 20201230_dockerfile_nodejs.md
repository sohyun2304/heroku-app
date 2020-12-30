### Dockerfile 
```
FROM node:alpine

WORKDIR /home/node

COPY ./package.json ./package.json
COPY ./index.js ./index.js

RUN npm install

CMD ["npm", "start"]
```

### 빌드
```
docker build -t nodejs.:0.1 .
```

### 실행
```
docker run -d -p 8080:8080 nodejs:0.1
```

### Linux 사용자 테스트
```
curl -X GET http://localhost:8080
```
