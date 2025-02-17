import express from 'express';
import {connection} from "../../db/db.js";
import {ProfileRoutes} from "./ProfileRoutes.js";
import studentController from "../../dbControllers/studentController.js";

export let StudentRoutes = express.Router();

StudentRoutes.route("/").get(studentController.getStudent, (req, res) => {})
  .post(studentController.addStudent, (req, res) => {})
  .delete((req, res) => {
  res.send(`UserData delete `)
}).put((req, res) => {
  res.send(`UserData put `)
})


StudentRoutes.get('/:id', async (req, res) => {

  let id = req.params.id;

  try {
    const students = await connection`SELECT *
                                      FROM student
                                      WHERE id = ${id}`;

    if (students.length > 0) {
      res.render("main/student/studentDetail", {
        id: students[0].id,
        first_name: students[0].first_name,
        last_name: students[0].last_name,
        email: students[0].email,
        address_id: students[0].address_id,
        title: "Title " + students[0].last_name,
        path: "/student" + req.path
      });
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).send("Internal Server Error");
  }
});


