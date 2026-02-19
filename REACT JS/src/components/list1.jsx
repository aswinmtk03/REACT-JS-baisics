import React from 'react'

// const Numberlist = () => {
//     const Numbers = [1,2,3,4,5]
//     return(
//         <ul>
//             {Numbers.map((num)=>(
//             <li key={num}>
//                 {num} is {num % 2=== 0 ? "Even" : "Odd"}
//             </li>
//             ))}
//         </ul>
//     );
// }
// function app(){
//     return<Numberlist/>
// }

const FruitList = () => {
    const fruits = [
        {id: 1,name:'Apple'},
        {id: 2,name:'Banana'},
        {id: 3,name:'Mango'},
        {id: 4,name:'Orange'},

    ];
    return(
        <div>
            <h2>FruitList</h2>
            <ul>
                {fruits.map((fruit =>(
                    <li key={fruit.id}>{fruit.name}</li>

                )))}
            </ul>
        </div>
    )
}


export default FruitList