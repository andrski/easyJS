"use strict"

function show (a, b){
  console.log(this[a], this[b]);
}

var Person = {
  name : "Petya",
  surname: "Ivanov",
  age:30
}

show.call(Person, 'name', 'surname');  