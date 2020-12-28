const http = require('http');
const fs = require('fs').promises;

const users = {};

http.createServer(async (req, res) => {
    try {
        console.log(req.method, req.url);
        if (req.method === 'GET') { // 서버의 자원 요청
            if (req.url === '/') {
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end(data); // return 이 추가됨 res.end는 함수를 종료하는 것이 아님. 따라서 응답 후 함수를 종료하고 빠져나가려면 return문이 필요함
            } else if (req.url === '/about') {
                const data = await fs.readFile('./about.html');
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end(data);
            } else if (req.url === '/users') {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8' });
                return res.end(JSON.stringify(users));
            } 
            try { // 원하는 주소 밖의 요소는 else 가 아닌 try로 표현
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (error) {
                console.log(error);
            }
        } else if (req.method === 'POST') { // 서버에 자원 등록
            if (req.url === '/user') {
                let body = '';
                req.on('data', (data) => body += data); // req, res는 내부적으로 stream으로 되어있음. 따라서 요청과 응답에 대한 데이터도 스트림 형식임
                return req.on('end', () => { // 또한 이벤트도 달려있음
                    console.log('POST 본문(Body):', body);
                    const { name } = JSON.parse(body); // 받은 데이터는 문자열임 따라서 obj 형태로 변환 필요. 구조분해할당 형태. parse한 오브젝트에서 name이라는 키의 값을 name에 할당함
                    const id = Date.now(); 
                    users[id] = name; // { 'id번호': name }
                    res.writeHead(201);
                    res.end('등록 성공'); // 여기서는 왜 또 리턴 안함?
                });
            }
        } else if (req.method === 'PUT') { // 서버 자원을 요청에 들어있는 자원으로 치환
            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                return req.on('end', () => {
                    console.log('PUT 본문(Body):', body);
                    users[key] = JSON.parse(body).name;
                    return res.end(JSON.stringify(users)); // 또 리턴하는건 뭐지? 그냥 res.end로 끝내면 안되나?
                });
            }
        } else if (req.method === 'DELETE') {
            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                delete users[key];
                return res.end(JSON.stringify(users));
            }
        }
        res.writeHead(404); // GET POST PUT DELETE 아니면 404 전송
        return res.end('NOT FOUND');
    } catch (error) { // 응답 과정에서 예상치 못한 오류 발생시 500 에러가 응답으로 전송. 실무에서는 500 에러 잘 안씀
        console.error(error);
        res.writeHead(500); // 내부 서버 오류
        res.end(error);
    }
})
    .listen(8082, () => {
        console.log('8082 포트에서 서버가 대기 중 입니다.');
    });