"use strict"

const fs = require("node:fs").promises;

const readFile2 = async (filePath, encoding) => {
  try {
    const data = await fs.readFile(filePath, encoding);
    console.log(data.toString());
  } catch (error) {
    console.log("Es gab einen Fehler: " + error.message);
  }
};

const writeFile = async (filePath, text, options) => {
  try{
   await fs.writeFile(filePath, text ,options);
  } catch(error){
    console.log("Es gab einen Fehler: " + error.message);
  }
}

const addItem = async (filePath, name, anzahl, preis, options) => {
  try {
    const item = `\n${name}, ${anzahl}, ${preis}`;
    await writeFile(filePath, item, options);
  } catch (error) {
    console.log("Es gab einen Fehler: " + error.message);
  }
};


let textArray = [["A", "2", "2€"], ["B", "3", "3€"], ["C", "4", "4€"]];

(async function(){ //wegen Reihenfolge mit await pro Zeile
  await writeFile('text.txt', 'Name, Anzahl, Preis', { encoding: "utf8" });
  await addItem('text.txt', 'Apfel', '4', '4€', {flag: "a", encoding: "utf8"});
  await addItem('text.txt', 'Apfel+', '4', '40€', {flag: "a", encoding: "utf8"});
  for (const item of textArray) {
    await addItem('text.txt', ...item, {flag: "a", encoding: "utf8"});
  }
  await readFile2('text.txt', 'utf8');
})();




