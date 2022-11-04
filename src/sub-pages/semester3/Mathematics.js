import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const Mathematics = () => {
  return (
    <div className='entire' >
      <h1 className='math'>Topics</h1> <br/>
      <Link to="/subject/mathematics/matrix" >
       
       <h1 className='matrix'>Matrix</h1>
      </Link><br/>
    
    </div>
  )
}

export default Mathematics