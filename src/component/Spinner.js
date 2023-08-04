import React  from 'react'
import loading from './loading.gif'
const Spinner=()=>{

    return (
      <div className='text-center' style={{margin:"100px"}}>
         <img  src={loading} alt="loading"></img>
      </div>
    )

}

export default Spinner
