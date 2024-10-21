import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <div style={{paddingLeft:'30px' , backgroundColor:"pink"}} className="container my-5 row ms-4">
      <div className="col-lg-4">
      <Link style={{textDecoration:'none', color:'black', fontSize:'20px', fontWeight:'600'}} to={'/'}>
         
        {' '}
        <span style={{color:'red',fontFamily:' "Dancing Script", cursive'}}>FLOR</span>ELLO
        </Link>
        <p className='mt-3' style={{fontWeight:'600', color:'black',fontSize:'15px'}}>Designed and built with all the love in the world by the Luminar team with the help of our contributers.</p>
        
      </div>
      <div className="col-lg-2 d-flex flex-column">
        <h5 style={{fontWeight:'600',fontSize:'20px'}}>Links</h5>
        <Link style={{textDecoration:'none', color:'black', fontWeight:'600',fontSize:'15px'}} to={'/'}>Home</Link>
        <Link style={{textDecoration:'none', color:'black', fontWeight:'600',fontSize:'15px'}} to={'/home'}>Gallery</Link>
        <Link style={{textDecoration:'none', color:'black',  fontWeight:'600',fontSize:'15px'}} to={'/history'}>Shop</Link>
      </div>
      <div className="col-lg-2 d-flex flex-column">
        <h5 style={{fontWeight:'600',fontSize:'20px'}}>About</h5>
        <Link style={{textDecoration:'none', color:'black', fontWeight:'600',fontSize:'15px'}}>Connect With Newsletter</Link>
        <Link style={{textDecoration:'none', color:'black', fontWeight:'600',fontSize:'15px'}}>Contact</Link>
        <Link style={{textDecoration:'none', color:'black',  fontWeight:'600',fontSize:'15px'}}>Services</Link>

       
      </div>
      <div className="col-lg-4">
          <h5 style={{fontWeight:'600',fontSize:'20px'}}>Contact Us</h5>
          <input style={{height:'35px'}} className='border rounded ' type="text" placeholder='Enter your email here' />
          <i style={{width:'30px', height:'30px', paddingTop:'10px', paddingLeft:'10px', marginLeft:'20px', borderRadius:'10px', backgroundColor:'deeppink'}} className="fa-solid fa-arrow-right "></i>
          <div style={{color:'white', marginTop:'20px', marginLeft:'-20px'}} className="d-flex justify-content-evenly ">
         
          <a href="" target='_blank' style={{textDecoration:'none', color:'black',fontSize:'20px'}}><i className="fa-brands fa-twitter"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'black',fontSize:'20px'}}><i className="fa-brands fa-instagram"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'black',fontSize:'20px'}}><i className="fa-brands fa-facebook"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'black',fontSize:'20px'}}><i className="fa-brands fa-linkedin"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'black',fontSize:'20px'}}><i className="fa-brands fa-github"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'black',fontSize:'20px'}}><i className="fa-brands fa-phone"></i></a>
 
        
          </div>
       
      </div>

    </div>
    </>
  )
}

export default Footer