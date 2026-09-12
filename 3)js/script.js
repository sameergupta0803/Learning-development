//Basics

// Numbers:
// 1;
// -99;
// 0.345345;
// //Making variables with let:
// let numberOfFriends = 1;
// //Incrementing:
// numberOfFriends += 3; //numberOfFriends is now 4
// // Variables with const
// const minimumAge = 21; //CANNOT REASSIGN!
// var age=31;//Declares a variable globally
// //Booleans - true or false values
// true;
// false;
// let isHappy = true;

// //Naming Conventions
// // Use upper camel-cased names:
// let numberOfChickens = 6; //GOOD
// NOT THE JS WAY:
// let number_of_chickens = 6;

// --------------------------------------------------------------------------------------------------------------------

//Strings

// let a="hello sameer";
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.slice(0,5));
// console.log(a.split(" "));
// console.log(a.replace('hello','hi'));
// console.log("         hi                ".trim()); 
// console.log(a.length);
// console.log(a[a.length-1]);
// const sName="Sameer Gupta";
// console.log(`My name is ${sName}`);
// console.log(`The evaluation of 6x9 is ${6*9}`);
// console.log(a.indexOf('sam'));
// console.log("hello"+" world")
// console.log(a.slice(6).toLowerCase())
// let a="hello";
// a[0]='H';
// console.log(a);//gives "hello" as output and not "Hello"

// ---------------------------------------------------------------------------------------------------------------------

// Decision making
// alert("This is an alert")
// prompt("Enter input")
// confirm("Are you sure you want to delete?");
// let a;
// if(a)console.log("TRUTHY");
// else console.log("FALSY");
// let age=22;
// if(age>=0 && age<10)console.log("Child");
// else if(age>=10 && age<20)console.log("Teenager");
// else if(age>=20 && age<60)console.log("Adult");
// else if(age>=60 && age<=120)console.log("Senior citizen");
// else console.log("INVALID AGE");
// let day=4;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// ----------------------------------------------------------------------------------------------------------------------

//Arrays
// let a=[1,2,3,4,5];
// a[0]=10;
// console.log(a[0]);
// console.log(a);//[10,2,3,4,5]
// let movieLine=['sameer','saish','saurabh'];
// console.log(movieLine)
// movieLine.push('sahil');//adds to end
// movieLine.shift();//removes and returns first element
// movieLine.unshift('VIP');//adds to front
// console.log(movieLine);
// movieLine.pop();//removes and returns last element

//-----------------------------------------------------------------------------------------------------------------------

//objects
// const person={
//     name:"Sameer",
//     age:22,
//     course:"MCA",
//     college:"VJTI",
//     isEmployed:false,
//     2000:1234,
//     null:1,
//     NaN:12,
//     undefined:1233
// }
// console.log(person[undefined]);

//-------------------------------------------------------------------------------------------------------------------------

//Loops

// for(let i=0;i<6;i++){
//     console.log(i); 
// }
// const person={
//     name:"Sameer",
//     age:22,
//     course:"MCA",
// }
// for(let key in person){
//     console.log(key)
// }
// const keysArray=Object.keys(person);//returns array of keys of person object
// for(let key of keysArray){
//     console.log(key)//same output as above
// }
// const valuesArray=Object.values(person);//returns array of values of person object
// for(let value of valuesArray){
//     console.log(value); 
// }
// const keyValueArray=Object.entries(person);
// for(let row of keyValueArray){
//     console.log(`${row[0]}:${row[1]}`);
// }

//---------------------------------------------------------------------------------------------------------------------------

//Functions

// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }

//----------------------------------------------------------------------------------------------------------------------------

//More functions

// function add(){
//     return function(a,b){
//         return a+b;
//     }
// }
// const func=add()
// func(3,4)

