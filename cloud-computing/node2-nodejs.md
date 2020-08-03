## nodejs 설치
```
sudo yum install -y epel-release
sudo yum install -y nodejs
```

## 작업 디렉토리 생성
```
mkdir work
cd work
```

## nodejs 프로젝트 생성
```
npm init
npm install express --save
```

## 시작 파일 변경
```
vi package.json
```
```
"scripts": { 밑에 아래 내용 추가
    "start": "node app.js",
```
```
VI editor 사용법:
Command 모드 <-> Insert 모드
Command 모드 -> Insert 모드 : a, i, o 키를 이용
Insert 모드 -> Command 모드 : ESC 키 이용
저장 : Command 모드에서 :wq! 입력 
```

## app.js 파일 생성
```
vi app.js
```

## 서버 실행
```
npm start 
```

## 웹 브라우저에서 접속
```
http://localhost:28080
```
