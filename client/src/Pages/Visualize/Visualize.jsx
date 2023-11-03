import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const HomePage = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        // Navigate to the specified route
        navigate(route);
    };

    React.useEffect(() => {//change th edocument title on load
        document.title = `Poll App | Select Visualization Mode✨`;//setting the document title dynamically
    }, []);

    return (
        <Box sx={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <Button variant="contained" size='large' onClick={() => handleClick('/table')} style={{ margin: '10px', p:'1em' }}>
                Table
            </Button>
            <Button variant="contained" size='large' onClick={() => handleClick('/chartb')} style={{ margin: '10px' }}>
                Bar Graph
            </Button>
            <Button variant="contained" size='large' onClick={() => handleClick('/chartl')} style={{ margin: '10px' }}>
                Line Graph
            </Button>
        </Box>
    );
};

export default HomePage;
