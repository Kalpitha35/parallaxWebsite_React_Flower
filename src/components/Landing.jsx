import React from 'react'
import Carouselslide from './Carouselslide'
import Parallaxslide from './Parallaxslide'
import Slideshow from './Slideshow'
import Newsletter from './Newsletter'

const Landing = () => {
  return (
   <>
   <div id='home' style={{ paddingTop:'100px', position:'absolute', top:'90px',zIndex:'100',marginLeft:'400px', width:'500px'}}>
      <h1 style={{fontFamily:' "Great Vibes", cursive', fontSize:'100px',color:"black"}} className='carousel-head  fw-bolder text-center'>Send flowers like you mean it</h1> <br />
      <p className='text-dark fw-bolder text-center' style={{fontFamily:'"Playfair Display", serif',fontSize:'20px'}}>Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special curses a sit amet mauris.</p>
   </div>
   <Carouselslide/>
   <Parallaxslide/>
   <Slideshow/>
   <Newsletter/>

   </>
  )
}

export default Landing