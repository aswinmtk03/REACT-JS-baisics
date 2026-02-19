// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers); 

// const  user =[
//     { name:'Alice', age:25},
//     { name:'Bob', age:30},
//     { name:'Charlie', age:35}
// ]

// const names = user.map(user => user.name);
// console.log(names); 

const fruits=['apple','banana','cherry'];
const fruitList=fruits.map((fruits,index)=>`${index + 1}: ${fruits}`);
console.log(fruitList);