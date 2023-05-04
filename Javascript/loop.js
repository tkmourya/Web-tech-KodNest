// for loop-----------------------------------------------------------------------

for(var i=0;i<=5;i++){
    console.log(i)
}


var i=0
for(;i<=4;i++){
    console.log(i)
}

// for(;;){
//     console.log("infinit loop")
// }

// (for of) loop----iterable objects----Array

var arr=["red","Blue","black","yellow"]
for(var i of arr){
    console.log(i)
}

// (for in) loop---non-iterable Objects----object

var obj={
    fname:"tarun", 
    lname:"sachin",
    age:22,
    gender:"male"
}
console.log(obj)
for(var i in obj){
    console.log(obj[i])
}

