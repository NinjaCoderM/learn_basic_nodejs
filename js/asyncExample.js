"use strict";

async function testAsync(){
  let promise = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("Return schwer ermittelbaren Infos nach 2 s"), 2000);
  })

  let ergebnis = promise;
  console.log(ergebnis);
  await ergebnis;
  console.log(ergebnis);

  promise.then(console.log);
}

testAsync();
