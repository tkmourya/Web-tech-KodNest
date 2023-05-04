// Typecasting---------converting from one type of data to another type

//String--->number

var s="virat"
console.log(s)
console.log(typeof(s)) // string
var s1=Number(s)
console.log(s1)  // NaN---Not a Number
console.log(typeof(s1)) // number

var s="v"
console.log(s)
console.log(typeof(s)) // string
var s1=Number(s)
console.log(s1)  // NaN---Not a Number
console.log(typeof(s1)) // number

var s=""
console.log(s)
console.log(typeof(s)) // string
var s1=Number(s)
console.log(s1)  // 0
console.log(typeof(s1)) // number
 
var s=" "
console.log(s)
console.log(typeof(s)) // string
var s1=Number(s)
console.log(s1)  // 0
console.log(typeof(s1)) // number

//----------------------------------------------------------------------------------------
// number--->string

var age=43
console.log(age)
console.log(typeof(age)) // number
var age1=String(age)
console.log(age1)  // 10
console.log(typeof(age1)) // string

var marks=91.2
console.log(marks)
console.log(typeof(marks)) // number
var str1=String(marks)
console.log(str1)  // 91.2
console.log(typeof(str1)) // string

//-------------------------------------------------------------------------------------------
// string--->boolean

var s="rts"
console.log(s)
console.log(typeof(s)) // string
var s1=Boolean(s)
console.log(s1)  // true
console.log(typeof(s1)) // boolean

var s=""
console.log(s)
console.log(typeof(s)) // string
var s1=Boolean(s)
console.log(s1)  // false
console.log(typeof(s1)) // boolean

//----------------------------------------------------------------------------------------------
// boolean--->string

var b=true
console.log(b)
console.log(typeof(b)) // boolean
var b1=String(b)
console.log(b1)  // true
console.log(typeof(b1)) // string

//-------------------------------------------------------------------------------------------
// boolean--->numbber

var b=true
console.log(b)
console.log(typeof(b)) // boolean
var b1=Number(b)
console.log(b1)  // 1
console.log(typeof(b1)) // number

//-----------------------------------------------------------------------------------------
// number--->boolean

var n=23
console.log(n)
console.log(typeof(n)) // number
var n1=Boolean(n)
console.log(n1)  // true
console.log(typeof(n1)) // boolean

