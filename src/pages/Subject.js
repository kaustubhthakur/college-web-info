import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const Subject = () => {
  return (
    <div className='subs' >
      <h1 className="subjects" >Subjects</h1>
      <section className='sem1' >
        <h2>Semester 1</h2>
      </section><br/>
      <section className="sem2">
        <h2>Semester 2</h2>
        <ul>
          <li>

          </li>
        </ul>
      </section><br/>
      <section className="sem3">
        <h2>Semester 3</h2><br/>
        <ul className='sub-t'>
        <h2><Link to='/subject/mathematics' >Mathematics</Link></h2><br/>
        <h2><Link to='/subject/oops' >Object-Oriented Programming System</Link></h2><br/>
         
          
        </ul>
      </section><br/>

      <section className="sem-4">
<h2>Semester 4</h2>
      </section><br/>
      <section className="sem-5">
        <h2>Semester 5</h2>
      </section><br/>
      <section className="sem-6">
        <h2>Semester 6</h2>
      </section><br/>
      <section className="sem-7">
        <h2>
          Semester 7</h2>
                </section><br/>
                <section className="sem-8">
                  <h2>Semester 8</h2>
                </section>
    </div>


  )
}

export default Subject
//