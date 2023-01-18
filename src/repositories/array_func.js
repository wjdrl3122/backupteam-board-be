// // ### 과제

// const { trusted } = require("mongoose")

// // 1. 실습 코드를 보지 않고도 혼자 작성할 수 있도록 연습.
// const scores = [
//     {name: '지영', score: 80, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
//     {name: '효원', score: 50, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
//     {name: '정기', score: 60, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
//     {name: '대신', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
//     {name: '택환', score: 94, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
//     {name: '호승', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
//     {name: '희선', score: 23, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
//     {name: '설인', score: 56, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
// ]

// // 2. `배열에서 40점 미만 점수 받은 자 구하기` for 문 의 경우에는 전부 이름으로 된 배열을 반환하는 한편, 
// //filter 를 사용하면 배열내 객체들로 이루어진 배열을 반환한다. for 문을 사용 했을때 처럼 이름으로만 이루어진 배열로 반환하도록 수정한다.

// const loser = scores.filter((score) => {
//     if (score.score  < 40) {
//         return true
//     } else {
//         return false
//     }
// })

// const loserStudents = scores.filter(score => score.score  < 40)

// console.log(loser)
// console.log(loserStudents)
// // 3. `가장 공부를 잘했던 “지영” 의 점수 확인` for 문의 경우 `지영` 의 score 반 변수에 할당 되는 한편, 
// //find 를 사용하면 지영의 객체를 반환한다. 이때 지영의 score 만 할당되도록 수정한다.

// const wldudScore = scores.find(score => score.name === '지영' )


// 4. 아래 처럼 영화 제목 게시판의 객체로 이루어진 배열과 영화제목을 작성한 사용자로 이루어진 객체가 있다
const movies = [
    {id: 1, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32"},
    {id: 3, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47"},
    {id: 4, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29"},
    {id: 5, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21"},
    {id: 6, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12"},
    {id: 7, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
    {id: 8, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03"},
    {id: 9, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27"},
    {id: 10, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19"},
    {id: 11, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30"},
    {id: 12, movie_title: "Undertaker and His Pals, The", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11"},
    {id: 13, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09"},
    {id: 14, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13"},
    {id: 15, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27"},
    {id: 16, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52"},
    {id: 17, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58"},
    {id: 18, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21"},
    {id: 19, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43"},
    {id: 20, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"}
]

const users = [
    {id: 1,name: "Trix Hannaby", email: "thannaby2r@home.pl"},
    {id: 2,name: "Mead Lantiff", email: "mlantiff2q@imageshack.us"},
    {id: 3,name: "Margette Scaplehorn", email: "mscaplehorn2p@parallels.com"},
    {id: 4,name: "Kimmy Hulks", email: "khulks2o@google.de"},
    {id: 5,name: "Margot Haward", email: "mhaward2n@census.gov"},
    {id: 6,name: "Meredith Spendlove", email: "mspendlove2m@spiegel.de"},
    {id: 7,name: "Tuck Francis", email: "tfrancis2l@msn.com"},
    {id: 8,name: "Duke Davsley", email: "ddavsley2k@pinterest.com"},
    {id: 9,name: "Jimmy Weld", email: "jweld2j@tripadvisor.com"},
    {id: 10,name: "Kaylee Jakoubec", email: "kjakoubec2i@epa.gov"}
]

// 4-2 id 가 1번에 해당하는 user 가 작성한 영화 movie_title 로만 이루어진 배열을 가져온다.
const movieTitle = movies.find(movie => movie.movie_title === 'Looney Tunes: Back in Action')
const userEmail = users.find(user => user.id === movieTitle)
console.log(movieTitle)
// 4-1. 모든 movies 를 반환하는 개발을 한다. 단 movie 를 작성한 user 의 이름을 포함 해라

// const movieUser = movies.map( movie => {
//     const temp = users.find(element => element.id === movie.user_id)
//     if(temp.name){
//         movie.name = temp.name;
//     }
//     return movie
// })

// const movieUser = movies.map( movie => (
//     {...movie,
//     name : users.find(user => user.id === movie.user_id).name, 
//     }
//     ));
// console.log(movieUser);

// 4-2 id 가 1번에 해당하는 user 가 작성한 영화 movie_title 로만 이루어진 배열을 가져온다.

// const find = movies.find(movie => {
//     if(movie.user_id === 1){
//         return movie.movie_title
//     }
// })

// const movieUser = movies.map( movie => {
//     if(movie.user_id === 1){
//         return movie.movie_title
//     }
//     }).filter(l => l);
// console.log(movieUser);

// const UserIdOneMovies = movies.filter( movie => movie.user_id === 1)
// const MoviesTitle = UserIdOneMovies.map(movie => {
//     return movie.movie_title
// })
// console.log(MoviesTitle)

// 4-3 `Looney Tunes: Back in Action` 라는 movie_title 을 가진 게시물의 작성자의 이메일을 가져온다.

// const [movieTitle] = movies.map(movie => {
//     if(movie.movie_title === 'Looney Tunes: Back in Action'){
//         return movie.user_id
//     } 
// }).filter(e => e)
// const UserEmail = users.find( user => user.id === movieTitle)
// const Email = UserEmail.email
// console.log(Email)
