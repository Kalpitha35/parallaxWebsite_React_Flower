import React from 'react'

// import Slideshow from '../components/Slideshow'


const Parallaxslide = () => {

  const myStyle1 = {

    backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/032/962/621/large_2x/pink-rose-with-white-flowers-and-pearls-on-a-pink-background-ai-generated-free-photo.jpg)`,

    /* Set a specific height */
    minHeight: "700px",

    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    // backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    // opacity: "0.8",

  };

  const myStyle2 = {
     backgroundImage: `url(https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww)`,
  
    /* Set a specific height */
    minHeight: "700px",

    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    // backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    opacity: "0.9"
  };
  return (
    <>
      <div className='parallax-div' style={{ paddingTop: "0px", width: "100%" }}>
        <div id='top' className="parallax1" style={myStyle1}>
          <div className="d-flex flex-column  align-items-center " style={{ height: "100vh", paddingTop: "11%" }}>
            {/* <div data-aos="fade-right"><h1 className='text-white fw-bolder mb-5 text-center' style={{ fontSize: "65px" }}>YOUR PERFECT <span className='text-warning'>EVENT PARTNER</span> </h1></div>
          <div data-aos="fade-left"><p className='fw-bolder text-white fs-4 mb-5 text-center' style={{marginTop:"15%"}}>CREATIVE CONCEPTS FOR MANAGING YOUR DREAM EVENT.</p></div>
          <div data-aos="fade-up"><a href="" className="btn py-2 px-3 border fw-bolder text-white">READ MORE</a></div>
        */}
        <div className="container text-center mt-5">
            <div className="row">
            <div className="col">
                <img width={'70px'}  height={'70px'} src="https://img.freepik.com/premium-vector/flower-icon-vector-logo-black-white_893610-836.jpg" alt="" />
                <h3 style={{fontSize:'30px',fontFamily:'"Parisienne", serif', color:'red'}}>Ready To Be Impressed</h3>
                <span style={{fontSize:'20px',fontFamily:'"Parisienne", serif',fontWeight:'600'}}>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</span>
              </div>
              <div className="col">
              <img width={'70px'}  height={'70px'} src="https://img.freepik.com/premium-vector/flower-icon-vector-logo-black-white_893610-848.jpg" alt="" />

              <h3 style={{fontSize:'30px',fontFamily:'"Parisienne", serif', color:'red'}}>Our wonderful arrangements</h3>
              <span style={{fontSize:'20px',fontFamily:'"Parisienne", serif',fontWeight:'600'}}>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</span>
              </div>
              <div className="col">
              <img width={'70px'}  height={'70px'} src="https://thumbs.dreamstime.com/z/yoga-lotus-icon-black-lotus-flower-icon-isolated-white-background-black-lotus-flower-icon-isolated-white-background-simple-171861402.jpg" alt="" />

                <h3 style={{fontSize:'30px',fontFamily:'"Parisienne", serif', color:'red'}}>The Art of Fresher Flowers</h3>
              <span style={{fontSize:'20px',fontFamily:'"Parisienne", serif',fontWeight:'600'}}>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</span>
              </div>
            </div>
          </div>
          </div>
          

          {/* <Slideshow/>  */}
          {/* <a href="#top" className='bg-warning text-white' style={{ float: "right", marginRight: "50px", borderRadius: "50%", marginTop: "-4rem", }}><i class="fa-solid fa-angle-up p-3  "></i></a> */}
          <div className="parallax2" style={myStyle2}>
            <div className="d-flex flex-column justify-content-center align-items-center " style={{ height: "100vh" }}>
              <div data-aos="fade-up" className="bouquetTypes d-flex flex-column justify-content-center">
                <h2 className='text-center fw-bolder mt-5' style={{fontSize:'50px',fontFamily:'"Parisienne", serif'}}>Wonderful gift</h2>
                <h1 className='text-center' style={{fontSize:'40px',fontFamily:'"Playfair Display", serif'}}>Our wonderful arrangements</h1>
                <div className="images d-flex flex-row justify-content-evenly">
                 <div className='Bouquet_Div d-flex flex-column'>
                   <img className='bouquet' width={'300px'} height={'400px'} src="https://i.etsystatic.com/12720033/r/il/0e741f/4329844758/il_fullxfull.4329844758_i6dz.jpg" alt="" />
                   <h4 className='text-center fw-bolder'>PEARL ROSES</h4>
                   <span className='text-center fw-bolder'>$ 200</span>

                   <div className='hoverDiv'>
                   <div data-aos="fade-up"><a href="" className=" cart-btn btn py-2 px-3 border fw-bolder text-dark">ADD TO CART</a></div>
                   </div>
                 </div>
                  <div className= ' Bouquet_Div d-flex flex-column'>
                    <img className='bouquet' width={'300px'} height={'400px'}  src="https://djflowers.ae/assets/images/blog/types-of-bridal-bouquets.jpg" alt="" />
                    <h4 className='text-center fw-bolder'>RUSTIC DECOR</h4>
                   <span className='text-center fw-bolder'>$ 200</span>

                   <div className='hoverDiv'>
                   <div data-aos="fade-up"><a href="" className=" cart-btn btn py-2 px-3 border fw-bolder text-dark">ADD TO CART</a></div>
                   </div>
                  </div>
                 <div className=' Bouquet_Div d-flex flex-column'> 
                    <img className='bouquet' width={'300px'} height={'400px'}  src="https://m.media-amazon.com/images/I/71Qfx+DlAbL.jpg" alt="" />
                    <h4 className='text-center fw-bolder'>ORANGE SILK</h4>
                   <span className='text-center fw-bolder'>$ 200</span>

                   <div className='hoverDiv'>
                   <div data-aos="fade-up"><a href="" className=" cart-btn btn py-2 px-3 border fw-bolder text-dark">ADD TO CART</a></div>
                   </div>
                  </div>

                   <div className='Bouquet_Div d-flex flex-column'>
                     <img className='bouquet' width={'300px'} height={'400px'}  src="https://i0.wp.com/www.weddingforward.com/wp-content/uploads/2022/03/fall-wedding-bouquets-moody-weddng-bouquets-with-dark-greens-flowerna.ru_.jpg?fit=1080%2C1350&quality=70&ssl=1" alt="" />
                     <h4 className='text-center fw-bolder'>DARK FOREST</h4>
                   <span className='text-center fw-bolder'>$ 200</span>

                   <div className='hoverDiv'>
                   <div data-aos="fade-up"><a href="" className=" cart-btn btn py-2 px-3 border fw-bolder text-dark">ADD TO CART</a></div>
                   </div>
                    </div>
                </div>
              </div>

              {/* <div data-aos="fade-right"><h1 className='text-white fw-bolder mb-5 text-center' style={{ fontSize: "65px" }}>WE THE <span className='text-warning'>EVENT PEOPLE</span> </h1></div>
              <div data-aos="fade-left"><p className='fw-bolder text-white fs-4 mb-5  '>BEST SOLUTION FOR MANAGING YOUR DREAM EVENT.</p></div> */}
              {/* <div data-aos="fade-up"><a href="" className="btn py-2 px-3 border fw-bolder text-white">READ MORE</a></div> */}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Parallaxslide