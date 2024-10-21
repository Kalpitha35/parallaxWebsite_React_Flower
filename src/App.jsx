
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Shop from './assets/pages/Shop'
import Carouselslide from './components/Carouselslide'
import Footer from './components/Footer'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Parallaxslide from './components/Parallaxslide'
import Slideshow from './components/Slideshow'
import Landing from './components/Landing'


function App() {

  
  return (
    <>
    <Header/>
   
        
   
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/shop' element={<Shop/>} />
      <Route path='/' element={<Carouselslide/>} />
      // <Route path='/' element={<Parallaxslide/>} />
      // <Route path='/' element={<Slideshow/>} />
      // <Route path='/' element={<Newsletter/>} />
      {/* <Route path='/shop' element={<Shop/>} /> */}

      
    </Routes>
    <Footer/>

</>  
  )
}

export default App
