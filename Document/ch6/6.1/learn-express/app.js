const express = require('express');
const path = require('path');

const app = express(); // express 내부에 http 모듈이 내장
app.set('port', process.env.PORT || 3000); // 포트 설정, process.env 객체에 PORT 속성있으면 그걸 사용, 없으면 3000 사용

app.get('/', (req, res) => { // 주소에 대한 get 요청시 동작 정의
  // res.send('Hello, Express'); // res.write, res.end 대신 res.send 사용
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => { // .get('port')로 포트번호 가져옴
  console.log(app.get('port'), '번 포트에서 대기 중');
});
