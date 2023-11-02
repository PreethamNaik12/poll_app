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
    }}>About Us</Typography>
    <Typography variant="h5" sx={{
      pt: {
        xs: '1em',
        md: '0'
      }
    }}>
      What started as a small fest with a meagre budget in the 80s now stands as one of the best college festivals in India. Incident is a blend of cultural, social, and musical events that'll surely give the attendees an ecstatic experience. Incident 2023's unique theme, "A Tale of Bards and Knights", is adapted to celebrate this 3-day extravaganza with medieval grandeur.
    </Typography>
    <Typography variant="h5" sx={{
      pt: {
        xs: '1em',
        md: '0'
      }
    }}>
      Join us at NITK, the shoreside institute, while we become 'bards' to sing the hymn of this festive splendour. We, the knights of this realm called "Incident" are committed to giving you all a cherishable and splendid experience.
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
