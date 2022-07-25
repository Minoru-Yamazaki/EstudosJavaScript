const user = {
    name: "Edson",
    lastName: "Yamazaki"
}
console.log(user.name); 
console.log(user); 

// Recupera as chaves do objeto
console.log(Object.keys(user)); 

// Recupera os valores da chave do objeto
console.log(Object.values(user));

// Rertorna um array de arrays contendo [[chave, valor],[chave, valor]]
console.log(Object.entries(user));

// Merge de um objeto
Object.assign(user, {fullName: `${user.name} ${user.lastName}`});
// ou Object.assign(user, {"Edson Yamazaki"});
console.log(user);

// retorna um novo objeto mergeando dois ou mais objetos
console.log("Cria um novo objeto: ", Object.assign({}, user, {age: 28}));
console.log("Não altera o objeto inicial: ", user);

// Tornar um objeto inalterável
console.log("*******************************");
console.log("Tornar um objeto inalterável");
const newObj = { foo: "bar"};
Object.freeze(newObj); // Se comentar essa linha o newObj pode ser alterado

newObj.foo = "changes";
console.log(newObj);
delete newObj.foo;
console.log(newObj);

// Permite apenas alteração de propriedades existentes no objeto
console.log("*******************************");
console.log("Permite apenas alteração de propriedades existentes no objeto");
const person = { nome: "Edson"}
Object.seal(person);

person.nome = "Edson Minoru"; // consegue alterar
console.log(person);
delete person.nome; // não consegue deletar
person.age = 28; // não consegue adicionar um novo atributo
console.log(person);