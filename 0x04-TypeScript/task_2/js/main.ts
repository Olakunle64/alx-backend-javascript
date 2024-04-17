// Director class interface
interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

// Teacher class interface
interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

// Director class
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

// Teacher Class
class Teacher implements TeacherInterface{
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// A function that returns either a Director or a Teacher based on a condition
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Task 6
function isDirector(employee: Teacher | Director): boolean {
    if (employee.constructor === Director) {
        return true;
    } else {
        return false;
    }
}

function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
        console.log((employee as Director).workDirectorTasks());
    } else {
        console.log((employee as Teacher).workTeacherTasks());
    }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// Task 7
type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));