let now = new Date("August 11, 2022 10:38:21")
console.log(now)

//getDate() ngày

console.log(now.getDate())

//getFullYear() năm
console.log(now.getFullYear())

//getHour() giờ
console.log(now.getHours())

//getMilliseconds() mili giây
console.log(now.getMilliseconds())

//getMinutes() phứt
console.log(now.getMinutes())

//getMonth() tháng + 1
console.log((now.getMonth() + 1))

//getSeconds() giây
console.log(now.getSeconds())



//setDate()
now.setDate(24)
console.log(now.getDate())

//setFullYear()
now.setFullYear(2015)
console.log(now.getFullYear())

//setHours()
now.setHours(12)
console.log(now.getHours())

//setMunites()
now.setMinutes(40)
console.log(now.getMinutes())

//setMonth()
now.setMonth(10)
console.log(now.getMonth())