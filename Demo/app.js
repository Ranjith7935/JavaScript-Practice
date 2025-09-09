
/*
Temporal Dead Zone:
time b/w intialization and declartion is temporal dead zone 
*/
/* 
Hoisting:
calling variable or function before intilaization */


/* function add(a,b) {
    console.log(a,b);
    
}
add(10,20)
console.log("prototype" in add);
 let a=new add(10,20)
 console.log(Object.getPrototypeOf(a)==add.prop);

 */
/* 
callbacks()
order
def: the funstion which gives function as an argument
if known as as callback function

higher order function :
def->which accepts function as an parameter is known as higher order function

 */

/* function add(a,b) {
    console.log(a+b);
}
function  sub(a,b){
    console.log(a-b);
    
}
function multiple(a,b){
    console.log(a*b);
    
}
function callbackfunction(para1,para2,para3){
    para1(10,20)
    para2(10,20)
    para3(10,20)
}
callbackfunction(add,sub,multiple)
 */

  /*  Another way  of call back function */
//   function callback1(function add(a,b) {
//     console.log(a+b);
    
//   }){}

//  function cal(task){
//     task(10,20)
//  }
let arr=["girdhar","sanjay","shekar","arvind",'abb',"a","b","ab"]
// console.log(arr.sort());
console.log(arr.sort((a,b)=>{
    return a.length-b.length
}));
let arr1=[1,2,3,5]

//aksay saini







