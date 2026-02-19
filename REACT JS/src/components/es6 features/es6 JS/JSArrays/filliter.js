// const numbers=[1,2,3,4,5,6];
// const evenNumbers=numbers.filter(num=>num%2===0);
// console.log(evenNumbers);

// const people=[
//     {name:'Alice',age:17},
//     {name:'Bob',age:30},
//     {name:'Charlie',age:16},
//     {name:'David',age:28}
// ];
// const adults=people.filter(person=>person.age>=18);
// console.log(adults);

const mixedArray=[0,'hello',null,25,'world',undefined,];
const trueValues=mixedArray.filter(Boolean);
console.log(trueValues);