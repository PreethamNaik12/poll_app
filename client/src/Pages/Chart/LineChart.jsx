import { Box, Button, Container, FormControlLabel, Switch, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend
} from "recharts";
import { fetchData } from '../../features/graphData/graphDataSlice';

const LineGraph = () => {
    const [yeah, setYeah] = useState(true); // State for "yeah" switch
    const [nah, setNah] = useState(true); // State for "nah" switch

    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector((state) => state.graph);

    useEffect(() => {
        // Check if data is already present in the store
        if (!data.length) {
            // If not present, fetch the data
            dispatch(fetchData());
        }
    }, [dispatch, data]);

    const handleRefresh = () => {
        dispatch(fetchData());
    };

    const handleYes = () => {
        setYeah(!yeah); // Toggle "yeah" switch state
    }
    const handleNo = () => {
        setNah(!nah); // Toggle "nah" switch state
    }

    React.useEffect(() => {
        document.title = `Poll App | Visualize with Line Graph📈`; // Set the document title dynamically
    }, []);

    return (
        <>
            {/* Page title */}
            <Typography variant="h2" sx={{ mb: '1em', textAlign: 'center' }}>📈✨ Explore Public Sentiments: Unveiling Poll Results Through Stunning Line Graphs! 🗳️🎉</Typography>
            
            {/* Filters */}
            <Box sx={{ backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center', p: 2, m: 2, borderRadius: '20px' }}>
                <Typography variant="h4" sx={{ mx: '2em' }}>Filters</Typography>
                <FormControlLabel control={<Switch defaultChecked color='secondary' />} label="YES" onChange={handleYes} value={yeah} />
                <FormControlLabel control={<Switch defaultChecked color='secondary' />} label="NO" onChange={handleNo} value={nah} />
                <Button variant='contained' color='whiteBtn' onClick={handleRefresh}>Refresh</Button>
            </Box>
            
            {/* Chart container */}
            <Container maxWidth='xl' sx={{ display: 'grid', placeItems: 'center', overflowX: 'auto' }}>
                <LineChart
                    width={700}
                    height={500}
                    data={data}
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
