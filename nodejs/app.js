"use strict"

const fs = require("node:fs").promises;

async function readFile(filePath, encoding){
  try{
    const data = await fs.readFile(filePath, encoding);
    console.log(data.toString());
  } catch(error){
    console.log("Es gab einen Fehler: " + error.message);
  }
}

async function readFile2(filePath, encoding){
  try{
    let data;
    fs.readFile(filePath, encoding)
      .then(value=>{data = value.toString();console.log(data.toString())});
  } catch(error){
    console.log("Es gab einen Fehler: " + error.message);
  }
}

async function writeFile(filePath, text, options){
  try{
   await fs.writeFile(filePath, text ,options);
  } catch(error){
    console.log("Es gab einen Fehler: " + error.message);
  }
}

async function addItem(filePath, name, anzahl, preis, options){
  try{
    const item = `\n${name}, ${anzahl}, ${preis}`;
    writeFile(filePath, item, options);
  } catch(error){
    console.log("Es gab einen Fehler: " + error.message);
  }
}

(async function(){ //wegen Reihenfolge mit await pro Zeile
  await writeFile('text.txt', 'Name, Anzahl, Preis', 'utf8');
  await addItem('text.txt', 'Apfel', '4', '4€', {flag: "a", encoding: "utf8"});
  await addItem('text.txt', 'Apfel+', '4', '40€', {flag: "a", encoding: "utf8"});
  await readFile2('text.txt', 'utf8');
})();




