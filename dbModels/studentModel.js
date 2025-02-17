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

  static async deleteStudent(id) {
    try {
      const result = await connection`DELETE FROM student WHERE id = ${id} RETURNING *`;

      console.log(result);
      console.log(result.rowCount);
      console.log(result.length);

      // Falls keine Zeile gelöscht wurde
      if (result.length === 0) {
        throw new Error(`Kein Student mit ID ${id} gefunden.`);
      }

      return { message: `Student mit ID ${id} wurde gelöscht.` };
    } catch (error) {
      console.error("Fehler beim Löschen:", error);
      throw new Error("Fehler beim Löschen des Datensatzes." + error.message);
    }
  }
}

export default Student;
