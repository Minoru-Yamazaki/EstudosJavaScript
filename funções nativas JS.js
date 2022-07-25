// entries()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f) {
    console.log(x);
}
// [0, 'Banana']
// [1, 'Orange']
// [2, 'Apple']
// [3, 'Mango']

/***************************************************************************/
// every()
// Verifica se TODOS são maiores que 18
const ages = [32, 33, 16, 40];
function checkAge(age) {
    return age > 18;
}
ages.every(checkAge);
// false

/***************************************************************************/
//Pegar um valor no array
// at()
const array1 = [5, 12, 8, 130, 44];
console.log(array1.at(1)); //imprime 5
console.log(array1.at(-1)); //imprime 44

/***************************************************************************/
// Preencher um array
// fill()
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4] 
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3] valor a preencher, início e fim
Array(3).fill(4);                // [4, 4, 4]


/***************************************************************************/
// Encontrar um elemento no array
// find()
const array2 = [5, 12, 8, 130, 44];

const found = array2.find(element => element > 10); // expected output: 12

/***************************************************************************/
// Encontrar um índice do array
// findIndex()
function maiorQueSeis(n) {
    return n > 6;
}

[4, 6, 7, 12].findIndex(maiorQueSeis); // retorna 2 -> primeira posição maior que 6