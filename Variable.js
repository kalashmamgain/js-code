// SINGLE LINE COMMENT
/*MULTI LINE COMMENT */
/*
PRIMITIVE AND NON PRIMITIVE DATA TYPES 
let a = null;
let b = 12
let c = true
let d= "Hey"
let e= BigInt("451")
let f = Symbol("Im a Symbol")
let g = undefined
console.log( typeof a,typeof b,typeof c,typeof d,typeof etypeof, f,typeof g)
    

OBJECTS IN JS
const item={
    "kalash" :true,
    "rohan" :false,
    "Mohan" :52,

}
console.log( item["kalash"], item["rohan"], item["Mohan"])

Object Modification in Constants
const a = {
    name:"kalash",
    age:"20",
    sex:"male",
}
console.log(a)
a["name"]="Coding"
console.log(a)

const dict={
    appreciate: "recognize the Worth",
    Depreciate: "Reduce in Value",
    Yakka: "Hard Work",
}
console.log(dict.Yakka)
console.log(dict["Depreciate"]);
//////////////////////////////////////////////////////////////////////
OPERATORS AND EXPRESSION IN JS

let a=10;
let b=4;
// ARITHMETIC OPERATORS
console.log("a + b=",a+b)
console.log("a - b=",a-b)
console.log("a / b=",a/b)
console.log("a * b=",a*b)
console.log("a ** b=",a**b)
console.log("a % b=",a%b)
console.log("a ++ =",a++)
console.log("a =",a)
console.log("a -- =",a--)
console.log("a =",a)
console.log("++a =",++a)
console.log("a =",a)
console.log("--a =",--a)
console.log("a =",a)

ASSIGNMENT OPERATORS
a = 8;
console.log(a);
a += 5;
console.log(a);
a -= 5;
console.log(a);
a *= 20;
console.log(a);
a /= 2;
console.log(a);
a %= 13;
console.log(a);
a **=5;
console.log(a);

COMPARISON OPERATORS
 let comp1 =  5;
 let comp2 = "5";
 console.log("Comp1 == Comp2 is",comp1 == comp2 );
 console.log("Comp1 != Comp2 is",comp1 != comp2 );
 console.log("Comp1 === Comp2 is",comp1 === comp2 ); Check Value and Type of value
 console.log("Comp1 !== Comp2 is",comp1 !== comp2 );Check Value and Type of value

//////////////////////////////

let comp1 =  5;
let comp2 = 7;
console.log("Comp1 == Comp2 is",comp1 == comp2 );
console.log("Comp1 != Comp2 is",comp1 != comp2 );
console.log("Comp1 === Comp2 is",comp1 === comp2 );
console.log("Comp1 !== Comp2 is",comp1 !== comp2 );
console.log("Comp1 <= Comp2 is",comp1 <= comp2 );
console.log("Comp1 >= Comp2 is",comp1 >= comp2 );
console.log("Comp1 > Comp2 is",comp1 > comp2 );
console.log("Comp1 < Comp2 is",comp1 < comp2 );

/////////////////////////////////////////////

LOGICAL OPERATORS
AND OPERATOR BOTH VALUE SHOULD BE TRUE
let x = 5;
let y = 10;
console.log(x<y && x==5);
OR OPERATOR BOTH VALUE SHOULD BE TRUE
let x = 5;
let y = 10;
console.log(x>y || x==5);
console.log(!true);
console.log(!false); */


