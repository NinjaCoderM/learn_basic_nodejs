import {connection} from "../db/db.js";

class Student {
  constructor(id, fname, lname, email) {
    this.id = id;
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

  async editStudent(){
    //console.log(this.id + " " + this.fname + " " + this.lname + " " + this.email);
    return connection`UPDATE student set first_name = ${this.fname}, last_name = ${this.lname}, email = ${this.email} where id =  ${this.id}
      RETURNING id, first_name, last_name, email`

  }

}

export default Student;
