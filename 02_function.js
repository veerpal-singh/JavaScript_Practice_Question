// Question 1 => Write a javaScript function the reverse a number...


const reverseKaro = (num) =>{

    return Number(num.toString().split("").reverse().join(""))
}
console.log(reverseKaro(12));



// Question 2 => Write a JavaScript function that checks whether a passed string is plindrome or not


const stringPalchecker = (str) =>{

    const reversed = str.split("").reverse().join("")

    if(reversed === str){

        return true

    }else{

        return false
    }
}

console.log(stringPalchecker("poop"));

console.log(stringPalchecker("loop"));


// Question 3 => Write a JavaScript function that returns a passed
// string with letters in alphabetical order...


const stringAlphaBeticalOrder = (str) =>{

    return str.split("").sort().join("")
}

console.log(stringAlphaBeticalOrder("apple"));
console.log(stringAlphaBeticalOrder("veer"));



// Question 4 => Write a JavaScript function that accepts a string
// as a parameter and converts the first letter of each word of the
// string in upper case