// CONDITIONAL EXPRESSIONS IF , IF ELSE , IF ELSE IF ELSE STATEMENT
/*
let a = prompt( "Hey What's your age ?");
a = Number.parseInt(a);    //CONVERTING A STRING TO A NUMBER

console.log(typeof a);

if ( a < 0 ){ 
    alert("This is Invalid  age");
}
else if(a<14){
    alert("You are a Kid and Not allowed to Visit this");
}
else if( a<18 && a>=14){ 
    alert("Wait for" ,18-a,"Years");
}
else{ 
    alert("You are Allowed to Visit as you are Above 18 Years")
}
console.log("DONE");

// JAVASCRIPT TERNARY OPERATOR' = EVALUEATE THE CONDITION AND EXECUTED THE BLOCK OF CODE
// console.log("You can", (a <18? "not drive" :"Drive"));

let a = prompt("Type your Age")
a= Number.parseInt(a);
console.log(a>18? "You are Above 18 you can Drive":"You Are not Above 18,You cannot drive" )
////////////////////////////////////////////////////////////////

let age = prompt("What's Your age?")
age = Number.parseInt(age) // convert string to number
switch(age){
    case 14:
        console.log("Your Age is 14 ");
    case 15:
        console.log("Your Age is 15 ");  
    break    // break the running of code 
    case 16:
        console.log("Your Age is 16 ");    
    case 17:
        console.log("Your Age is 17 ");    
    case 19:
        console.log("Your Age is 19 ");    
    case 18:
        console.log("Your Age is 18 ");
   default:
    console.log("Your age is not Special")

////////////////////////////////////////////////////////////////////////

    CONCEPTS OF LOOPS - FOR LOOP - FOR IN LOOP - FOR OF LOOP - WHILE LOOP - DO WHILE LOOP
    SYNTAX OF A FOR LOOP

1.Statement 1 is to be executed one time 
2.Statement 2 is the ConditionBase on which the Loop Runs
3. Statement 3 is Executed Everytime the loop runs

for(Statement1 , Statement2 , Statement3){
    Code that has to be executed
}


for (let i = 1  ;i <= 50; ++i) { 
    console.log(i);
}


SUM OF FIRST n NATURAL NUMBERS 5
1+2+3+4+5  

let n =prompt("Enter you n Terms");
n = Number.parseInt(n);
let q = 0
for ( let i = 1 ; i <= n ; i++){
  q+=i;
      

}
console.log("This is the Sum of n terms", q);
///////////////////////////////////////////// FACTORIAL LOOP 
let n =prompt("Enter you n Terms");
n = Number.parseInt(n);
let q = 1
for ( let i = 1 ; i <= n ; i++){
  q*=i;

}
console.log("This is the Sum of n terms:", q);

/////////////////////////////////////////////FOR IN AND FOR OF LOOPS
let obj = {
    Shiv: 50 ,
    harry: 70 ,
    Ritika: 72,
    Anil:92
  
}
  // FOR IN LOOP
for (let a in obj){
    console.log("Marks of " + a + " is " + obj[a])
}
   // FOR OF LOOP 
for (let b of "harry"){
    console.log(b)
}
////////////////////////////////////////////////// WHILE LOOP

let n = prompt(" ENter a value")
n = Number.parseInt(n)
let i=0
while (i<n){
  i++
  console.log(i)
}

////////////////////////////////////////////////// DO WHILE LOOP( DO BLOCK RUNS FIRST THEN CHECKS THE CONDITION OF WHILE LOOP)

let i = 10
do{
  console.log(i)
}
  while(i>12)



////////////////////////////// FUNCTIONS : A JAVASCRIPT FUNCTION IS A BLOCK OF CODE DESIGNED TO DO A PARTICULAR TASK 

function getMultiply(x , y){
    return x * y
}
console.log(getMultiply(4 , 7));

///////////////////////////////// ARROW FUNCTIONS

const getMultiply = (x, y) =>{
    return x * y
}
console.log(getMultiply(4 , 7))

///////////////////////////////// ARROW FUNCTIONS

const hello = ()=>{
    console.log(" hello this is a block of code");
}
hello();

///////////////////////////////// FUNCTIONS
function avgFun(x,y){
  
  return (x+y)/2 
  
}

console.log(avgFun(4,10))

////////////////////////////// PRINT OBJ USING FOR LOOP
let marks = {
  Anil: 50,
  Luv: 70,
  Sid: 77,
  Jin: 95
}
for (let i = 0; i <Object.keys(marks).length; i++){
  console.log("The Marks Of", Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]])
  
}
////////////////////////////// Making Same Code in FOR IN LOOP

let marks = {
  Anil: 50,
  Luv: 70,
  Sid: 77,
  Jin: 95
}
for (i in marks){
  console.log("The marks of ",i , " are ",marks[i])
}

/////////////////////////// WHILE LOOP

let c = 4
let i = prompt( " Enter a Number:");
while (i!=c){
  console.log("Try again");
  i = prompt("enter correct number:")
  
}
//////////////////////////////// Mean ARROW Function

const mean=(a,b,c,d) =>{
  return (a+b+c+d)/4
}
console.log(mean(4,5,6,7));

///////////// TEMPLATE LITERALS USES BACKTICKS ``

///////////// INSERTING VARIABLE USING ${VAR} IS CALLED STRING INTERPOLATION //////////////////////////////////


let boy = 'Parmod'
let boy1 = 'Nikhil'
let sentence = `${boy1} is a friend of ${boy}`
console.log(sentence)
 

/////////////////// ESCAPE SEQUENCE CHARACTERS //////////////////

 let fruit = 'Bana\'na'
console.log( fruit)


 let fruit = 'Bana\nna'
console.log( fruit)


let fruit = "Bana\"na"
console.log( fruit)


let fruit = 'Bana\rna'
console.log( fruit)

//////////////////// STRINGS FUNCTIONS //////////////////

let name = "Kalash"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(1,3)) //// FROM (1 to 3) 3 is not included
console.log(name.slice(3))  ///// From 3 to END
console.log(name.replace("al" , "dm"))  /////  REPLACE THE CHARACTERS OF THE STRING
let friend = 'CODE'
console.log(name.concat(' is a Friend of ',friend , '! Okayy')) ////  ADD THE STRINGS
let friend1 = " Meena   "
console.log(friend1.trim()) //// TRIM the Strings
console.log(name.concat(' is a Friend of ', friend1.trim(), '! Okayy')) ////  ADD THE STRINGS and TRIM it

let name = "Kalash"
console.log(name[0]) //////// Strings are Immutable In Order to Access Characters we Use Following
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
////////////////////////// ACCESS ALL CHARACTERS IN A STRING //////////////////////////
for (let i =0; i<= name.length ;i++){
  console.log(name[i])
}

//////////////////////// STRING INCLUDE WORD //////////////////////

let s= " Hey My name is kalash"
let r= "kalash"
console.log(s.includes(r))
console.log(`The Word "${r}" ${s.includes(r)? "is": "is not" } in the Sentence`);


let str = " Your Balance is Rs 9999"
let str2=Number.parseInt(str.slice(20))
console.log(str2)


let friend = 'Deepika is in mental Hostpital'
let s = friend.length
let New=""
for (let i =0; i<s; i++){
  New += friend[i]
  console.log(New)
  
}
console.log(New)

///////////////////////////////////     A R R A Y S    ////////////////////////////////

////////////   ARRAYS ARE VARIABLE WHICH CAN HOLD MORE THAN ONE VALUE    //////////////////

let array= [ 45,5,56,5,null,false,true,"Invalid"]
console.log(array)

let array= [ 45,5,56,5,null,false,true,"Invalid"]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[9]) // WILL BE UNDERFINED AS IT NOT EXIST
console.log(array.length)


ARRAYS ARE MUTABLE ARRAYS  CAN BE CHANGED ////////////////////////////////

let array= [ 45,5,56,5,null,false,true,"Invalid"]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array)
array[8]=120
array[4]=12
console.log(array)

//////////////////// ARRAY METHODS ////////////////////////////

let num=[1,2,3,4,5]
let b = num.toString() /////// CONVERTS ARRAYS TO STRING 
console.log(b)
let c = num.join(" and ")
console.log(c)
let r = num.pop() ////////// POPS ARRAY FROM THE LAST
console.log(num,r)
let r = num.push(4568) //////// PUSH RETURNS THE NEW ARRAY LENGTH AND ADDS TO THE END OF ARRAY
console.log(num,r)
let q = num.shift()/// REMOVES THE FIRST ELEMENT FROM THE ARRAY
console.log(q, num)
let p = num.unshift(785) ////// ADDS ELEMENT TO THE BEIGNNING AND RETURNS NEW ARRAY LENGTH 
console.log(p , num)

let num=[1,2,3,4,5]
console.log(num.length)
delete num[0] ////////////////DELETE THE ELEMENT FROM THE ARRAY BUT THE LENGTH OF THE ARRAY REMAINS THE SAME 
console.log(num)
console.log(num.length)

///////////////// CONCAT / ADD 2 ARRAYs ///////////////
let num=[1,2,3,4,5,6,7]
let num1=[7,4,6,2,6,4,7]
let num2=[15,78,94,52,64]

let newArray=num.concat(num1,num2)
console.log(newArray)

//////////   SORT FUNCTION  //////////
let num =[165,6456,661,665,230,21,21545,5454]
let compare = (a,b)=>{
  return a - b
}
num.sort(compare)
console.log(num)
num.reverse()
console.log(num)

//////////// SPLICE ////////// SPLICE ADDS NEW ITEM TO ARRAY 
//// const n =[1,2,3,4,5,6]
///  n.splice(Pos of addition, No of elements to be removed,Elements to be added ,Elements to be added )
//// RETURNS DELETED VALUES AND ADDS ELEMENTS TO THE ARRAY 

let num =[165,6456,661,665,230,21,21545,5454]
num.splice(2,4,1,2,3,99,100,101)
console.log(num)


//////////// SLICE ////////// SLICE OUT PIECE FROM ARRAY
let num =[165,6456,661,665,230,21,21545,5454]
let newNum=num.slice(3)
console.log(newNum)

\\\\\\\\ SLICE the MIDDLE ELEMENTS \\\\\\\\\\\\
let num =[165,6456,661,665,230,21,21545,5454]
let newNum=num.slice(3,5)
console.log(newNum)

/////////// ARRAY LOOP ///////////////
let num =[1,2,3,4,54,55]
for (i=0 ; i<num.length ; i++){
  console.log(num[i])
}
 \\\\\\\\\\\\\\\\\\\\ FOR EACH LOOP //////////////////
    CALLS A FUNCTION ONCE FOR EACH ARRAY ELEMENT 

 num.forEach((element)=> {
console.log(element * element)
})

/////////////////// ARRAY.FROM \\\\\\\\\\\\\\\\\\\
let name = 'kalash'
let arr = Array.from(name)
console.log(arr)

//////////////////  FOR OF LOOP IN ARRAY /////////////////////
let num=[1,2,5,8,6]
for (let i of num){
  console.log(i)
}

\\\\\\\\\\\\\\\ FOR IN LOOP ARRAY /////////////////////

for (let i in num){
  console.log(i)
}

??????????????????   MAP ???????????????????????
CREATES A NEW ARRAY PERFORMING OPERATION ON EACH ARRAY VALUE
a.map((value,index,array){
   //Function logic
})
 
let arr = [45,65,23,74,56]
let a = arr.map((value,index,array)=>{
  console.log(value ,index,array)
  return value + 5
})
console.log(a)
////////////// FILTER AN ARRAY OF VALUES THAT PASSES THE TEST /////////////////
let arr = [45,65,23,74,56]
let a2 =arr.filter((a)=>{
  return a>50
})
console.log(a2)

**********************  REDUCE FUNCTION **************************
Reduce a Array by adding all the Elements to a Single Number

For Example 1+2=3+3=6+4=10+5=15+6=21

let arr3 =[1,2,3,4,5,6]
let newArr =arr3.reduce((h1 ,h2)=>{
  return h1 + h2
})
console.log(newArr)

 ---------------------------- OR ------------------------

const reduce_func = (h1 ,h2)=>{
  return h1 + h2
}
let newArr3 = arr3.reduce(reduce_func)
console.log(newArr3)


----------------- ADDING NUMBER TO A ARRAY USING LOOP ---------------
let arr =[1,2,3,4,5,66,77]
let a;
do {
a = prompt("Enter a Number");
a=Number.parseInt(a)
arr.push(a)
console.log(arr)
} while (a!=0);
console.log(arr)
  
---------------- FILTER NUM DIVISIBLE BY 10 ----------------

let arr =[1,20,40,85,100,95,12,70]
let a=arr.filter((x)=>{
  return x%10 ==0
})
console.log(a)

--------------- CREATING A ARRAY OF SQUARE USING MAP FUNCTION ----------

let arr =[1,20,40,85,100,95,12,70]
let a=arr.map((x)=>{
  return x*x
})

console.log(a)

------- CALCUALTING FACTORIAL OF A ARRAY OF NUMBERS USING REDUCE FUNCTION -----------

let arr =[1,2,3,4,5,6]
let a=arr.reduce((x1,x2)=>{
  return x1*x2
})

console.log(a)