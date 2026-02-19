import React from 'react'

const conrend = () => {
    // const number = 5;
    // return (
    //     <h2>
    //         {number ===0 ? 'Number is zero' : number > 0 ? 'Number is positive' : 'Number is negative'}
    //     </h2>
    // )

    const number = 10;
    return (
        <h2>
            {number>0 && 'Number is positive'}
            {number<0 && 'Number is negative'}
            {number==0 && 'Number is Zero'}

        </h2>
    )


    
}

export default conrend