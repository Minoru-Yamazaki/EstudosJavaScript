const users = ["Guilherme", "Pedro", "Jeniffer"];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: "Guilherme",
        age: 26,
        gender: gender.MAN
    },
    {
        name: "Pedro",
        age: 43,
        gender: gender.MAN
    },
    {
        name: "Jeniffer",
        age: 30,
        gender: gender.WOMAN
    }
];

console.log("*********************************");
console.log("Retornar a quantidade de itens de um array");

console.log("itens:", persons.length);

console.log("\n*********************************");
console.log("Verificar se é array");

console.log("A variável persons é um array:", Array.isArray(persons));

console.log("\n*********************************");
console.log("Iterar os itens do array");

persons.forEach((person, index, arr) => {
    console.log(`Nome ${index}: ${person.name}, Idade: ${arr[index].age}`, arr);
})

console.log("\n*********************************");
console.log("Filtrar array");

const mens = persons.filter(person => person.gender === gender.MAN);
console.log("Nova lista apenas com homens: ", mens);

console.log("\n*********************************");
console.log("Retornar um novo array");

const personsWithCourse =  persons.map(person => {
    person.course = "Introdução ao JavaScript";
    return person;
});
console.log("Pessoas com adição do curso:", personsWithCourse);

console.log("\n*********************************");
console.log("Transformar em um array de outro tipo");
// Primeiro (age) novo tipo, variável de retorno
// Segundo (person) é o item de iteração
// 1º parâmetro (a função) -> (age, person)... 
// 2º  parâmetro (0) -> valor inicial da propriedade
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log("Soma das idades das pessoas: ", totalAge);

console.log("\n*********************************");
console.log("Encadeando operações");

const totalMensAge = persons
.filter(person => person.gender === gender.MAN)
.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log("Soma das idades dos homens:", totalMensAge);
