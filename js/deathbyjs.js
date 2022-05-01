//STEP 1
function sortString(text) {
    console.log(text.split('').sort().join(''))
}
//STEP 2
function capLetters(text) {
    console.log(text.replace(/\b\w/g, l => l.toUpperCase()))
}
//STEP 3
function countVowels(text) {
    let count = 0
    for (var i=0; i<=text.length - 1; i++) {
        if ('aeiou'.includes(text[i].toLowerCase())) {
            count += 1
        }
    }
    console.log(`there are ${count} vowels in the string`)
}
//STEP 4
function generateString(length) {
    var text = ""
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789"
    for (var i = 0; i < length; i++) {
      text += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    console.log(text)
}
//STEP 5
function getLongest(text) {
    arr = text.split(',')
    let word = ""
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i]
      }
    }
    console.log(`the longest word is ${word}`)
}

// call all functions
function main() {
    sortString(text=prompt('enter a string and it will return an ordered string'))
    capLetters(text=prompt('enter a string and it will return capitalized'))
    countVowels(text=prompt('enter a string and it will return the number of vowels'))
    generateString(length=prompt('enter an integer to return a randomly generated string of that length'))
    getLongest(text=prompt('enter multiple country names separated by a comma'))
}

main()