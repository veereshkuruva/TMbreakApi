import React from 'react'
import spinner from './images/spinner.png'
const Spinner = () => {
  return (
    <div>
        <img src={spinner} alt='loading..' style={{width:"200px",margin:"auto", display:"block"}}/>
    </div>
  )
}

export default Spinner