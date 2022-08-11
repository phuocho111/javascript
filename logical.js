// ||(OR)
let i = 16
console.log(i > 15 || i < 18)//true
console.log(i< 14 || i > 13)//true
console.log(i > 15 || i < 12)//true
console.log(i < 13 || i < 14)//false

 console.log(null || 0 || 1 || 2 || undefined)// 1 
 // lấy giá trị truthy đầu tiên
 console.log(null || 0|| undefined) //undefined
 // nếu tất cả đều sai lấy giá trị cuối cùng

// &&(AND)

let j = 20
console.log(j > 15 && j < 30)//true
console.log(j > 25 && j < 15 )//false
console.log(j < 18 && j > 23)//false
console.log(j > 30 && j > 25)//false

console.log(null && 0 && 2 && undefined && 1)// null
// lấy giá trị falsy đầu tiên
console.log(1 && 2 && ' 0 ') // 0
// nếu tất cả đều đúng thì lấy giá trị đúng cuối cùng
//////
console.log( null && 2 || undefined && 0 )//undefined
// && sẽ ưu tiên thực hiện trước ||

// ! (NOT)
x = 2
console.log(!2)//false
console.log(!!2)//true