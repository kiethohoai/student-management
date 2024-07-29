const { where } = require('sequelize');
const { Student } = require('./../models/index');

// data
let studentList = [
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

// let studentList = [];

const getList = async () => {
  const studentList = await Student.findAll();
  if (studentList.length > 0) return studentList;
  else return false;
};

const getDetail = async (id) => {
  const student = await Student.findOne({
    where: {
      id,
    },
  });

  if (student) return student;
  else return false;
};

const addStudent = async (dataStudent) => {
  const newStudent = await Student.create(dataStudent);
  return newStudent;
};

const putStudent = async (id, fullName, age, numberClass) => {
  const studentUpdate = await getDetail(id);

  if (studentUpdate) {
    studentUpdate.fullName = fullName;
    studentUpdate.age = age;
    studentUpdate.numberClass = numberClass;
    const curStudentUpdated = await studentUpdate.save();
    return curStudentUpdated;
  } else {
    return false;
  }
};

const deleteById = (id) => {
  let index = studentList.findIndex((el) => el.id == id);
  if (index !== -1) {
    const studentDelete = studentList[index];
    studentList.splice(index, 1);

    return studentDelete;
  } else {
    return false;
  }
};

// Exports
module.exports = {
  getList,
  getDetail,
  addStudent,
  putStudent,
  deleteById,
};
