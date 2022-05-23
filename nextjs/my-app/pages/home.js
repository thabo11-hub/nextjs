import React, { useState } from 'react'

const [count, setCount] = useState(0)

function home(props) {
    let myprops = props;
    
  return (
      <>
        <div>home</div>

        <button id="btn" onclick={() => {increment(1);}}>
            increment
        </button>
      </>
  )
}

export default home