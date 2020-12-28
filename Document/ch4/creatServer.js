const http = require('http'); // import module 

http.createServer((req, res) => { // callback(incomingMessage, serverResponse), return server
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello node!</h1>');
    res.end('<p>Hello Server</p>');
})
.listen(8080, () => { // connect server
    console.log('8080번 포트에서 서버 대기중입니다');
});

// 현재 파일 실행 후 console에 log가 잘 찍히면 브라우저로 localhost:8080 접속
// localhost란 현재 컴퓨터의 내부 주소
// 외부에서 접근할 수 없고 내 컴퓨터에서만 접속 가능
// localhost 대신 127.0.0.1:8080 으로도 접속 가능
// 이러한 주소를 IP(internet protocol) 라고 부름

//  port
// 