import React from 'react'

const Newsletter = () => {

    
  const myStyle1 = {

    backgroundImage: `url(https://eventstemsfloral.com/wp-content/uploads/2023/01/1CE39BC0-8787-4A5E-9261-E47705B3773D-1-1024x988.jpeg)`,

    /* Set a specific height */
    height:'500px',

    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    // backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    // opacity: "0.8",

  };

  return (


    <div style={{ paddingTop: "105px",width:"100%"}}>
      <div id='top' className="parallax1" style={myStyle1}>
        <div className="d-flex flex-column  align-items-center " style={{ height: "100vh",paddingTop:"11%" }}>
          <div data-aos="fade-right"><h1 className='text-white fw-bolder mb-5 text-center' style={{ fontSize: "65px" }}>Join The<span className='text-warning'> Colorful Bunch!</span> </h1></div>
          <div data-aos="fade-left"><input style={{width:'300px',height:'50px', fontSize:'20px'}}  className='border rounded' type="text"  placeholder='Email Address'/></div>
          <div data-aos="fade-up"><a href="" className="btn py-2 mt-3 px-3 border fw-bolder text-black bg-warning">SUBSCRIBE</a></div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

