// // variables

// // var
// var a;
// var b;

// // let
// let c;
// let d;

// // const
// const e = 0;
// const f = 1;

// // assignment
// c = "name"
// d = 0;

// // OPWRATORS
// console.log("==", 10 == "10")
// console.log("===", 10 === "10")
// // console.log("type of", type (true))

// // data types

// // *primitive
//   // -numbers
//   let age = 20;
//   const joshepasAcountBalance = 5_000_000_000_000;

//   // number operators
//   console.log(joshepasAcountBalance)
//   console.log("add 1", age + 1);
//   age += 2;
//   age -= 2;

//   let size = 30;
//   const newSize = ++size
//   console.log(size, newSize)

//   // -BOOLEAN
//   const isDorineAngryAtTheJsTeacher = true;
//   const varB = false;
//   const bol1 = 10 == "10";
//   const bol2 = 10 === "10";

//   console.log("&&", bol1 && bol2);
//   console.log("||", bol1 || bol2);

//   // Boolean logic




//   // -strings
//   const empty = ""
//   const student = "Dorine";
//   const student2 = 'Tally';
//   const mondayTeacher = `Emma will teach ${student} and ${student2}`;
//   console.log(mondayTeacher)
//   // falsy values: 0. false, "", null
//   console.log("student", 12 && 5 && 24);


//   // complex
//       // store multiple data

//       // ARAYYS
//       const array1 = [1, 2, 3, 4, 5]
//       console.log(array1[2], array1.pop(), array1.at(-1))

//       const array = Array(5)
//       array.push(7)
//       console.log(array);
//       // OBJECTS
//        const teachers = {
//         javascript: "carlson",
//         react: "Giles",
//         node: "leonard"
//        } 
//        console.log({...teachers});
//        teachers.javascript = "judith"
//        const july23 = {...teachers};
//        console.log({...teachers}, {...july23});

//        console.log(july23.javascript, july23.node, teachers["react"])

//       //  conditional logic
//       if(bol1) {
//         console.log("bol1")
//       }else if(bol2) {
//         console.log("bol2")
//       } else {
//         console.log("nothing is true")
//       }

//       const thiefName = "";
//       switch(thiefName) {
//         case "josepha": {
//           console.log("i didn't espect this!");
//         };
//         break;
//         case "Dorine":
//           console.log("well well well! I knew younwere strange");
//           default: {
//             console.log("Not starnge")
//           }
//       }

// let whohouldSignRebaseContract = age > 21? "student": "Guadiarn";
// console.log(whohouldSignRebaseContract)

// // LOOPS
// const numList = [5, 10, 15, 20, 25, 30]
//   // for
//   for(let i = 0; i < numList.length; i++) {
//     console.log(i, numList[i])
//   }

//   // while
//   let i = 0;
//   while(i <= numList.length)
//   i++
//   console.log(i, numList)

//   // for in
//   for(const j in july23) {
//     console.log(j, july23)
//   }

  // for of
  

  // for ()

//   let str1 = "GeeksforGeeks";
// let str2 = "Geeks123";

// let regex = /^[a-zA-Z]+$/;

// console.log(regex.test(str1));
// console.log(regex.test(str2));



// let str = "A Computer Science portal for Geeks.";
 
// console.log(str);
// console.log(str.replace(/ /g, "_"));

// let str3 = "This_is_My_Personal_Computer_Do_not_touch_it"

// console.log(str3)
// console.log(str3.replace(/_/g, " "))


// // FUNCTIONS

// function figonacci(arg1, arg2, arg3) {

//   function printargs() {
//     console.log("arg1 =====>", arg1)
//     console.log("arg2 =====>", arg2)
//     console.log("ard3 =====>", arg3)
  
//   }
//   printargs()

// }
// figonacci(5,10,15)

// function add(a, b) {
//   return a + b

// }
// const sum = add(1,2)
// console.log(sum)

// function log(message, status = "error") {
//   return `${new Date().toUTCString()}  ${status}  ${message}`
// }

// function createLogger() {
//   function writeToConsole(message, status) {
//     console.log(log(message, status))
//   }
//   return writeToConsole
// }
// const logger = createLogger()
// logger("My name")

// console.log(log("this is my name"))


// // const log = (status = "My name", message) => 
// //   `${new Date().toUTCString()}  ${message}  ${status}`

// const studList =Array(500).fill(0).map((_) => Math.floor(Math.random() * 10));
// function findUpperHalf(callBack) {
//   for(const student of studList) {
//     if(student >= 5) {
//       callBack(student)
//     }
//   }
// }

// function printSum() {
//   let sum = 0;
//   findUpperHalf((number) => {
//     sum += number;
//   })
//   logger(sum);
// }

// const findUpperHalfSum = () => {
//   const sum = studList.reduce((acc, number) => {
//     if(number >= 5) {
//     return acc + number
//     }
//     return acc
//   }, 0)
//   logger(sum, "upper")
// }

// printSum();
// findUpperHalfSum();

// // Recursive funtions

// const optimizeFib =(n) => {
//   if(n < 2)
//   return n
//   const memo = {0:c0, 1: 1}
//   let i = 2;
//   while(i <= 2) {
//     memo[i] = memo[i - 1] +memo[i - 2];
//     i++;
//   }
//   return memo[n]
// }


// const fib = (n) => {
//   if(n <2)
//     return n
//   return fib(n-1) + fib(n-2);
// }


const phrase = "the quick brown fox jumps over the lazy dog"

function pangramCheck(phrase) {
  phrase = phrase.toLowerCase();
  const alphabets = new Set('abcdefghijklmnopqrstuvwxyz')
  for(let letter of phrase) {
    alphabets.delete(letter);
  }
  return alphabets.size === 0;
}
const result = pangramCheck(phrase) ? 'is a pangram' : 'is not a pangram';

console.log(result)

// const numbs = [3,6,9,12,15];

// for(let i =0; i <= numbs.lenth; i++);
// if(i>=)

const palindrome = (str) => {
  if (str == str.split('').reverse().join('')) {
  console.log(str + ' is palindrome.');
  }
  else {
  console.log(str + ' is not palindrome.');
  }
 }
 palindrome("OKAY")


 let nums = [10, 15, 38, 20, 13];
 let currentNum;
 let largestNum = 0;

 function largestElement(nums) {
	return nums.reduce((largestNum, currentNum) =>
		(currentNum > largestNum ? currentNum : largestNum), nums[0]);
}

console.log(largestElement(nums));


function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else if(n > 1){
    for(let i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
}

answer = factorial(5)
console.log("Factorial of " + 5 + " : " + answer);



function sumFactorial(arr, n) {

  let fac = {1: 1};

  let m = Math.max(...arr);
 
  let sum = 0;
  for (let i = 2; i <= m; i++) {
    fac[i] = fac[i-1] * i;
  }
   
  for (let i = 0; i < n; i++) {
    sum += fac[arr[i]]; 
  }
   
  return sum; 
}

let arr = [7, 3, 5, 4, 8];
let n = arr.length;

console.log(sumFactorial(arr, n));