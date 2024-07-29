const {
  getList,
  getDetail,
  addStudent,
  putStudent,
  deleteById,
} = require('./../services/student.services');

// todo getStudentsAll
const getStudentsAll = (req, res) => {
  const studentList = getList();
  if (studentList) return res.status(200).send(studentList);
  else return res.status(404).send('NOT FOUND');
};

// todo getStudentDetail
getStudentDetail = (req, res) => {
  const id = req.params.id;
  const student = getDetail(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send('Not found!');
  }
};

// todo createStudent
const createStudent = (req, res) => {
  let dataStudent = req.body;
  const newStudent = addStudent(dataStudent);
  res.status(201).send(newStudent);
};

// todo updateStudent
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { fullName, age, numberClass } = req.body;
  const updatedStudent = putStudent(id, fullName, age, numberClass);

  if (updateStudent) res.status(200).send(updatedStudent);
  else res.status(404).send(`Can't not update!`);
};

// todo deleteStudent
const deleteStudent = (req, res) => {
  const { id } = req.params;

  const studentDelete = deleteById(id);

  if (studentDelete) {
    res.status(200).send(studentDelete);
  } else {
    res.status(404).send(`NOT FOUND!`);
  }
};

module.exports = {
  getStudentsAll,
  getStudentDetail,
  createStudent,
  updateStudent,
  deleteStudent,
};
