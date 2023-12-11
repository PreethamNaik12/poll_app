import { Box } from '@mui/material';
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

            <PollFrom />

        </Box>
    )
}



export default Home;