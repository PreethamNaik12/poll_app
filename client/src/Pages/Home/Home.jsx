import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react'
import { HomeCTA, HomeTopText } from '../../Components';

const Home = () => {
    return (
        <Box sx={{
            minHeight: '70vh',
            marginTop: { xs: '1em', md: '4em' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <HomeTopText />

            <HomeCTA />

            <Typography variant="h6" color="gray" sx={{mt:'3em'}}>~ Coming Soon</Typography>

        </Box>
    )
}



export default Home;