"use strict";

const {testExportExampleAdd} = require("./functionModule");

console.log(testExportExampleAdd(1,3));

function Person(name, alter){
  let vname = name;
  let valter = alter;
  function getPersonInfo(){
    return vname + ' ' + valter;
  }
  return getPersonInfo();
}

console.log(Person("Ernst", 22))