// function outer(){
//     console.log("I am outer function")
//     let name="Sameer";
//     function inner(){
//         let age=22
//         console.log("I am inner function")
//         function inner2(){
//             console.log("Inner within inner")
//             console.log(`hello ${name},you are ${age} years old`)
//         }
//         inner2();
//     }
//     inner();
//     // inner2();//error
// }
// outer()
// inner()//error

// function repeatTen(func){
//     for(let i=0;i<10;i++){
//         console.log(func(5,3),i);
//     }
// }
// repeatTen((a,b)=>a+b);

// function range(min,max){
//     return (num)=>num>=min && num<=max;
// }
// const isBetween=range(10,50);
// isBetween(51);//false
// isBetween(32);//true
 
// const myMath={
//     PI:3.14159,
//     square:function(num){
//         return num**2;
//     },
//     cube:function(num){
//         return num**3;
//     }
// }
// console.log(myMath.square(4));
// const myMath={
//     PI:3.14159,
//     square(num){
//         return num**2;
//     },
//     cube(num){
//         return num**3;
//     }
// }
// console.log(myMath.square(4));

// str=123
// try{
//     str.toUpperCase()
// }
// catch(e){
//     // console.log(e);
//     console.log("Please enter a string")
// }
// console.log("After")

// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow() {
//         console.log("THIS IS:", this)
//         console.log(`${this.name} says MEOWWWW`);
//     }
// }
// cat.meow();//here this refers to the cat object
// const func=cat.meow;
// func();//here this refers to the window

//-------------------------------------------------------------------------------------------------------------------------------

//Arrays methods and callbacks

// const isEven=function(num){
//     return num%2==0;
// }
// const isEven=(num)=>{
//     return num%2==0;
// }
// const isEven=num=>{
//     return num%2==0;
// }
// const isEven=num=>(
//     num%2==0
// )
// const isEven=num=>num%2==0;
// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     // fullName:()=>`${this} ${this.firstName} ${this.lastName}`,//here this refers to the window
//     shoutName: function () {
//         setTimeout(() => {
//             //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
//             console.log(this);
//             console.log(this.fullName())
//         }, 3000)
//     }
//     // shoutName: function () {
//     //     setTimeout(function(){
//     //         //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
//     //         console.log(this);//Here this refers to the current window and not the object
//     //         console.log(this.fullName())//error
//     //     }, 3000)
//     // }
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]
// const movies = [
//     {title: 'Amadeus',score: 99,year: 1984},
//     {title: 'Sharknado',score: 35,year: 2013},
//     {title: '13 Going On 30',score: 70,year: 2004},
//     {title: 'Stand By Me',score: 85,year: 1986},
//     {title: 'Waterworld',score: 62,year: 1995},
//     {title: 'Jingle All The Way',score: 71,year: 1996},
//     {title: 'Parasite',score: 95,year: 2019},
//     {title: 'Notting Hill',score: 77,year: 1999},
//     {title: 'Alien',score: 90,year: 1979}
// ]
// const badMovieTitle=movies.filter((movie)=>movie.score<40).map((movie)=>movie.title);
// numbers.forEach((num)=>{
//     console.log(num**2)
// })
// const numsGreaterThan5=numbers.filter((num)=>num>5)
// const goodMovies=movies.filter((movie)=>movie.score>80)
// const titles=movies.map((movie)=>movie.title);
// const goodMoviesTitles=goodMovies.map((movie)=>movie.title);
// const total=numbers.reduce((total,num)=>total+num);
// const averageScore=movies.reduce((total,movie)=>total+movie.score,0)/movies.length;
// const aboveAverageMoviesTitles=movies.filter(movie=>movie.score>averageScore).map(movie=>movie.title);
// const passingMarks=75
// const isEveryonePass=exams.every(mark=>mark>passingMarks);
// const isThereABadMovie=movies.some(movie=>movie.score<40);

