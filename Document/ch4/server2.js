const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./Document/ch4/server2.html'); // fs 모듈로 html 파일 읽음
        res.writeHead(200, { 'Context-Type': 'text/html; charset=utf-8'}); // 200, 201 성공
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8'}); // 에러메세지는 일반 문자열로 text/plain 사용
        res.end(err.message);
    }
})
    .listen(8081, () => {
        console.log('8081 포트에서 서버 대기 중입니다');
    });

// 기타 http 상태 코드
// 3xx 다른 페이지로 이동: 301 영구이동, 302 임시 이동, 304 수정되지 않음(요청의 응답으로 cash 사용)
// 4xx 요청 오류: 400 잘못된 요청, 401 권한 없음, 403 금지됨, 404 찾을 수 없음
// 5xx 서버 오류: 500 내부 서버 오류, 502 불량 게이트 웨이, 503 서비스 사용 불가