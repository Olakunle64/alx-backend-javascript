export default function createReportObject(employeesList) {
    const fullObj = {
        "allEmployees": employeesList,
        getNumberOfDepartments: function () {
            return Object.keys(employeesList).length;
        }
    }
    return fullObj;
}