// const person: {
//     name: string,
//     age: number,
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // 튜플 타입 선언
// } = {
//     name: "Max",
//     age: 30,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role {ADMIN = 5, READ_ONLY = 100, AUTHOR};

const person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};


// person.role.push("admin"); // push는 튜플이 지원해서 안잡힘 조심
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sprots"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map())
}

if(person.role === Role.AUTHOR) {
    console.log("is ");
}