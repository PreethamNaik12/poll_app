import React from "react";
import { Box, Container, Typography } from "@mui/material";


export function HomeTopText() {
  return (
    <Box>
      <Typography variant="h1" sx={{
        textAlign: { xs: 'center', md: 'center' },
        fontSize: { xs: '40px',  md: '65px' },
        fontWeight: 'bold',
      }}>
        Explore the Unexpected: Where Every Performance Sparks Awe!
      </Typography>
      <Container maxWidth='lg'>
        <Typography variant="h5" sx={{
          textAlign: {xs: 'left', md: 'center' },
          color: 'gray',
          marginTop: '1em'
        }}>
          Dive into a world where creativity knows no bounds. Incident Festival invites you to witness a diverse array of performances, from electrifying dance and soulful music to hilarious comedy and captivating theatre. Join us in celebrating the limitless power of artistry, where every moment is an extraordinary experience waiting to happen.
        </Typography>
      </Container>
    </Box>
  )
}

export default HomeTopText;
