let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
    console.log(i); // Imprime: 0 1 2 foo
}

for (let n of arr) {
    console.log(n); // Imprime: 3 5 7
}