interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {firstName: "Isiaq", lastName: "Salau", age: 21, location: "USA"};
let student2: Student = {firstName: "Mubaraq", lastName: "Salau", age: 20, location: "UK"};
let studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});

document.body.appendChild(table);