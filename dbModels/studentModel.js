import {connection} from "../db/db.js";

class Student {
  constructor() {

  }

  static findAll() {
    let stmt = " ";
    return connection`SELECT * FROM student`
  }

}

export default Student;
