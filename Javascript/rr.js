var com = [
  { id: "1", name: "facebook" },
  { id: "2", name: "ebook" },
  { id: "3", name: "hbook" },
];
com.sort();
console.log(com);

var t = 10 + 1;
var p = "1" + "1";
console.log(t == p);
console.log(t === p);


var a = [1001, "Javascript", 800];
console.log(a.slice(2));



var a = [10, 20, 30, "Kodnest", false, 100, 200, 300];

var new_arr = a.slice(2, 5);

console.log(new_arr);



var a = [10, 20, 30];

a.unshift(40);

console.log(a);

a=2
b=0
console.log(a/b) //infinity