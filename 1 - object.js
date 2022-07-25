let user = {
    name: "Minoru"
}

console.log(user);

user.name = "Edson";
console.log(user);

user["name"] = "Yamazaki";
console.log(user);

const prop = "name";
user[prop] = "Minoru";
console.log(user);

delete user.name;
console.log(user);