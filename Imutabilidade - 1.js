const user = {
    name: "Edson",
    lastname: "Yamazaki"
}

function addFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lastname}`
    }
}

const userWithFullName = addFullName(user);

console.log(user);
console.log(userWithFullName);