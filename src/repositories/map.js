// 1. 배열한테 사용한다.
const array = ['1', '2', '3']
const scores = [
    {name: "정기", score: 80}, 
    {name: "설인", score: 10},  
    {name: "지영", score: 50},  
    {name: "효원", score: 20},
    {name: "호승", score: 70},
    {name: "희선", score: 41},
]


const  arrayScore = scores.filter(score => score.score < 30)
console.log(arrayScore)

// // filter 를 for문으로 예시
// for (let i = 0; i < i.length; i++){
//     if (scores[i].score < 40){
//         빠따.posh(scores[i].name)
//     }
// }

// // find 를 for 문으로 예시
// let 지영스코어 = null
// for (let i = 0; i < i.length; i++){
//     if (scores[i].name === '지영'){
//         지영스코어 = scores[i].score
//     }
// }

// // map 를 for 문으로 예시
// const 보정scores = []
// for (let i = 0; i < i.length; i++){
//     const newScore = scores[i].score + 5
//     보정scores.push({
//         name: scores[i].name,
//         score: newScore
//     })
// }

// // find 를 for 문으로 예시


// Array.map()
// Array.filter()
// Array.find()

// // 2. return 값이 있다.

// const mapResult = Array.map()
// const filtersResult = Array.filter()
// const findResult = Array.find()

// // 3. 배열로 return 해준다. () 안에 함수를 넣어줘야한다.

// () => ({
//     ...score,
//     score : s,
// })

// // map
// const updateScore = scores.map(score => ({
//     ...score,
//     score: score.score + 5
// }))
// console.log("보정_점수 : ", updateScore)


// // filter

// const filterResult = score.filter( score => score.score < 40)


// // find