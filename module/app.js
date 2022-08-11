import module, {HTML,PHP,CSS,User} from "./module.js";
//import  {default as module, HTML,PHP,CSS,User} from "./module.js";
//sử dụng asđể nhập dưới các tên khác nhau.

module()
console.log(HTML,PHP,CSS)

const user = new User("phuoc")
console.log(`hello,${user.name}`)
//
import {sayHi as hi, sayBye as bye} from './module.js'

hi("phuoc");
bye("phuoc")
//
