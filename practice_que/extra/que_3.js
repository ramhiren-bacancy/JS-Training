// Reverse a string (without using .reverse())

const str = "abcd"

console.log(str.split("").reverse().join(""))


// Check if a string is palindrome

const pstr = "abccba"

console.log(pstr.split("").reverse().join("") === pstr)