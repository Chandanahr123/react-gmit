import React,{useState} from 'react'
import './Home.css'

function Home() {
    const [count,setCount]=useState(0);
  return (
    <div><div>Home</div><br/>
    <p> Count:{count} </p>
    <button onClick={()=>setCount(count+1)}>
        Increase Counter
    </button>
    </div>
  )
}

export default Home