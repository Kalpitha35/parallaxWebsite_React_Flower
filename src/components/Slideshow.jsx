import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import { EffectCoverflow } from 'swiper';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Slideshow = () => {
  return (
   
    <div className="container">
      <h1 className="heading"style={{fontSize:'50px',fontFamily:'"Parisienne", serif', color:'black'}}>Our Flower Collections</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img  src='https://images5.alphacoders.com/433/433121.jpg' alt="slide_image" />
          <Link className='border rounded p-2 mt-3' to={'/shop'} style={{marginLeft:'150px',textDecoration:'none', color:'white', fontSize:'15px',fontWeight:'600', backgroundColor:'deeppink'}}>BUY NOW</Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.mos.cms.futurecdn.net/JhYRFDeFNKgUsjkT2fcu6a.jpg' alt="slide_image" />
          <Link className='border rounded p-2 mt-3' to={'/shop'} style={{marginLeft:'150px',textDecoration:'none', color:'white', fontSize:'15px',fontWeight:'600', backgroundColor:'deeppink'}}>BUY NOW</Link>        </SwiperSlide>
        <SwiperSlide>
          <img src='https://m.media-amazon.com/images/I/51NOLN6SUFL._AC_UF1000,1000_QL80_.jpg' alt="slide_image" />
          <Link className='border rounded p-2 mt-3' to={'/shop'} style={{marginLeft:'150px',textDecoration:'none', color:'white', fontSize:'15px',fontWeight:'600', backgroundColor:'deeppink'}}>BUY NOW</Link>        </SwiperSlide>
        <SwiperSlide>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiNu3bPXXOdiJwCaz41aUmhNiXgLtkuvgnA&s' alt="slide_image" />
          <Link className='border rounded p-2 mt-3' to={'/shop'} style={{marginLeft:'150px',textDecoration:'none', color:'white', fontSize:'15px',fontWeight:'600', backgroundColor:'deeppink'}}>BUY NOW</Link>        </SwiperSlide>
        <SwiperSlide>
          <img src='https://bouqs.com/blog/wp-content/uploads/2023/08/lilly-8094912_1280-min-1080x720.png' alt="slide_image" />
          <Link className='border rounded p-2 mt-3' to={'/shop'} style={{marginLeft:'150px',textDecoration:'none', color:'white', fontSize:'15px',fontWeight:'600', backgroundColor:'deeppink'}}>BUY NOW</Link>        </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.staticmb.com/mbcontent/images/uploads/2024/1/China-Pink-Dianthus-flowers-in-bloom.jpg' alt="slide_image" />
          <Link className='border rounded p-2 mt-3' to={'/shop'} style={{marginLeft:'150px',textDecoration:'none', color:'white', fontSize:'15px',fontWeight:'600', backgroundColor:'deeppink'}}>BUY NOW</Link>        </SwiperSlide>
        <SwiperSlide>
          <img src='https://lirp.cdn-website.com/3dd6aa88/dms3rep/multi/opt/guide+blog-1920w.jpg' alt="slide_image" />
          <Link className='border rounded p-2 mt-3' to={'/shop'} style={{marginLeft:'150px',textDecoration:'none', color:'white', fontSize:'15px',fontWeight:'600', backgroundColor:'deeppink'}}>BUY NOW</Link>        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slideshow