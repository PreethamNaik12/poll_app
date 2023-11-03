import { Box, Typography } from "@mui/material";
import React from "react";
export function AboutInfo({
  logo
}) {
  return <><Box sx={{
    width: {
      xs: '100%',
      md: '60%'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    py: {
      md: '2em'
    }
  }}>
    <Typography variant="h1" sx={{
      textAlign: 'left',
      color: 'whitesmoke'
    }}>About</Typography>
    <Typography variant="h5" sx={{
      pt: {
        xs: '1em',
        md: '0'
      }
    }}>
      At Poll App, we are driven by the belief that meaningful conversations can change the world. Founded on the principles of inclusivity, openness, and respect, our platform is a digital haven where individuals from diverse backgrounds converge to share their thoughts and engage in insightful discussions. We understand the power of dialogue in fostering empathy, breaking down barriers, and inspiring positive change. Our mission is to create a space where every voice is valued, where ideas flow freely, and where collective wisdom leads to innovative solutions. With a passionate team dedicated to nurturing this global conversation, we invite you to be a part of our community. Together, let's amplify voices, challenge perspectives, and transform conversations into actions that shape a better, more connected future.
    </Typography>
  </Box>
    <Box sx={{
      width: {
        xs: '100%',
        md: '30%'
      },
      display: {
        xs: 'none',
        md: 'flex'
      },
      justifyContent: 'center'
    }}>
      <img src={logo} alt="Logo" width='100%' />
    </Box></>;
}
