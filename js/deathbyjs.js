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
            count += 1;
        }
    }
    console.log(`there are ${count} vowels in the string`)
}
//STEP 4

//STEP 5


function main() {
    // sortString(text=prompt('enter a string and it will return an ordered string'))
    // capLetters(text=prompt('enter a string and it will return capitalized'))
    // countVowels(text=prompt('enter a string and it will return the number of vowels'))
    countVowels(text=prompt('enter a string and it will return the number of vowels'))
}

main()