// Array--> methods and keyword
// Array - type --> object

var arr=[1,2,3,4,5]
console.log(arr) // [1,2,3,4,5]
console.log(typeof(arr)) // object
arr.push(6) // it will be add new value in existing array at the end
console.log(arr) // [1,2,3,4,5,6]
arr.pop() // it will remove the value in existing array at the end
console.log(arr) //[1,2,3,4,5]
arr.unshift(98) // it will be add new value in existing array from the front end
console.log(arr)//[98,1,2,3,4,5]
arr.shift() // it will remove the value in existing array from the front end
console.log(arr) //[1,2,3,4,5]
delete arr[2] // At the index of 2, it will remove the value from the existing array (delete is keyword)
console.log(arr) // [1, 2, empty, 4, 5]
arr[2]=3 // add the value ,index 2 in to array
console.log(arr) //[1, 2, 3, 4, 5]

