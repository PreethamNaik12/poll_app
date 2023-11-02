import React from "react";
import { Box, Container, Typography } from "@mui/material";


export function PollTopText() {
    return (
        <Box>
            <Typography variant="h2" sx={{
                textAlign: { xs: 'center', md: 'center' },
                fontSize: { xs: '40px', md: '65px' },
                fontWeight: 'bold',
                mb:'1em',
            }}>
                Make Your Voice Count! Cast Your Valuable Vote Here and Shape the Future!🗳️✨
            </Typography>
        </Box>
    )
}

export default PollTopText;
