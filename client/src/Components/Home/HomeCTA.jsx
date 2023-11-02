import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UnsubscribeRoundedIcon, InfoRoundedIcon } from '../../assets/icons'


function CTA() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt:'2em'
        }}>
            <Button variant="contained" color='primary' disableElevation startIcon={<UnsubscribeRoundedIcon />} sx={{
                padding: '.5em 1.5em',
                fontSize: '0.9em',
                mr: '2em'
            }}>
                Subscribe
            </Button>
            <Link to='/about'>
                <Button variant="contained" color='whiteBtn' disableElevation startIcon={<InfoRoundedIcon />} sx={{
                    padding: '.5em 1.5em',
                    fontSize: '0.9em'
                }}>
                    About Us
                </Button>
            </Link>
        </Box>);
}

export default CTA;