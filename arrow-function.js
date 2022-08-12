// // function
// 'use strict'
// let temperature = 30
// let feel;
// if (temperature < 24){
//     feel = function(){
//         console.log("so cool")
//     }
// }else{
//     feel = function(){
//         console.log("so hot")
//     }
// }
// feel()

// // Arrow function
// 'use strict'
// let temperatures = 21
// let feels;
// if(temperatures < 24){
//     feels = () =>{
//         console.log('so cool')
//     }
// }else{
//     feels = () =>{
//         console.log('so hot')
//     }
// }
// feels()




// this
/// function


function Courses(name,price){
    this.name = name;
    this.price = price
    console.log(`${this.name},price is ${this.price} $`)
}



Courses("html",100)


///Arrow function

let Course = (name,price)=>{
    this.name = name;
    this.price = price
    console.log(`${this.name},price is ${this.price} $`)
}

Course("php",200)



//bind arguments

///function
let number = function(){
    console.log(arg)
}
number(1,2,3)
//arg(3)[1,2,3]

///arrow function
let x = () => {
    console.log(args);
}

x(4,6,7); 
//args is not defined


