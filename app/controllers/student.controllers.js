// data
const studentList = [
  {
    id: 1,
    fullName: 'Le Thi Dao',
    age: 18,
    numberClass: 12,
  },
  {
    id: 2,
    fullName: 'Ngo Van Buoi',
    age: 17,
    numberClass: 11,
  },
  {
    id: 3,
    fullName: 'Le Thi Chuoi',
    age: 16,
    numberClass: 10,
  },
];

const getStudentsAll = (req, res) => {
  res.status(200).send(studentList);
};

const getStudentDetail = (req, res) => {
  const id = req.params.id;
  const index = studentList.findIndex((student) => {
    return student.id == id;
  });

  if (index !== -1) {
    const student = studentList[index];
    res.status(200).send(student);
  } else {
    res.status(404).send('Not found!');
  }
};

const createStudent = (req, res) => {
  let dataStudent = req.body;

  const newStudent = {
    id: Math.random(),
    ...dataStudent,
  };

  studentList.push(newStudent);
  res.status(201).send(newStudent);
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { fullName, age, numberClass } = req.body;
  let index = studentList.findIndex((student) => student.id === +id);

  if (index !== -1) {
    studentList[index] = { ...studentList[index], fullName, age, numberClass };
    res.status(200).send(studentList[index]);
  } else {
    res.status(404).send(`Can't not update!`);
  }
};

const deleteStudent = (req, res) => {
  const { id } = req.params;

  let index = studentList.findIndex((el) => el.id == id);
  if (index !== -1) {
    const studentDelete = studentList[index];
    studentList.splice(index, 1);
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
