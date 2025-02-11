"use strict";

function testExportExampleAdd(a, b){
  return "Ergebnis: " + (a + b);
}

module.exports.testExportExampleAdd = testExportExampleAdd;
