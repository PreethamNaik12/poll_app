import React from "react";
import { Box, Container, Typography } from "@mui/material";


export function HomeTopText() {
  return (
    <Box>
      <Typography variant="h1" sx={{
        textAlign: { xs: 'center', md: 'center' },
        fontSize: { xs: '40px', md: '65px' },
        fontWeight: 'bold',
      }}>
        Welcome to Poll App – Your Hub for Public Opinion! Engage, Explore, and Empower with our Interactive Polls.
      </Typography>
      <Container maxWidth='lg'>
        <Typography variant="h5" sx={{
          textAlign: { xs: 'left', md: 'center' },
          color: 'gray',
          marginTop: '1em'
        }}>
          Explore the power of collective insights with Poll App! Dive into a world of meaningful discussions and diverse perspectives. Our user-friendly platform empowers you to create, participate, and analyze polls effortlessly. Gain valuable insights into public sentiments, spark enlightening conversations, and contribute to a community-driven dialogue. Join us in shaping a more informed and connected world, one poll at a time!
        </Typography>
      </Container>
    </Box>
  )
}

export default HomeTopText;
