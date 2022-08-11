// while
let i = 5
while(i){
    console.log(i)
    i--
}//5, 4, 3, 2, 1

// do..while
let result = '';
let z = 0;
do{
    z++;
    result += z + ''
}while(z > 0 && z < 5)
console.log(result)
//12345
// for
for (let i = 0; i < 5; i ++){
    console.log(i)
}//0, 1, 2, 3, 4
//break

for(let i = 0; i < 10; i++){
  if(i === 3){break;}
  console.log(i)
}//0, 1, 2

//continue
for(let i = 0; i < 10; i++){
    if(i % 3 !== 0){continue;}
    console.log(i)
}//0, 3, 6, 9
