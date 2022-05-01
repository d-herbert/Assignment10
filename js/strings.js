//STEP 1
let nam = prompt('enter your name')
alert(`${nam.length}`)
//STEP 2
let num = prompt(`enter a number between 0 and ${nam.length - 1}`)
alert(`${nam[num]}`)
//STEP 3deid
let las = prompt(`enter your last name`)
alert(`your name is: ${nam.concat(' ', las)}`)
//STEP 4
let fox1 = 'The quick brown fox jumps over the lazy dog'
alert(`last index of fox: ${fox1.lastIndexOf('fox')}`)
//STEP 5
let fox2 = 'The quick brown fox jumps over the lazy fox'
alert(`last index of fox: ${fox2.lastIndexOf('fox')}`)
//STEP 6
let fln = nam.concat(' ', las)
alert(`${fox1.replace('the lazy dog', fln)}`)
//STEP 7
let wrd = prompt(`enter a word from: ${fox1}`)
alert(`${fox1.search(wrd)}`)
//STEP 8

//STEP 9

//STEP 10
