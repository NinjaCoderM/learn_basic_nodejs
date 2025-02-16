import fs from "fs/promises";//import {promises as fs} from "node:fs";
import {AllLogs} from "../jsonLoggerFS.js";
import path from "path";

export async function readFile(filePath){
  try{
    let allLogs;
    try {
      // Warten, bis die Datei gelesen wird.
      const data = await fs.readFile(filePath, "utf8");
      allLogs = new AllLogs(JSON.parse(data).logItems); // Die Daten parsen und als AllLogs-Objekt speichern.
    } catch (err) {
      // Wenn die Datei nicht existiert oder ein Fehler beim Lesen auftritt.
      console.log("Datei nicht gefunden oder Fehler beim Lesen: " + err );
      allLogs = new AllLogs([]); // Falls ein Fehler auftritt, initialisiere AllLogs mit leerem Array.
    }
    return allLogs;
  } catch (err){
    console.error("Fehler beim Schreiben der Datei: ", err);
  }
}

export async function writeFile(logs, filePath){
  try{
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(logs), (err) => {console.log(err)});
  } catch (err){
    console.error("Fehler beim Schreiben der Datei: ", err);
  }
}
