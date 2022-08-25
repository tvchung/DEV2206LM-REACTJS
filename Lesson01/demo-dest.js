var arr = [1,2,4,5,6,7];
const [a,b]=arr;
console.log("a=",a);
console.log("b=",b);
console.log(arr);

// object
const person={
    id:10000,
    name:"Devmaster",
    age:5
};
const {name,age}=person;
console.log("Name:",name);
console.log("Age:",age);
console.log(person);

const {x,y,id}=person;
console.log("Name:",x);
console.log("Age:",y);
console.log("id:",id);
console.log(person);