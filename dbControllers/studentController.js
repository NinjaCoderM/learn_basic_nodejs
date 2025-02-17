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
      const student = new Student(null, req.body.fname, req.body.lname, req.body.email);
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

export const editStudent = async(req, res, next) => {
  try {
    console.log(req.body);
    let st
    try{
      const student = new Student(req.body.id, req.body.fname, req.body.lname, req.body.email);
      console.log(student);
      st = await student.editStudent();
      console.log(st);
    } catch (err){
      console.log(err);
    }
    res.json(st);
  } catch (err){
    console.log(err);
  }
  next()
}

export const deleteStudent = async(req, res, next) => {
  if(req.body.id === undefined){
    return res.status(404).send("Id is required");
  }
  try {
    let result = await Student.deleteStudent(req.body.id);
    console.log(result instanceof Promise);
    console.log(result);
    res.send(result.message);
  } catch (err) {
    console.log(err);
    if(err.message.includes('Kein Student mit ID')){
      res.status(404).send(err.message);
    } else {
      res.status(500).send(err.message);
    }

  }
  next()
}

export default {
  getStudent, addStudent, editStudent, deleteStudent
};