// console.log("Before Timeout");
// setTimeout(()=>{
//     console.log("After 3 seconds");
// },3000)
// console.log("After Timeout");
// let i=1;
// const id=setInterval(()=>{
//     console.log(`${i++}:Printing every 3 seconds`);
// },3000)
// function fullName(){
//     console.log(this);
//     console.log(`${this.firstName} ${this.lastName}`);
// }
// // const fullName=function(){
// //     console.log(this);
// //     console.log(`${this.firstName} ${this.lastName}`);
// // }
// // const fullName=()=>{
// //     console.log(this);
// //     console.log(`${this.firstName} ${this.lastName}`);
// // }
// const user = {
//     email: 'Stacy@gmail.com',
//     firstName: 'Stacy',
//     lastName: 'Gonzalez',
//     full:fullName,
//     born: 1987,
//     city: 'Tulsa',
//     state: 'Oklahoma'
// }
//-----------------------------------------------------------------------------------------------------------------------------

//New JS features

// function rollDie(sides=6){
//     return Math.floor(Math.random()*sides)+1;
// }
// function greet(message="Hello",name){
//     console.log(`${message},${name}`);
// }
// greet("Sameer")//name undefined as we passed message="Sameer"
function greet(name,message="Hello"){
    console.log(`${message},${name}`);
}
greet("Sameer")//always give default parameters from the right end of the parameters

const nums=[3,2,5,1,10,61,193,34]
const maximum=Math.max(...nums)
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
const allPets=[...cats,...dogs];
// const allPets=[...dogs,...cats];//dogs first and then cats

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };
const catDog={...feline,...canine};//family is 'Caninae'

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser={...dataFromForm,id:1,isAdmin:false}

// function sum(){
//     let total=0;
//     for(let num of arguments){
//         total+=num;
//     }
//     return total;
// }
// sum(1,2,3)//6
// function sum(...nums){
//     let total=0;
//     for(let num of nums){
//         total+=num;
//     }
//     return total;
// }
// sum(1,2,3,4,5)//15

// const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];
// const [gold,silver,bronze,...everyoneElse]=scores;//everyoneElse has rest of the scores in an array

// const user = {
//     email: 'harvey@gmail.com',
//     password: 'sCoTt1948sMiTh',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1930,
//     died: 1978,
//     bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
//     city: 'San Francisco',
//     state: 'California'
// }

// const user2 = {
//     email: 'Stacy@gmail.com',
//     firstName: 'Stacy',
//     lastName: 'Gonzalez',
//     born: 1987,
//     city: 'Tulsa',
//     state: 'Oklahoma'
// }
// const {firstName,lastName,born,died,bio,...everythingElse}=user;
// everythingElse has rest of key:value pairs in an object
// const {firstName,lastName,born:bornYear,died:deathYear='N/A',bio:biography='N/A',...everythingElse}=user2;
// here we gave born,death and bio custom names as bornYear,deathYear and biography resp.deathYear and biography has default value 'N/A'
// function fullname({firstName,lastName,died:deathYear='N/A'}){ 
//     console.log(`${firstName} ${lastName} died in ${deathYear}`);
// }
// Destructed the object within function parameter with died having name as deathYear with default value 'N/A'
// const movies = [
//     {title: 'Amadeus',score: 99,year: 1984},
//     {title: 'Sharknado',score: 35,year: 2013},
//     {title: '13 Going On 30',score: 70,year: 2004},
//     {title: 'Stand By Me',score: 85,year: 1986},
//     {title: 'Waterworld',score: 62,year: 1995},
//     {title: 'Jingle All The Way',score: 71,year: 1996},
//     {title: 'Parasite',score: 95,year: 2019},
//     {title: 'Notting Hill',score: 77,year: 1999},
//     {title: 'Alien',score: 90,year: 1979}
// ]
// const goodMoviesTitles=movies.filter(({score})=>score>80).map(({title})=>title);
//used parameter destructuring within arrow functions

//----------------------------------------------------------------------------------------------------------------------------

//DOM onwards in colt steele mine.js files
