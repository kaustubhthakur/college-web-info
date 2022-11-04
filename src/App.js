import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Subject from './pages/Subject'
import Overview from './pages/Overview'
import Chemical from './branches/Chemical'
import ComputerScience from './branches/ComputerScience'
import Electronics from './branches/Electronics'
import Instrumentation from './branches/Instrumentation'
import InformationTechnology from './branches/InformationTechnology'
import Mechanical from './branches/Mechanical'
import Navbar from './components/Navbar'
import About from './pages/About'
import Cayley from './components/C-pages/semester3/mathematics/matrix/Cayley'
import Mathematics from './sub-pages/semester3/Mathematics'
import Oops from './sub-pages/semester3/Oops'
import Abstraction from './components/T-pages/semester3/oops/Abstraction'
import Inheritance from './components/T-pages/semester3/oops/Inheritance'
import Matrix from './components/T-pages/semester3/mathematics/Matrix'
import EigensValue from './components/C-pages/semester3/mathematics/matrix/EigensValue'
import Login from './pages/Login'
const App = () => {
  
  return (
    <BrowserRouter>
   <Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='*' element={<Error/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/subject' element={<Subject/>} />
  <Route path='/overview' element={<Overview/>} />
  <Route path='/overview/chemical' element={<Chemical/>} />
  <Route path='/overview/computerscience' element={<ComputerScience/>} />
  <Route path='/overview/electronics' element={<Electronics/>} />
  <Route path='/overview/instrumentation' element={<Instrumentation/>} />
  <Route path='/overview/informationtechnology' element={<InformationTechnology/>} />
  <Route path='/overview/mechanical' element={<Mechanical/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/subject/oops' element={<Oops/>} />
  <Route path='/subject/mathematics/matrix' element={<Matrix/>} />
  <Route path='/subject/mathematics' element={<Mathematics/>} />
  <Route path='/subject/mathematics/matrix/cayley' element={<Cayley/>} />
<Route path='/subject/mathematics/matrix/eigensvalue' element={<EigensValue/>} />
<Route path='/subject/mathematics/matrix/cayley' element={<Cayley/>} />
<Route path='/subject/oops/inheritance' element={<Inheritance/>} />
<Route path='/subject/oops/abstraction' element={<Abstraction/>} />
</Routes>
</BrowserRouter>

  )
}

export default App