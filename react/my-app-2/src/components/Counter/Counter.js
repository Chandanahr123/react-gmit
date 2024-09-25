import React from 'react'
import './Counter.css'

function Counter({count,setCount}){
    return (
        <div>Counter
            <button onClick={() => setCount(count + 1)}>
                Increase Counter
            </button>
        </div>

    )
}

export default Counter