import { Box, Typography } from '@mui/material';
import React from 'react'
import { PollTopText, PollFrom } from '../../Components';

const Home = () => {

    React.useEffect(() => {//change th edocument title on load
        document.title = `Poll App | Cast Your Vote✅`;//setting the document title dynamically
    }, []);

    return (
        <Box sx={{
            minHeight: '70vh',
            marginTop: { xs: '1em', md: '2em' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <PollTopText />
            
            <Typography variant="body1" sx={{ bgcolor: '#bf7d7a', p: 2, borderRadius: '10px', mt: '2em' }}>Works (save to db) only in local env for now. This a Front-End deployment</Typography>

            <PollFrom />

        </Box>
    )
}



export default Home;