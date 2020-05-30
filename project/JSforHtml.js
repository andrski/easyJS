"use strict"
// function generator
function counter(start = 0, step = 1){
  let value = 0;

  return function() {
    value++;
    if(value <= 1){
      return start
    }
    else {
    return start += step;
  }

  }
}

//вызов ФГен
let count = counter();

// create date arr
var date = [];

function take(count, x){
  for(var i = 0; i<x; i++){
    date.push(count());
  }
  return date;
}
//take(count, 6);

console.log(date);

function show(){
  for(var i=0;i<date.length;i++)
  console.log(date[i]);
  }
//show(...date); // использование оператора расширения


function kub(y){
return y+10;
}

var dateM = [];
function map(kub, date){
 for( var i = 0; i <= date.length - 1; i++){
   dateM.push(kub(date[i]));
 }
 return dateM;
}

map(kub, date);
console.log(dateM);  //применили fkub для массива date

function sum(a,b,c){
  return a+b+c;
}

function fkubsum(kub, sum){
  return function(){
    return kub(sum());
  }
}

// 4 task without parametres

function fmap(kub, count){
  return function(){
        return kub(count());
  }
}
var kubcount = fmap(kub, count);
console.log( kubcount());
console.log( kubcount());
console.log(kubcount());

 console.log('------4 task with parametres---');

 // 4 part with parametres

 function add(a,b,c){
   return a+b+c;
 }

 var square = (x) => {return x*2};

var fmap2 = (square, add) => {
  return function(...args){
    return square(add(...args));
  }
};

var squareadd = fmap2(square, add);

console.log(squareadd(1,2,2,2,2,2));

// partial use
console.log('-----5 task-----');

var mult = (a,b,c,d) => {return a*b*c*d};

function curry (func) {
  return function curried (...args){
    if(func.length <= args.length){
      return func.apply(this, args);
    }
    else return function (...args2){
      return curried.apply(this, args.concat(args2));
    }
  }
}

var curryadd = curry(add);
var currymult = curry(mult);

var partialadd = curryadd(4)(5);
var partialmult = currymult(1,2,); 

console.log(partialadd(10));
console.log(partialmult(2,2));

// ------6 task
console.log('------6 task-----');
