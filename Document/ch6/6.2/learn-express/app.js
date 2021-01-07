const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); // 개발환경 dev, 배포 환경 combined // GET / 500 13.361 ms - 50 [http메소드][주소][http 상태코드][응답속도][응답바이트]
app.use('/', express.static(path.join(__dirname, 'public'))); // css, js, 이미지 파일을 지정 폴더에 넣으면 브라우저에서 접근 가능
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET)); // cookie를 해석해 req.cokkies 객체로 만듦. ex) name=zero 보내면 { name: 'zero' }가 됨 
app.use(session({ // cookie parser보다 뒤에 놓는것이 좋음 (구버전은 순서에 영향받기 때문)
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true, // 클라이언트에서 쿠기 확인 불가
    secure: false,
  },
  name: 'session-cookie',
}));

const multer = require('multer');
const fs = require('fs');

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'multipart.html'));
});
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('ok');
});

app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});
app.use((err, req, res, next) => { // 가장 아래에 배치
  console.error(err);
  res.status(500).send(err.message); // res.status로 상태 지정
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

// 기타: 쿠기 생성, 삭제
// res.cookie('name', 'zerocho', {
//   expires: new Date(Date.now() + 900000),
//   httpOnly: true,
//   secure: true,
// });
// res.clearCookie('name', 'zerocho', { httpOnly: true, secure: true });