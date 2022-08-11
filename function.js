//Expression Fuction
let age = function(){
    console.log('bao nhieu tuoi')
}
age();//bao nhieu tuoi
//Declaration Function
function sayHi(){
    console.log('hello')
}
sayHi()//hello


//Expression Fuction
sayHi('phuoc')
let sayHi = function(name){
    console.log(`hello, ${name}`)
}//sayHi is not defined

//Declaration Function
sayHi('phuoc')
function sayHi(name){
    console.log(`hello, ${name}`)
}//hello, phuoc
 
//In strict mode: Ở chế độ nghiêm ngặt, khi Khai báo hàm nằm trong một khối mã, nó sẽ hiển thị ở mọi nơi bên trong khối đó. Nhưng không nằm ngoài nó.
'use strict'
let temperatures = 30
if (temperaturess < 24){
    function feel(){
        console.log("so cool")
    }
}else{
    function feel(){
        console.log("so hot")
    }
}
feel()//feel is not defined

//////
'use strict'
let temperature = 30
let feel;
if (temperature < 24){
    feel = function(){
        console.log("so cool")
    }
}else{
    feel = function(){
        console.log("so hot")
    }
}
feel()