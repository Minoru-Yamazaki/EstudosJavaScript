const students = [
    {
        name: "Grace",
        grade: 7
    },
    {
        name: "Jennifer",
        grade: 4
    },
    {
        name: "Paul",
        grade: 10
    }
]

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 6);
}

console.log("Alunos aprovados:");
console.log(getApprovedStudents(students));

// Lista de alunos permanece inalterado!
console.log("\nLista de Alunos:");
console.log(students);