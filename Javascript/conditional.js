// // conditional

// // if else

var a = 10;
var b = 20;
if (a == b) {
  console.log("codition is true");
} else {
  console.log("conditional is not true");
}

// // else if

var a = 10;
var b = 20;
if (a < b) {
  console.log("codition is true");
} else if (a > b) {
  console.log("a lesser than b");
} else {
  console.log("conditional is not true");
}

// switch

// in the prompt method always the input will be string by default
// prompt is taking input

var choice = Number(prompt("enter the choice 1.pizza,2.biriyani,3.pani puri"));

switch (choice) {
  case 1:
    console.log("Eat pizza");
    break;
  case 2:
    console.log("Eat biriyani");
    break;
  case 3:
    console.log("Eat pani puri");
    break;
    default:
        console.log("Eat cake")
}
 