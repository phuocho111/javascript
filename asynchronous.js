// callback
// function func1(){
//     console.log(1)
// }
// function func2(){
//     console.log(2)
// }
// func1();
// func2();
// 1 2

//setTimeout
// function func1(){
//     setTimeout(function(){
//         console.log(1)
//     },1000);
// }
// function func2(){
//     console.log(2)
// }
// func1();
// func2()
// 2 1


//callback hell
// function test(){
//     console.log("1")
//     setTimeout(()=>{
//        console.log("2")
//        setTimeout(()=>{
//         console.log("3")
//         setTimeout(()=>{
//             console.log("4")
//         },3000)
//        },1000)
//     },2000)
// }
// test()

//promise

 new Promise(function(resolve,reject){
    setTimeout(()=>resolve(1),1000)
}).then(function(result){console.log(result)  
    return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result){console.log (result) 
    return new Promise((resolve,reject) => {
    setTimeout(()=> resolve(result * 2),2000)
    })
}).then(function(result){
    console.log (result)
})//1 2 4

//promise error handling
new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(new Error('Whoops'))
    },1000)
}).catch(function(err){
    console.log("The error is handled, continue normally")
}).then(() => console.log("Next successful handler runs"))

//async/await


async function func(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('done'),1000)
    });
    let result = await promise;
    console.log(result)
}
func()

//


function person1(age){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age < 10){
                console.log("chưa đủ tuổi vào cổng")
                reject("NG")
            }
            else{
                console.log('đã đủ tuổi vào cổng')
                resolve("OK")
            }
        },3000)
       
    })
}
function person2(money){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(money < 1000000){
                console.log('không thể mua vé vào cổng')
                reject('NG')
             }else{
                 console.log("có thể mua vé vào cổng")
                 resolve('OK')
             }
        },1000)
        
    })
}

async function func(){
    try{
        const res1 = await person1(12);
        const res2 = await person2(90000);
        console.log(res1, res2)
    }catch(err){
        console.log(err)
    }
}
func()
//promise.All

Promise.all([person1(9),person2(90000)])
.then(([res1,res2])=>{console.log(res1,res2)})
.catch(err=>{console.log(err)})






  
