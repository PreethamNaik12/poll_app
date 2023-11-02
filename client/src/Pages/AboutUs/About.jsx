import { AboutInfo } from '../../Components/AboutUs/AboutInfo';
import { Box, Button } from '@mui/material';
import React from 'react'
import { logo } from '../../assets/images';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const About = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.dark', minHeight: '80vh', p: { xs: '0 1em', md: '0em 2em', xl: '2em' } }}>

            <Box sx={{ display: 'flex', pt: { xs: '2em', xl: '4em' }, justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                <AboutInfo   logo={logo}  />
            </Box>

            <Link to='/'>
                <Button variant="contained" size='large' color='secondary' startIcon={<HomeRoundedIcon />} disableElevation sx={{
                    mt:'1em'
                }}>
                    Home
                </Button>
            </Link>
        </Box>
    )
}

export default About;