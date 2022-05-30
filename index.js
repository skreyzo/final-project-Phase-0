// Release 0
let student = {};
student.firstName = "Petr";
student.lastName = "Perviy";
student.firstName = "Petya";
delete student.firstName



// Release 1 
let group = [];
group.push(student);
group.push(student2= {firstName: "Vlad", lastName: "Topalov"});
group.push(student3 = {firstName: "Vasilisa", lastName: "Prekrasnaya"});

console.log(group);