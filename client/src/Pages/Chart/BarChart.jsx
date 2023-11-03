import { Box, Container, FormControlLabel, Switch, Typography } from '@mui/material';
import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

export default function BarGraph() {
    const [votes, setVotes] = React.useState([]);
    const [yeah, setYeah] = React.useState(true);
    const [nah, setNah] = React.useState(true);

    const handleYes = () => {
        setYeah(!yeah);
    }

    const handleNo = () => {
        setNah(!nah);
    }

    React.useEffect(() => {
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
        document.title = `Poll App | Visualize with Bar Graph📊`;//setting the document title dynamically
    }, []);

    return (
        <>
            <Typography variant="h2" sx={{ mb: '1em', textAlign: "center" }}>📊🚀Visualizing Poll Results with Dynamic Bar Graphs! 🗳️📊</Typography>
            <Box sx={{ backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center', p: 2, m: 2, borderRadius: '20px' }}>
                <Typography variant="h4" sx={{ mx: '2em' }}>Filters</Typography>
                <FormControlLabel control={<Switch defaultChecked color='secondary' />} label="YES" onChange={handleYes} value={yeah} />
                <FormControlLabel control={<Switch defaultChecked color='secondary' />} label="NO" onChange={handleNo} value={nah} />
            </Box>
            <Container maxWidth='xl' sx={{ display: 'grid', placeItems: 'center', overflowX: 'scroll' }}>
                <BarChart
                    width={1000}
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
                    <Tooltip />
                    <Legend />
                    {yeah && <Bar dataKey="no_of_yes" fill="#417a47" />}
                    {nah && <Bar dataKey="no_of_no" fill="#9a3e2b" />}
                </BarChart>
            </Container>
        </>
    );
}