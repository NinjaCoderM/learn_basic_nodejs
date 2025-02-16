"use strict";
import {promises as fs} from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
import { getLogs, addLog } from './data/logStore.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const logJson2FS = (req, res, next) => {
   let item = new LogItem(new Date, req.url );
   if(!item.url.includes("css")){
     addLog(item);
   }
   next();
}

export class AllLogs {
  constructor(logItems){
    this.logItems = logItems;
  }
  pushItem(item){
    this.logItems.push(item);
  }
}

class LogItem {
  constructor(datum, url) {
    this.datum = datum;
    this.url = url;
  }
}
