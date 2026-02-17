// // // let c=4;
// // // b=6;
// // // console.log("a + b =", c + b);

// // let a = 2;
// // let b = "9";
// // console.log(a=b)
// // length

// // let text = "hello";
// // console.log(text.toUpperCase());  // HELLO

// // let text = "Hello";
// // console.log(text.length);   // 5

// const a ="morning in good happy endingh";
// console.log(a.length)

// let i=1;
// for(i=1;i<=5; i++){
//     console.log(i);
// }

// let age = 7;
//  if(age <= 18){
//     console.log("you can vote");
//  }
// if(age < 18){
//     console.log("you cannot vote");
//  }

//conditional statement 

// let mode = "light";
// let colour ;

//  if ( mode === "dark"){
//     colour ="black";
//  }
//   if ( mode === "light"){
//     colour ="pink";
//  }
// console.log(colour);

//else-if statment
// let age = "18";
// if(age <18){
//     console.log("junior");
    
// } else if(age>60){
//     console.log("senior");
// } else {
//     console.log("middle")
// }
//ternary operators
// let age= 16;
// let a = age >=18?"adult" : "not adult";
// console.log(a)

//partice Q1

// let a = prompt("enter number");
// if (a % 5 === 0){
//     console.log(a,"is multiple of 5");
// }
// else{
//     console.log(a,"is not multiple of 5");
// }

//partice Q2
let score =prompt("enter your score(0-100");
let grade;

if(score >=90 && score <= 100){
    grade = "A";
} else if(score >= 70 && score <=89){
    grade ="B";
}else if(score >= 60 && score <=69){
    grade ="C";
}else if(score >= 50 && score <=59){
    grade ="D";
}else if(score >= 0 && score <=49){
    grade ="F";
}
console.log("according to your scores,Your grade was:",grade)