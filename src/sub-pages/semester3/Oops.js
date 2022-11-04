import React from 'react'
import { Link } from 'react-router-dom'
const Oops = () => {
  return (
    <div className='entire' >
    <h1 className='math'>Concepts</h1> <br/>
    <Link to="/subject/oops/inheritance" >
     
     <h1 className='matrix'>Inheritance</h1>
    </Link><br/>
    <Link to='/subject/oops/abstraction'  >
    <h1 className="matrix">Abstraction</h1></Link>
    </div>
  )
}

export default Oops