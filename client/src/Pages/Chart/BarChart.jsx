import { Box, Button, Container, FormControlLabel, Switch, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/graphData/graphDataSlice';

export default function BarGraph() {
    const [yeah, setYeah] = React.useState(true); // State for "YES" filter
    const [nah, setNah] = React.useState(true); // State for "NO" filter

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
        setYeah(!yeah); // Toggle "YES" filter
    }

    const handleNo = () => {
        setNah(!nah); // Toggle "NO" filter
    }

    React.useEffect(() => {
        document.title = `Poll App | Visualize with Bar Graph📊`; // Set the document title dynamically
    }, []);

    return (
        <>

            <Typography variant="h2" sx={{ mb: '1em', textAlign: "center" }}>📊🚀Visualizing Poll Results with Dynamic Bar Graphs! 🗳️📊</Typography>
            <Box sx={{ backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center', p: 2, m: 2, borderRadius: '20px' }}>
                <Typography variant="h4" sx={{ mx: '2em' }}>Filters</Typography>
                <FormControlLabel control={<Switch defaultChecked color='secondary' />} label="YES" onChange={handleYes} value={yeah} />
                <FormControlLabel control={<Switch defaultChecked color='secondary' />} label="NO" onChange={handleNo} value={nah} />
                <Button variant='contained' color='whiteBtn' onClick={handleRefresh}>Refresh</Button>
            </Box>
            <Container maxWidth='xl' sx={{ display: 'grid', placeItems: 'center', overflowX: 'scroll' }}>
                <BarChart
                    width={1000}
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
                    <Tooltip />
                    <Legend />
                    {yeah && <Bar dataKey="no_of_yes" fill="#417a47" />} {/*Render the "YES" bar if the filter is enabled*/}
                    {nah && <Bar dataKey="no_of_no" fill="#9a3e2b" />}  {/*Render the "NO" bar if the filter is enabled*/}
                </BarChart>
            </Container>
        </>
    );
}
