// (var keyword)

{
var fname = "Tarun" // globle variable
console.log(fname)
fname = "Ram"       // we can change the value of var variable
console.log(fname)
}
console.log(fname) // variable declared by var keyword access outside the scope
//-------------------------------------------------var-------------------------------------------------------------

// (let keyword)

{//------scope{}.
    let a = 10
    console.log(a)
    a =30          // we can change the value of let variable
    console.log(a)
}
// console.log(a)  // ---error---Any variable which is declared by using the (let) keyword we cannot access it outside the scope
// The scope of a (let) variable is only block scoped. It can’t be accessible outside the particular block ({block}).
//----------------------------------------------------let--------------------------------------------------------------

// (const keyword)

{
    const isMarried =true
    console.log(isMarried)
    isMarried =false // can't update or change
    console.log(isMarried)
}
// console.log(isMarried)  // ---error---Any variable which is declared by using the (const) keyword we cannot access it outside the scope and
// When users declare a const variable, they need to initialize it, otherwise, it returns an error. 
//The user cannot update the (const) variable once it is declared
//--------------------------------------------------const---------------------------------------------------------------