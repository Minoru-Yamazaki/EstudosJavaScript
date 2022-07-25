const textSize = "texto".length;
console.log(textSize);

// Retorna um arrau quebrando a string por um delimitador
const splittedText = "Texto".split('x');
console.log(splittedText);

// Substitui um valor
const replacedText = "Texto".replace("Text", "txeT");
console.log(replacedText);

// Retorna a "fatia" de um valor
const lastChar = "Texto".slice(-1);
console.log(lastChar);

const allWithoutLastChar = "Texto".slice(0, -1);
console.log(allWithoutLastChar);

const secondToEnd = "Texto".slice(1);
console.log(secondToEnd);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFisrtPos = "Texto".substring(0, 2);
console.log(twoCharsBeforeFisrtPos);


