//
let a = 2;
let b = 1;

switch (a){
   case b + 1: 
   console.log('a > b'); 
   break;
   case b - 1: 
   console.log('a < b'); 
   break;
}//a > b

// not break
let i = 3;
switch(i){
    case 2: 
        console.log('gia tri 2');
    case 3:
        console.log('gia tri 3');
    case 4:
    case 5:
        console.log('gia tri 4 hoac 5');
    default:
        console.log('gia tri khong xac dinh')
}
//gia tri 3
//gia tri 4 hoac 5
//gia tri khong xac dinh

