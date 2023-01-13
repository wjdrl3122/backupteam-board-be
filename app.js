const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

// //query 가져오기
// app.get('/', (req, res) => {
//     console.log(req.query);
// })

// // //params 가져오기
// app.get('/:id', (req, res) => {
//     console.log(req.params)
// })

// // //header 가져오기
// app.get('/', (req, res) => {
//     console.log(req.header('wjdrl'))
// })

//cookies 가져오기
// app.get('/', (req, res) => {
//     console.log(req.cookies)

//     res.send('cookies')
// })

// //body 가져오기
// app.get('/', (req, res) => {
//     console.log(req.body)
// })

/////////////////////////////////

// post : 로그인
app.post('/login', (req, res) => {
    const { nickname, password } = req.body
    console.log(req.body)
    res.send("로그인 했쌈")
})
// post: 회원 가입
app.post('/signup', (req, res) => {
    const { nickname, password, name, phone } = req.body
    console.log(req.body)
    res.send("회원가입이 완료됐습니다.")
})

// get: 회원정보 한명 가져오기
app.get('/:userId', (req, res) => {
    console.log(req.params)
})
// get: 게시글 리스트  가져오기
app.get('/post', (req, res) => {
    console.log()
})
// get: 선택 게시글 상세 정보 가져오기
app.get('/:postId', (req, res) => {
    console.log(req.params)
})
// post: 게시글 작성하기

// post: 게시글 수정하기

// post: 게시글 삭제하기



app.listen(3000, () => {
    console.log("서버가 열렸숨당")
})
