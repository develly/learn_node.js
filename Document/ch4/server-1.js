const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/html; charset=utf-8'}); // 콘텐츠 형식 html, 한글 표시 위해 utf-8지정
    res.write('<h1>Hello node!</h1>'); // 이렇게 write와 end에 html 을 적는건 비효율적
    res.end('<p1>Hello server</p1>'); // 따라서 html 파일을 미리 만들어 두고 fs 모듈로 읽어서 전송함
});
server.listen(8080);

server.on('listening', () => {
    console.log('8080 포트에서 대기중입니다');
});
server.on('error', (error) => {
    console.error(error);
});

// 변경한 소스코드는 서버에 바로 반영되지 않으므로 종료 후 다시 실행해야한다
