import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{margin:"100px"}}>
         <img  src={loading} alt="loading"></img>
      </div>
    )
  }
}

export default Spinner
