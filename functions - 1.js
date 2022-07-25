function teste1 () {
    return "algo";
}

const teste2 = () => "algo"; // Não precisa colocar RETURN quando não há bloco {}

console.log(teste1());
console.log(teste2());

// Funções são objetos!
console.log("*********************************");
console.log("Adicionando propriedades na função:");

teste1.prop = "Posso criar propriedades!";
console.log(teste1());
console.log(teste1.prop);

// Recebendo funções como parâmetros
console.log("*********************************");
console.log("Recebendo funções como parâmetros");
const logFnResult = fnParam => console.log(fnParam());

logFnResult(teste1);

// Receber e retornar funções
console.log("*********************************");
console.log("Receber e retornar funções");

const controlFnExec = fnParam => allowed => {
    if (allowed) {
        return fnParam();
    }    
}

const fn = () => 'Code here';
const handleFnExecution = controlFnExec(fn);

console.log("true:" + handleFnExecution(true));
console.log("false:" + handleFnExecution());
