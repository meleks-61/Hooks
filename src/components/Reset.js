import React from 'react'

const Reset = React.memo(({reset}) => {
    console.log("reset is rendering")
  return (
    <div>
       <button onClick={reset}>Reset</button>
    </div>
  )
})

export default Reset
