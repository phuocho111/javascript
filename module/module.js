// constant
export const HTML = "html"
export const PHP = "php"
export const CSS = "css"
//class
export class User{
    constructor(name){
        this.name = name
    }
}
//
 function sayHi(name){
    console.log(`hello,${name}!`)
}
function sayBye(name){
    console.log(`bye,${name}!`)
}
;
export {sayHi,sayBye}
// function
function module(){
    console.log('hello')
}

export default module