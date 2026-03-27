console.log("Hello world!");

//let= block scope euta loop ma initialize gareko arko ma print garna sakideina var=no block scope kaile ni use gardeinam
function varTest()
{
     if(true)
    {
         var a=1;
     }
    console.log(a);
 }
varTest();
function letTest()
{
    if(true)
     {
         let b=2;
         console.log(b);
    }
    
 }
letTest();

var a=1;
a=2;
console.log(a);

let b=1;
b=2;
console.log(b);

const c=1;
console.log(c);

const fruits=["apple","mango","strawberry","banana","guava"];
fruits.map(i=>console.log(i));

// mao bhaneko for loop nei ho muni ko duita

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

for(fruit of fruits)
{
    console.log(fruit);
}

//ES6 -> introduce arrow function
//write a function that takes two arguments. The function should return sum of those two
function Addnum(a,b)
{
    return a+b;
}
console.log(Addnum(2,2));

const Addnumr=(a,b)=>{
     return a+b;
}
console.log(Addnumr(2,2))

//write an arrow function that only prints even index of array fruits
const even=(arr)=>{
    for(let i=0;i<arr.length;i++)
    {
        if(i%2==0)
        console.log(arr[i]);
    }
}
even(fruits);

const filterDataMap=fruits.filter((value,index)=>index%2==0);
console.log(filterDataMap);

//object
const student={
    name: "Preetisha",
    age: 20,
    course: "Computer Engineering"
};
console.log(student.name);
console.log(student.age);

//spread operator
const updatedStudent={...student, grade:"A"};
console.log(updatedStudent);

console.log([...fruits,...filterDataMap]);