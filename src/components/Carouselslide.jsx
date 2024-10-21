import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'


const Carouselslide = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);

    };
  return (
   <div className='carouselSlide'>
     
      <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='carouselImage' width={'100%'} src="https://wallpapersmug.com/download/1920x1080/16560b/tulip-flowers-fresh.jpg" alt="" />
      
      </Carousel.Item>
      <Carousel.Item>
        <img  width={'100%'} src="https://images.unsplash.com/photo-1520763185298-1b434c919102?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img  width={'100%'} src="https://s1.1zoom.me/b2246/54/Tulips_Three_3_537450_1920x1080.jpg" alt="" />
      
      </Carousel.Item>
      </Carousel>
   </div>

  )
}

export default Carouselslide