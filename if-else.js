let age = prompt('bạn bao nhiêu tuổi', '')
if(age > 18){
   console.log('bạn đã đủ tuổi vị thành niên')
}else if(age > 40 && age < 60){
    console.log('bạn đã ở độ tuổi trung niên ')
}
else if(age < 18){
   console.log('bạn chưa đủ tuổi vị thành niên')
}else{
    console.log('tuổi bạn đã cao')
}
//

let tuoi = prompt('bạn bao nhiêu tuổi', '')
let message = (tuoi > 18) ? 'bạn đã đủ tuổi vị thành niên' :
(tuoi > 40 && tuoi < 60) ? 'bạn đã ở độ tuổi trung niên ' :
(tuoi < 18) ? 'bạn chưa đủ tuổi vị thành niên':
'tuổi bạn đã cao'
console.log(message)


