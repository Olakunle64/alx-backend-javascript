// Task 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "USA",
    contract: false
};
console.log(teacher1);

// Task 2
interface Directors extends Teacher {
    numberOfReports: number;
}
const director1: Directors = {
    firstName: "Jane",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "UK",
    contract: false,
    numberOfReports: 17
};
console.log(director1);

// Task 3
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const myTeacher: printTeacherFunction = printTeacher;
console.log(myTeacher("John", "Doe"));

// Task 4

// student class interface
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// student class constructor interface
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

class StudentClass {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}
const student2: StudentClass = new StudentClass("Mubaraq", "Salau");
console.log(student2.workOnHomework());
console.log(student2.displayName());

