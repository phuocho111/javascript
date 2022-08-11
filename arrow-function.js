// function
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

// Arrow function
'use strict'
let temperatures = 21
let feels;
if(temperatures < 24){
    feels = () =>{
        console.log('so cool')
    }
}else{
    feels = () =>{
        console.log('so hot')
    }
}
feels()
