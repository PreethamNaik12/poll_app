import { Box, Typography } from '@mui/material';
import React from 'react'
import { HomeCTA } from '../../Components';

const Home = () => {

    React.useEffect(() => {//change th edocument title on load
        document.title = `Poll App | Voted Succesfully🫡`;//setting the document title dynamically
    }, []);

    return (
        <Box sx={{
            minHeight: '70vh',
            marginTop: { xs: '1em', md: '0em' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center'
        }}>
            <Box>
                <Typography variant="h2" sx={{
                    textAlign: { xs: 'center', md: 'center' },
                    fontSize: { xs: '40px', md: '65px' },
                    fontWeight: 'bold',
                }}>
                    Success! Your Vote Has Been Casted. Thanks for Making Your Mark and Shaping the Future!🗳️✨
                </Typography>
            </Box>
            <HomeCTA />

            <Typography variant="h6" color="gray" sx={{ mt: '3em' }}>~ Visualize the Vote Share</Typography>

        </Box>
    )
}



export default Home;