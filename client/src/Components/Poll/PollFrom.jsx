import React, { useState } from 'react'
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { HowToVoteIcon } from '../../assets/icons'
import {VoteSubmitLoader} from '../../Components/'
import { useNavigate } from 'react-router-dom';


const PollFrom = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')//name state
    const [selected, setSelected] = useState();//date state
    
    let footer = selected ? (<Typography variant='h3' sx={{textAlign:'center'}}>You picked <b>{format(selected, 'PP')}</b>.</Typography>) : (<Typography variant='h3' sx={{textAlign:'center'}}>Please pick a day.</Typography>);//render date as it is selected
    
    const [voteChoice, setVoteChoice] = React.useState('');//vote choice state
    const handleChoice = (event) => {
        setVoteChoice(event.target.value);
    };

    const [isVoting, setIsVoting] = useState(false);
    
    const onSubmitVote = async (e) => {
        e.preventDefault();
        setIsVoting(true);
        const submissionDate = format(selected, 'PP');
        try {
            const body = { name, voteChoice, submissionDate };
            const response = await fetch("http://localhost:5000/polls", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            // console.log(JSON.stringify(body));
            // console.log(response);
            setIsVoting(false);
            navigate('/success');
        } catch (err) {
            setIsVoting(false);
            console.error(err.message);
        }
    };

    return (
        <Container maxWidth='sm' sx={{
            bgcolor: 'primary.main',
            mt: '1em',
            borderRadius: '1em',
        }}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>PollFrom</Typography>

            <Box sx={{ mt: '1em', p: '1em' }}>
                <TextField fullWidth id="outlined-basic" label="Enter Your Name" color='whiteBtn' variant="outlined" focused value={name} onChange={e => setName(e.target.value)} sx={{ input: { color: 'white' }, my: '1em' }} />

                <FormControl fullWidth sx={{ py: '0.5em' }}>
                    <InputLabel id="demo-simple-select-label" sx={{
                        color: 'white',
                    }}>Your Vote</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={voteChoice}
                        label="Age"
                        onChange={handleChoice}
                        color='secondary'
                        fullWidth
                        sx={{ input: { color: 'white' }, color: 'white', bgcolor: 'primary.back' }}
                    >
                        <MenuItem value={true}>True</MenuItem>
                        <MenuItem value={false}>False</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={footer}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button 
                    color='whiteBtn' 
                    variant="contained" 
                    startIcon={isVoting ? <VoteSubmitLoader /> : <HowToVoteIcon />} 
                    disableElevation 
                    onClick={onSubmitVote}
                    disabled={isVoting}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default PollFrom