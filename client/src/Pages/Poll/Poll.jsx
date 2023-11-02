import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react'
import { PollTopText, PollFrom } from '../../Components';

const Home = () => {
    return (
        <Box sx={{
            minHeight: '70vh',
            marginTop: { xs: '1em', md: '2em' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <PollTopText />
            
            <PollFrom />

        </Box>
    )
}



export default Home;