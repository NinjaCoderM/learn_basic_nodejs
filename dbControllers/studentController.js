import Student from "../dbModels/studentModel.js";

export const getStudent = async(req, res) => {
  try {
     const students = await Student.findAll();
     console.log(students);
     res.render("main/student", {
       students: students, //0 für response, 1 für fields
       title: "Studenten Übersicht",
       path: req.path
     });
  } catch (err){
    console.log(err);
  }
}

export default {
  getStudent
};


