export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  let allEmployees = [];
  employees.forEach((emp) => {
    allEmployees = allEmployees.concat(emp);
  });
  return allEmployees;
}
