import NavBar from './components/NavBar'
import Courses from './components/routes/Courses'
import Home from './components/routes/Home'
import About from './components/routes/About'
import Programs from './components/routes/Programs'
import Contact from './components/routes/Contact'
import './index.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='h-full'>
      <div className='h-full'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/programs' element={<Programs />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
