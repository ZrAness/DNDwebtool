import './App.css'
import './index.css'
import Combat from './pages/Combat'
import CLasses from './pages/Classes'
import Species from './pages/Species'
import Home from './pages/Home'
import Header from './components/Header'
import {Route , Routes} from "react-router-dom"
import Footer from './components/Footer'
function App() {
  return (
    <>
    <div className='APP'>
    <Header/>
    <div className='main'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Combat' element={<Combat/>}/>
      <Route path='/Classes' element={<CLasses/>}/>
      <Route path='/Species' element={<Species/>}/>
      </Routes>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default App
