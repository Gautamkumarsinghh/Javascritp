// // // // let c=4;
// // // // b=6;
// // // // console.log("a + b =", c + b);

// // // let a = 2;
// // // let b = "9";
// // // console.log(a=b)
// // // length

// // // let text = "hello";
// // // console.log(text.toUpperCase());  // HELLO

// // // let text = "Hello";
// // // console.log(text.length);   // 5

// // const a ="morning in good happy endingh";
// // console.log(a.length)

// // let i=1;
// // for(i=1;i<=5; i++){
// //     console.log(i);
// // }

// // let age = 7;
// //  if(age <= 18){
// //     console.log("you can vote");
// //  }
// // if(age < 18){
// //     console.log("you cannot vote");
// //  }

// //conditional statement 

// // let mode = "light";
// // let colour ;

// //  if ( mode === "dark"){
// //     colour ="black";
// //  }
// //   if ( mode === "light"){
// //     colour ="pink";
// //  }
// // console.log(colour);

// //else-if statment
// // let age = "18";
// // if(age <18){
// //     console.log("junior");
    
// // } else if(age>60){
// //     console.log("senior");
// // } else {
// //     console.log("middle")
// // }
// //ternary operators
// // let age= 16;
// // let a = age >=18?"adult" : "not adult";
// // console.log(a)

// //partice Q1

// // let a = prompt("enter number");
// // if (a % 5 === 0){
// //     console.log(a,"is multiple of 5");
// // }
// // else{
// //     console.log(a,"is not multiple of 5");
// // }

// //partice Q2
// // let score =prompt("enter your score(0-100");
// // let grade;

// // if(score >=90 && score <= 100){
// //     grade = "A";
// // } else if(score >= 70 && score <=89){
// //     grade ="B";
// // }else if(score >= 60 && score <=69){
// //     grade ="C";
// // }else if(score >= 50 && score <=59){
// //     grade ="D";
// // }else if(score >= 0 && score <=49){
// //     grade ="F";
// // }
// // console.log("according to your scores,Your grade was:",grade)

//                                  /* for loop ( video 3 ) */

// // //print 1 to 5
// //                                  for ( let i = 1; i<= 5; i++){
// //     console.log ("apna computer");
// // }
// // console.log("hindi");

// // //calculate sum of 1 to 5
// // let sum = 0;
// // for(let i=1; i>=9; i++){
// //     sum = sum+i;
// // }
// // console.log("sum=", sum);

//                 //while loop

// // let i =1;
// // do{
// //     console.log("apna college");
// //   i++
// // } while (i<=5);             

// // for-of loop
// let str ="gautam";
// for (let i of str){
//     console.log("'i=", i);
// }

// let size = 0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size =", size);

// //for-in loop

// let student ={
//     name : "hello",
//     age : 67,
//     cgps : 8.09,
//     ispass : false,
// };
// for  ( let key in student){
//     console.log("key = ",key, "value=",student [key]);
// }

//pratice Qs1 ( print all even number from 0 to 100)
for (let num=0; num <= 100; num++){
    if (num%2 ===0){
    console.log("even=", num);
}else{ 
    console.log("odd=",num);
}
}

//pratic Qs2 (Gusses a random number and then match the number than print the "you win" )

let gameNum = 25;
let userNum = prompt ("Gusses the number :");

while(userNum != gameNum){
    userNum = prompt("You entered worng number , Gusses again:");
}
console.log("You win");