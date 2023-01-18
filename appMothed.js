
//query 가져오기
app.get('/', (req, res) => {
    console.log(req.query);
})

// //params 가져오기
app.get('/:id', (req, res) => {
    console.log(req.params)
})

// //header 가져오기
app.get('/', (req, res) => {
    console.log(req.header('wjdrl'))
})

// cookies 가져오기
app.get('/', (req, res) => {
    console.log(req.cookies)

    res.send('cookies')
})

//body 가져오기
app.get('/', (req, res) => {
    console.log(req.body)
})

/////////////////////////////////

// post : 로그인
app.post('/login', (req, res) => {
    const { nickname, password } = req.body
    console.log(req.body)
    res.send("/login API")
})
// post: 회원 가입
app.post('/signup', (req, res) => {
    const { nickname, password, name, phone } = req.body
    console.log(req.body)
    res.send("/signup API")
})

// get: 회원정보 한명 가져오기
app.get('/:userId', async (req, res) => {
    const user = await User.findOne({where: {userId}})
    res.send({user})
})

// get: 게시글 리스트  가져오기
app.get('/post', async (req, res) => {
    const postList = await Post.findAll()
    res.send({postList})
})

// get: 선택 게시글 상세 정보 가져오기
app.get('/:postId', async (req, res) => {
    const post = await Post.findOne({where: {postId}})
    res.send({post})
})
// post: 게시글 작성하기
app.post('/post', (req, res) => {
    const { title, content } = req.body
    res.send('/postCreate API')
})
// post: 게시글 수정하기
app.patch('/post/:id', (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    res.send('/postUpdate API')
})
// post: 게시글 삭제하기
app.delete('/post/:id', (req, res) => {
    const { id } = req.params
    res.send('/postDelete API')
})

