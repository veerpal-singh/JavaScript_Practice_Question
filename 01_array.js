// Question 1 => Given a string, reverse each word in the sentence...


const str = "saare jaha se achha hindustaan humara"

const split = str.split(" ") // change to array

const loop = split.map((word) => {

    return word.split("")  // split nothing("") => array => sare cha. alag alag

        .reverse()   // word reverse

        .join("")     // join nothing => string

})

console.log(loop.join(" "));


// Question 2 => How to check if an object is an array or not?
// Provide some code.


const checkArray = (elem) => {

    return Array.isArray(elem)   // boolean value => true, false 
}

console.log(checkArray([]));

console.log(checkArray({}));


// Question 3 => How to empty an array in JavaScript


const arr = [1, 2, 3, 4, 5, 6]

arr.length = 0

console.log(arr);


// Question 4 => How would you check if a number is an integer?

const a = 12

if (a % 1 === 0) {

    console.log("integer");

} else {

    console.log("not !");

}



// Question 5 => Make this work :
// duplicate [1,2,3,4,5] => [1,2,3,4,5,1,2,3,4,5]


const arr = [1, 2, 3, 4, 5]

const b = arr.concat(arr)

console.log(b);


























