"use strict";

function callbackBad(a, b, art){
  if(art === 'add') return a+b;
  if(art === 'mult') return a*b;
}

console.log(callbackBad(3, 5, 'add'));
