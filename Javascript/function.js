// function

function addition(){
    var a=10
    var b=20
    console.log(a+b)
}
addition()

// function Expression

var disp=function sub(){
    var a=10
    var b=20
    console.log(a-b)
}

disp()

// anonymous function

var disp=function(){
    var a=10
    var b=20
    console.log(a/b)
}
disp()

var disp=function(a,b){
    console.log(a/b)
}
disp(10,20)

// constructor function

var a;
var b;
var c;
var disp=function example(a,b,c){
    this.a=a;
    this.b=b;
    this.c=c;
}

var res=new disp(10,20,30)

console.log(res.a)

console.log(res.b)

console.log(res.c)

//Arrow function

var disp=()=>console.log("Arrow function")
disp()


var mul=(a,b,c)=>
{
var res=a*b*c
return res
}
console.log(mul(10,20,30))
