"use strict";

// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseStr("Fidan"));

// let stu2 = new Object();

// stu2.name = "test";
// console.log(stu2.name);

// function Test(a, b) {
//   this.name = a;
//   this.surname = b;
// }

// let test1 = new Test("dfds", "sfaf");
// let test2 = new Test("dfds", "sfaf");

// test1.age = 50;

// console.log(test1.name);
// console.log(test1);
// console.log(test2);

// let stu = {
//   name: "Samir",
//   surname: "Qehremenov",
//   age: 24,
// };

// let resultt = confirm("are you sure");

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

group.deleteStudent(3);

console.log(group.getAllStudents());

// let searchedDatas = group.searchStudentByName("f");
// let searchedDatas = group.searchStudentBySurname("a");
// console.log(searchedDatas);

// console.log(studentsBeforeUpdate);
// function showBeforeUpdate() {
//   let studentsBeforeUpdate = group.getAllStudents();
//   for (const item of studentsBeforeUpdate) {
//     let li = document.createElement("li");
//     li.className = "list-group-item";
//     let str =
//       item.name + " " + item.surname + " " + item.address + " " + item.age;
//     li.innerText = str;
//     document.querySelector(".ul1").append(li);
//   }
// }

// console.log("----------------------------------");

// let updatedStu = {
//   id: 4,
//   name: "Tes1",
//   surname: "Test2",
//   age: 24,
//   address: "Hazi",
// };

// function showAfterUpdate() {
//   group.updateStudent(updatedStu);
//   let studentsAfterUpdate = group.getAllStudents();
//   for (const item of studentsAfterUpdate) {
//     let li = document.createElement("li");
//     li.className = "list-group-item";
//     let str =
//       item.name + " " + item.surname + " " + item.address + " " + item.age;
//     li.innerText = str;
//     document.querySelector(".ul2").append(li);
//   }
// }

// showBeforeUpdate();
// showAfterUpdate();

// console.log(studentsAfterUpdate);

// let result = group.getAllStudents();

// console.log(group.getStudentById(20));
// console.log(result);

// for (const item of result) {
//   let li = document.createElement("li");
//   li.className = "list-group-item";
//   let str =
//     item.name + " " + item.surname + " " + item.address + " " + item.age;
//   li.innerText = str;
//   document.querySelector("ul").append(li);
// }

// document.querySelector("h1").innerHTML = "sahjk";
// document.querySelector("h1").innerText = "sahjk";
// document.querySelector("h1").innerHTML = "<span>salam</span>";
// document.querySelector("h1").innerText = "<span>salam</span>";

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     // this.getFullName = function () {
//     //   console.log(this.name + " " + this.surname);
//     // };
//     // this.age = 23;
//   }
// }

// let person1 = new Person("Surac", "Ismayilov");
// let person2 = new Person("Xeyysm", "Isgenderov");

// person1.age = 40;
// console.log(person1.name + " " + person1.surname + " " + person1.age);
// console.log(person2.name + " " + person1.surname + " " + person2.age);

// person1.getFullName();
// person2.getFullName();

// Person.prototype.getFullName = function () {
//   return this.name + " " + this.surname;
// };

// Person.prototype.age = 100;

// console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person2.age);

// let name = "Surac";
// let surname = "Ismayilov";

// String.prototype.test = "salamalar";
// console.log(name.test);

// String.prototype.searchStr = function (str) {
//   return this.includes(str);
// };

// console.log(name.searchStr("a"));
// console.log(surname.searchStr("d"));
