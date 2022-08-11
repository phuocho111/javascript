// class Declaration
class language{
    constructor(english,japanese){
        this.english = english
        this.japanese = japanese
    }
}
// //class Expression
let language = class language{
    constructor(english,jananese){
        this.english = english
        this.japanese = jananese
    }
}



class Course{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    
}

const htmlCourse = new Course("html",1000)
const phpCourse = new Course("php",2000)
console.log(htmlCourse)


//extends

class Courses {
    constructor(name){
        this.name = name;
    }
    status(){
        return "this is" + ' ' + this.name + ' '+ "tutorial"
    }

}
class Tutorial extends Courses{
    constructor(name,price){
        super(name)
        this.price = price
    }
    show(){
        return this.status() + ", price is" +' '+ this.price
    }
}
var html = new Tutorial("html",200)
console.log(html.show())
