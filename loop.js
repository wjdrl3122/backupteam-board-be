// // // 10000 ~ 1 번 로그 찍히도록
// for(let i = 10000; i >= 0; i--){
//     console.log(i)
// }

// // // 1 ~ 10000 이하 숫자중 홀수만 찍도록
// for (let i = 1; i < 100; i+=2){
//     console.log(i)
// }

// 구구단 for 문으로 만들어 오기
for (let i = 1; i <= 9; i++){
    console.log('\n',i,'단')
    for(let j = 1; j <= 9; j++){
        let result = i * j
        console.log(i ,'*', j , '=', result);
    }  
}