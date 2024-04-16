export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  const updatedStudents = cityStudents.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    student.grade = matchingGrade ? matchingGrade.grade : 'N/A';
    return student;
  });
  return updatedStudents;
}
