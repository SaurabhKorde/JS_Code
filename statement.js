// check if the number is positive

// const number = 5;

// // check if number is greater than 0
// if (number > 0) {
//  // the body of the if statement
//   console.log("The number is positive");
// }
// console.log("Out of statement...");


// check if the number is positive or negative

// const number = 1;

// // check if number is greater than 0
// if (number > 0) {
//   console.log("The number is positive");
// }
// // if number is not greater than 0
// else {
//   console.log("The number is either a negative number or 0");
// }


// check if the number is positive or negative or zero

// const number = 7;
// if (number == 5) {
//     console.log("The number is positive");
// }
// // check if number is 0
// else if (number == 0) {
//   console.log("The number is 0");
// }
// // if number is neither greater than 0, nor zero
// else if(number==1){
//     console.log("Number is One")
// }
// else{
//     console.log("Number is Negative");
// }


// let num=11

// if(num>0){
//     if(num==1){
//         console.log("Number is One...");
//     }else if(num>0){
//         if(num%2==0){
//             console.log("Number is even");
//         }
//         else{
//             console.log("Number is odd..");
//         }
//     }
//     else{
//         console.log("Out of Statement....");
//     }
// }


// program using switch statement
var a = 2;
var a=3;
console.log("Before Type:--",typeof(a));
switch (a) {

    case 1:
        a = 'one';
        console.log(`The value is:--`,a);
        break;
    case 2:
        a = 'two';
        console.log(`The value is:--`,a);
        console.log("Type:--",typeof(a));
        break;
    default:
        a = 'not found';
        console.log(`The value is:--`,a);
        break;
}
