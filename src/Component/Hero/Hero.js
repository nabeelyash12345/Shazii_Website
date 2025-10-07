// // import * as React from 'react';
// // import { styled } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Paper from '@mui/material/Paper';
// // import Grid from '@mui/material/Unstable_Grid2';
// // import { Typography, Button } from '@mui/material';




// // import'./Hero.css';
// // import mian from'../../Assets/main.png'
// // import MainCard from '../ItemCard/ItemCard';
// // import Navabr from './../Navbar/Nav';
// // import Footer from './../Footer/Footer'

// // const Item = styled(Paper)(({ theme }) => ({
// //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// //   ...theme.typography.body2,
// //   padding: theme.spacing(1),
// //   textAlign: 'center',
// //   color: theme.palette.text.secondary,
// // }));
// // function Hero() {
// //   return (
// //    <>
// //       <Navabr />
// //        <Box sx={{ flexGrow: 1 }}>
// //       <Grid container spacing={2} >
// //         <Grid xs={12} sm={12} md={12} lg={6} className="gird-container">
// //           <Item className='main-container'>
// //            <div style={{margin: 'auto 70px'}}  className="gird-container">
// //               <Typography className="main-heading" variant='h3' style={{ fontWeight: "300", textAlign: "left", marginTop: '20' }}>
// //                 A Digital and Daily life
// //                 using Product Agency
// //               </Typography>
// //               <Typography variant="body1"className='main-para' paragraph sx={{ textAlign: 'left', margin: '30px auto' }}>
// //                 Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online  business services.
// //               </Typography>
// //             <div style={{ textAlign: 'left' }}>
// //                 <Button className='btn_main'>
// //                     Click Me
// //                 </Button>
// //             </div>
// //            </div>
// //           </Item>
// //         </Grid>
// //         <Grid xs={12} sm={12} md={12} lg={6}>
// //          <img src={mian} alt='img' className='responsivee-img' />
// //         </Grid>
        
// //       </Grid>
// //     </Box>
// //    <Box>
// //       <div className='Card_container'>
// //         <MainCard />
// //       </div>
// //       <div>
// //         <Footer />
// //       </div>
// //    </Box>
// //    </>


// //   );
// // }

// // export default Hero;

// import * as React from 'react';
// import { Box } from '@mui/material';

// import './Hero.css';
// import Navabr from './../Navbar/Nav';
// import Footer from './../Footer/Footer';
// import MainCard from '../ItemCard/ItemCard';

// import headerImg from '../../Assets/header.png';

// function Hero() {
//   return (
//     <>
//         <nav className="navbar">
//       {/* Logo */}
//       <div className="navbar_logo">
//         <img src={logo} alt="Shazii Enterprises Logo" />
//       </div>

//       {/* Hamburger Icon */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <span className={isOpen ? "line open" : "line"}></span>
//         <span className={isOpen ? "line open" : "line"}></span>
//         <span className={isOpen ? "line open" : "line"}></span>
//       </div>

//       {/* Navigation Links */}
//       <ul className={`navbar_links ${isOpen ? "open" : ""}`}>
//         <li>
//           <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
//         </li>
//         <li>
//           <NavLink to="/showroom" onClick={toggleMenu}>Showroom</NavLink>
//         </li>
//         <li>
//           <NavLink to="/about" onClick={toggleMenu}>About Us</NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink>
//         </li>
//       </ul>
//     </nav>
      
//       {/* Hero Section */}
//       <Box sx={{ flexGrow: 1 }}>
//         <div className="hero-container">
//           <img src={headerImg} alt="Shazii Enterprises Hero" className="hero-image" />
//         </div>
//       </Box>

//       {/* Below Hero Sections */}
//       <Box>
//         <div className="Card_container">
//           <MainCard />
//         </div>
//         <div>
//           <Footer />
//         </div>
//       </Box>
//     </>
//   );
// }

// export default Hero;
import React, { useState } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import haaderImg from '../../Assets/header.png';
import './Hero.css'; // Import CSS

import MainCard from '../ItemCard/ItemCard';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo-container">
          <div className="logo-icon">SE</div>
          <span className="logo-text">SHAZII ENTERPRISES</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links-desktop">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/services" className="nav-link">Services</a></li>
          <li><a href="/showroom" className="nav-link">Showroom</a></li>
          <li><a href="/about" className="nav-link">About Us</a></li>
          <li><a href="/contact" className="nav-link">Contact Us</a></li>
        </ul>

        {/* Hamburger */}
        <button 
          onClick={toggleMenu}
          className="hamburger-button"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} color="#333" /> : <Menu size={28} color="#333" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="/" onClick={toggleMenu} className="mobile-link">Home</a>
          <a href="/services" onClick={toggleMenu} className="mobile-link">Services</a>
          <a href="/showroom" onClick={toggleMenu} className="mobile-link">Showroom</a>
          <a href="/about" onClick={toggleMenu} className="mobile-link">About Us</a>
          <a href="/contact" onClick={toggleMenu} className="mobile-link">Contact Us</a>
        </div>
      )}

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">SHAZII ENTERPRISES</h1>
            <p className="hero-subtitle">Our Business is to bring smile on your face</p>

            <div className="social-container">
              <a href="#facebook" className="social-icon"><Facebook size={20} /></a>
              <a href="#twitter" className="social-icon"><Twitter size={20} /></a>
              <a href="#instagram" className="social-icon"><Instagram size={20} /></a>
              <a href="#youtube" className="social-icon"><Youtube size={20} /></a>
              <a href="#telegram" className="social-icon"><Send size={20} /></a>
            </div>
          </div>

          <div className="hero-image-container">
            <img src={haaderImg} alt="Shazii Enterprises Team" className="hero-image" />
          </div>
        </div>
      </div>

      {/* Placeholder sections */}
      <div className="content-section">
          <div>
            <MainCard />
          </div>
        <div className="placeholder"><p>Footer Component Section</p></div>
      </div>
    </>
  );
}

export default Hero;
