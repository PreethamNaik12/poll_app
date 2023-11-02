import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HowToVoteIcon, InfoRoundedIcon } from '../../assets/icons'


function CTA() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '2em'
        }}>
            <Link to='/poll'>
                <Button variant="contained"
                    color='primary'
                    disableElevation
                    startIcon={<HowToVoteIcon />}
                    sx={{
                        padding: '.5em 1.5em',
                        fontSize: '0.9em',
                        mr: '2em'
                    }}>
                    Vote Again
                </Button>
            </Link>
            <Link to='/stats'>
                <Button variant="contained"
                    color='whiteBtn'
                    disableElevation
                    startIcon={<InfoRoundedIcon />}
                    sx={{
                        padding: '.5em 1.5em',
                        fontSize: '0.9em'
                    }}>
                    See Stats
                </Button>
            </Link>
        </Box >);
}

export default CTA;