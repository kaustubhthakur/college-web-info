import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Overview = () => {
  return (
    <div className='overview' >

      <h1 className="branches">
        Branches
      </h1>


      <ul className='branch' >
        <li className='chemical' >
          <li>
            <h4> <Link to='/overview/chemical' classname='site' >Chemical</Link></h4>
          </li>

        </li>
        <li>

          <Link to='/overview/computerscience' classname='site' >Computer-Science</Link>
        </li>
        <li>

          <Link to='/overview/electronics' classname='site' >Electronics&Telecomunication</Link>
        </li>
        <li>

          <Link to='/overview/instrumentation' classname='site' >Instrumentation</Link>
        </li>
        <li>

          <Link to='/overview/informationtechnology' classname='site' >Information-Technology</Link>
        </li>
        <li>

          <Link to='/overview/mechanical' classname='site' >Mechanical</Link>
        </li>
      </ul>
    </div>
  )
}

export default Overview