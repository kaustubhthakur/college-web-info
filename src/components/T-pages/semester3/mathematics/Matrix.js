import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const Matrix = () => {
  return (
    <div className='entire' >
        <h1 className='entire-all' >Concepts</h1><br/>
      <Link to='/subject/mathematics/matrix/eigensvalue'><h2>EigenValue and EigenVectors</h2></Link><br/>
      <Link to='/subject/mathematics/matrix/cayley' ><h2>Cayley-Halmilton Theorem</h2></Link><br/>
    </div>
  )
}

export default Matrix
