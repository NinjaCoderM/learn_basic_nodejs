import Student from "../dbModels/studentModel.js";

export const getStudent = async(req, res, next) => {
  try {
     const students = await Student.findAll();
     //console.log(students);
     res.render("main/student", {
       students: students, //0 für response, 1 für fields
       title: "Studenten Übersicht",
       path: req.path
     });
     next(); //geht auch ohne, aber notwendig wenn mehrere middleware
  } catch (err){
    console.log(err);
  }
}

export const addStudent = async(req, res, next) => {
  try {
    console.log(req.body);
    try{
      const student = new Student(req.body.fname, req.body.lname, req.body.email);
      let st = student.addStudent();
      console.log(st);
    } catch (err){
      console.log(err);
    }
    res.redirect("/student");
  } catch (err){
    console.log(err);
  }
  next()
}

export default {
  getStudent, addStudent
};


