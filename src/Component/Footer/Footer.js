import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import logo from '../../Assets/logo.png'


import './Footer.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Footer() {
  return (
    <div>
        <div className='foooter_container'>
            <Box sx={{ flexGrow: 4, marginTop:"30px" }}>
                <Grid container spacing={4}>
                    <Grid item lg={4} sm={4} xs={12} md={4}>
                      <div className='footer_sec'>
                        <img className='footer_logo' src={logo}/>
                        <div className='footer_para'>
                            <p>Leading digital agency with solid <br />design and development expertise.<br /> We build readymade websites, mobile <br />applications, and elaborate online <br/> business services.</p>
                        </div>
                        <div className='social_media'>
                            <a href=''> <FacebookIcon className='footer-icon'/></a>
                            <a href=''> <TwitterIcon className='footer-icon'/></a>
                                <a href=''><LinkedInIcon className='footer-icon'/></a>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={12} md={2}>
                        <h2 className='footer_heading'>What We Do</h2>
                        <ul>
                            <a href=''><li>App Design</li></a>
                           <a href=''> <li>Social Media Manage</li></a>
                            <a href=''><li>Market Analysis Project</li></a>
                        </ul>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={12} md={2}>
                        <h2 className='footer_heading'>Company</h2>
                        <ul>
                           <a href=''> <li>About Us</li></a>
                           <a href=''> <li>Career</li></a>
                            <a href=''><li>Become Investor</li></a>
                        </ul>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={12} md={2}>
                    <h2 className='footer_heading'>Support</h2>
                        <ul>
                            <a href=''><li>FAQ</li></a>
                            <a href=''><li>Policy</li></a>
                            <a href=''><li>Business</li></a>
                        </ul>
                    </Grid>
                    <Grid item lg={2} sm={2} xs={12} md={2}>
                    <h2 className='footer_heading'>Contact</h2>
                        <ul>
                            <a href=''><li>WhatsApp</li></a>
                            <a href=''><li>Support 24/7</li></a>
                        </ul>
                    </Grid>
                    
                </Grid>
            </Box>
        </div>
    </div>
  )
}

export default Footer