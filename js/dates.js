//STEP 1
let month = prompt('enter a month (int)')
let year = prompt('enter a year')
function daysInMonth (month, year) {
    console.log(new Date(year, month, 0).getDate())
}
daysInMonth(month, year)
//STEP 2
let d = prompt('enter a date string (ex: 2020-12-28)')
console.log(d)
console.log(`the month is ${new Date(d).toLocaleString('en-us',{month:'long'})}`)
//STEP 3
let day = prompt('enter a date string (ex: 2020-12-28)')
var yourDate = new Date(day)
if((yourDate.getDay() === 6) || (yourDate.getDay() === 0)){
   console.log('weekend')
} else {
    console.log('weekday')
}
//STEP 4
var yesterday = new Date((Date.now() - 86400000))
console.log(yesterday.toLocaleString('en-us', {weekday: 'long' }))
//STEP 5
var today = new Date(Date.now())
today = today.toLocaleString('en-us', {weekday: 'long'})[0]
console.log(today)