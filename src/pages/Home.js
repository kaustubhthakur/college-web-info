import React from 'react'
import './App.css'
import chem from '../images/chem.png'
import computer from '../images/computer.png'
import electronics from '../images/electronics.png'
import instru from '../images/instru.png'
import it from '../images/info.png'
import mechanical from '../images/mechanical.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
<div className='all'>
<section className='section-1'>  
 <Link  to='/overview/chemical' > <img className='section-1' src={chem} alt="chemical" /></Link>
</section>
<br/>
    <section className="section-2">
     
    <Link to='/overview/computerscience'><img className='section-2'src={computer} alt="computer" /></Link>

    </section>
    <br/>
    <section className='section-3'>  
 <Link  to='/overview/electronics' > <img className='section-3' src={electronics} alt="electronics" /></Link>
</section>
<br/>
    <section className="section-4">
     
    <Link to='/overview/instrumentation'><img className='section-2'src={instru} alt="instru" /></Link>

    </section>
    <br/>
    <section className='section-5'>  
 <Link  to='/overview/informationtechnology' > <img className='section-1' src={it} alt="it" /></Link>
</section>
<br/>
    <section className="section-6">
     
    <Link to='/overview/mechanical'><img className='section-2'src={mechanical} alt="mechnaical" /></Link>

    </section>

  </div>


    )
}

export default Home