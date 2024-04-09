export default function createReportObject(employeesList) {
  const fullObj = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return fullObj;
}
