"use strict";
import {AllLogs} from "../jsonLoggerFS.js";
import {readFile, writeFile} from "./logStoreFS.js";
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//const filePath = path.join(__dirname, "log.json");
const filePath = "/var/log/syslog/log.json";

let allLogs = null; // Initialisiere allLogs als null


// Funktion zum Abrufen des Logs
export const getLogs = async () => {
  if (!allLogs) {
    allLogs = await readFile(filePath)
    if (allLogs.logItems === undefined) {
      allLogs = new AllLogs([]);
    }
  } else {
    console.log("use cache " + allLogs.logItems.l);
  }
  return allLogs;
};

// Funktion zum Hinzufügen eines neuen Eintrags
export const addLog = (item) => {
  return getLogs().then((logs) => {
    logs.pushItem(item);
    allLogs = new AllLogs(logs.logItems)
    writeFile(allLogs, filePath)
    return allLogs;
  });
};


