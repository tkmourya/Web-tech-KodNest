//DATA TYPES JS//
// Primitive datatypes//
// String 

//--> we can store a charactor or sequence of charactor, 
// for both the datatype will be assigned  as string only internally.

var fname // Decleration
fname="tarunkumar" //initializing
console.log(fname) //tarunkumar
console.log(typeof(fname)) // string

var mname="k"          //Decleration and initializing
console.log(mname)     //k
console.log(typeof(mname)) //String

// Number datatype

var age =30
console.log(age)
console.log(typeof(age)) // number

var percentage =90.9
console.log(percentage)
console.log(typeof(percentage)) //number

// boolean datatype

var pass=false
console.log(pass) //false
console.log(typeof(pass)) //boolean

var ismarried=true
console.log(ismarried) // true
console.log(typeof(ismarried)) // boolean

//null value

var result=null
console.log(result) //null
console.log(typeof(result)) //object

//undefind

var lname
console.log(lname) //undefined
console.log(typeof(lname)) //undefinded

//NON-primative Datatype//

//Array

var list_marks=[50,40,60,90,80]
console.log(list_marks)         // [50,40,60,90,80]
console.log(typeof(list_marks)) // datatype--object--prototype---Array

var details=["virat",true,12]
console.log(details) //["virat",true,12]
console.log(typeof(details)) // datatype--object--prototype---Array

// Object
//1. It will follow thw JSON format
//2. JSON stands for javascript Object Notation
//3. In JSON format we will be having the dta in key value pairs
//4. {key:value}, eg: {fname:"sachin"}

var list_data={fname:"virat",age:35,gender:"male"}
console.log(list_data) //{fname:"virat",age:35,gender:"male"}
console.log(typeof(list_data)) //datatype----object, prototype----object