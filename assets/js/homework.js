"use strict";

let stu1 = {
  id: 1,
  name: "Huseyn",
  surname: "Huseynov",
  age: 20,
  address: "Ecemi",
};

let stu2 = {
  id: 2,
  name: "Aydemir",
  surname: "Resulov",
  age: 19,
  address: "Turkiye",
};

let stu3 = {
  id: 3,
  name: "Cahangir",
  surname: "Axundov",
  age: 20,
  address: "Xirdalan",
};

let stu4 = {
  id: 4,
  name: "Samir",
  surname: "Qehremanov",
  age: 24,
  address: "Sumqayit",
};

let group = {
  name: "P139",
  capacity: 6,
  students: [],
  addStudent: function (student) {
    if (student == undefined) {
      alert("Parametr is empty");
      return;
    }
    if (this.students.length == this.capacity) {
      alert("Group is full");
      return;
    }
    this.students.push(student);
  },
  getAllStudents: function () {
    return this.students;
  },
  getStudentById: function (id) {
    let existedStudent = this.students.find((m) => m.id == id);

    if (existedStudent == undefined) {
      alert("student not found");
      return;
    }
    return existedStudent;
  },

  updateStudent: function (student) {
    // let existedStudent = this.students.find((m) => m.id == id);

    // if (existedStudent == undefined) {
    //   alert("student not found");
    //   return;
    // }

    let existedStudent = this.getStudentById(student.id);

    existedStudent.name =
      student.name == undefined ? existedStudent.name : student.name;
    existedStudent.surname =
      student.surname == undefined ? existedStudent.surname : student.surname;
    existedStudent.address =
      student.address == undefined ? existedStudent.address : student.address;
    existedStudent.age =
      student.age == undefined ? existedStudent.age : student.age;
  },

  searchStudentByName: function (searchText) {
    let searchedDatas = this.students.filter((m) =>
      m.name.trim().toLowerCase().includes(searchText.trim().toLowerCase())
    );
    if (searchedDatas.length == 0) {
      alert("data not found");
      return;
    }
    return searchedDatas;
  },

  searchStudentBySurname: function (searchText) {
    let searchedDatas = this.students.filter((m) =>
      m.surname.trim().toLowerCase().includes(searchText.trim().toLowerCase())
    );

    if (searchedDatas.length == 0) {
      alert("data not found");
      return;
    }

    return searchedDatas;
  },

  deleteStudent: function (id) {
    let data = this.students.find((m) => m.id == id);
    if (data == undefined) {
      alert("data not found");
      return;
    }
    let indexOfData = this.students.indexOf(data);
    let deletedStudent = this.students.splice(indexOfData, 1);
  },
};

group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.addStudent(stu4);

// group.deleteStudent(3);

// console.log(group.getAllStudents());

// let searchedDatas = group.searchStudentByName("f");
// let searchedDatas = group.searchStudentBySurname("a");
// console.log(searchedDatas);
