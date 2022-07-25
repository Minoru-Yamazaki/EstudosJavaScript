function getname(){
    return "Edson Minoru Yamazaki";
}

function log(x){
    console.log(x());
}

const results = log;

results(getname);

/********** Currying ************/
function soma(a){
    return function(b){
        return a + b;
    }
}

const teste = soma(2);

console.log(teste(2));
console.log(teste(3));
console.log(teste(4));
console.log(teste(5));
console.log(teste(6));