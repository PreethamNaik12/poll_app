import { Box, Container, FormControlLabel, Switch, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend
} from "recharts";

const LineGraph = () => {

    const [votes, setVotes] = useState([]);
    const [yeah, setYeah] = React.useState(true);
    const [nah, setNah] = React.useState(true);

    const handleYes = () => {
        setYeah(!yeah);
    }
    const handleNo = () => {
        setNah(!nah);
    }

    useEffect(() => {
        const getVotes = async () => {
            try {
                const response = await fetch("http://localhost:5000/pollChoice");
                const jsonData = await response.json();
                setVotes(jsonData);
            } catch (err) {
                console.error(err.message);
            }
        };

        getVotes();
    }, []);

    React.useEffect(() => {//change th edocument title on load
        document.title = `Poll App | Visualize with Line Graph📈`;//setting the document title dynamically
    }, []);

    return (
        <>
            <Typography variant="h2" sx={{ mb: '1em', textAlign: 'center' }}>📈✨ Explore Public Sentiments: Unveiling Poll Results Through Stunning Line Graphs! 🗳️🎉</Typography>
            <Box sx={{ backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center', p: 2, m: 2, borderRadius: '20px' }}>
                <Typography variant="h4" sx={{ mx: '2em' }}>Filters</Typography>
                <FormControlLabel control={<Switch defaultChecked color='secondary' />} label="YES" onChange={handleYes} value={yeah} />
                <FormControlLabel control={<Switch defaultChecked color='secondary' />} label="NO" onChange={handleNo} value={nah} />
            </Box>
            <Container maxWidth='xl' sx={{ display: 'grid', placeItems: 'center', overflowX: 'auto' }}>
                <LineChart
                    width={700}
                    height={500}
                    data={votes}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="submission_date" />
                    <YAxis />
                    <Legend />
                    {yeah && <Line type="monotone" name="YES" dataKey="no_of_yes" stroke="#417a47" activeDot={{ r: 8 }} />}
                    {nah && <Line type="monotone" name="NO" dataKey="no_of_no" stroke="#9a3e2b" activeDot={{ r: 8 }} />}
                </LineChart>
            </Container>
        </>
    );
};

export default LineGraph;
