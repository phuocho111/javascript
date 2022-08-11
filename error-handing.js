//
try{
    console.log('hello')
}catch{
    console.log('error')
}//hello
//
try{
    console.log('success')
    lala
    console.log('result')
}catch{
    console.log(' not defined')
}// success, not defined

try{
    setTimeout(function(){
        lalala
    },1000)
}catch{
    console.log('error')
}// sẽ không catch được lỗi



//async
setTimeout(function(){
    try{
        lalala;
    }catch{
        console.log('not defined')
    }
},1000)



//Error object
try{
    bilano ;
} catch(err){
    console.log(err.name)//ReferenceError
    console.log(err.message)//x is not defined
    console.log(err.stack)//ReferenceError: x is not defined
    
}

let json = '{"name":phuoc, "age": 24}'
try{
    let user = JSON.parse(json)
    console.log(user.name)
} catch(err){
    console.log(err.name)//SyntaxError
    console.log(err.message)//Unexpected token o in JSON at position 1
    console.log('error')//error
}



//throw: dữ liệu không chính xác 

let data = '{ "age":24}'
try{
    let user = JSON.parse(data)
    console.log(user.name)
}catch(err){
    console.log("error")
}//undefined

let data = '{ "age":24}'
try{
    let user = JSON.parse(data)
    if(!user.name){
        throw new SyntaxError('Incomplete data: no name')
    }
} catch(err){
    console.log('JSON Error: ' + err.message )
}//JSON Error: Incomplete data: no name


//Rethrowing: catch chỉ bắt những lỗi mà nó bk, rethrowing bắt tất cá những lỗi khác

let data = '{"age":30}';
try{
    let user = JSON.parse(data);
    if(!user.name){
        throw new SyntaxError("Incomplete data: no name")
    }
    lalaa;
    console.log('success')
}catch(err){
    if(err instanceof SyntaxError){
        console.log("Json Error" + err.message )
    }else throw err
}//Json Er(rorIncomplete data: no name

//

function data(){
    let json = '{"age" : 30}'
    try{
        lalala();
    }catch(err){
        if(!(err instanceof SyntaxError)){
            throw err
        }
    }
}
try{
    data();
}catch(err){
    console.log("External catch got: " + err)
}//External catch got: ReferenceError: lalala is not defined


//try...catch...finally
function func(){
    try{
        return 1 //1
       
    }catch{
        console.log(error)
    }finally{
        console.log('finally')//finally
    }
}
console.log(func())
// finally and return: finally thực hiện trước rồi mới đến try
// khi không return thì try vẫn thực hiện trước