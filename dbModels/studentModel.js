import {connection} from "../db/db.js";

class Student {
  constructor(fname, lname, email) {
    this.fname = fname;
    this.email = email;
    this.lname = lname;
  }

  static findAll() {
    let stmt = " ";
    return connection`SELECT * FROM student`
  }
  async addStudent(){
    return await connection`INSERT INTO student
                        (first_name, last_name, email, address_id)
                 VALUES (${this.fname},${this.lname},${this.email},1)`
    .then(result => {
      console.log("Student hinzugefügt:", result);
      return result;
    }).catch(error => {
      console.error("Fehler beim Einfügen:", error);
    });
  }

}

export default Student;
