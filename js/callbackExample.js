"use strict";

function callbackGoodExample(a, b, callback){
  return callback(a,b);
}

function add(a, b){ return a + b;}
function mult(a, b){ return a * b;}

console.log(callbackGoodExample(3, 5, add));
