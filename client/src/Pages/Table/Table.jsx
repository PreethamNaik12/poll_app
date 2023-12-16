import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
export default function BasicTable() {

    const api_url = process.env.REACT_APP_API_URL;

    const [votes, setVotes] = useState([]);
    const [rows, setRows] = useState(0);
    const [loading, setLoading] = useState(true);
    const [tableLength, setTableLength] = useState(0);
    const [remaining, setRemaining] = useState(0)

    const getTodos = async () => {
        const url = `${api_url}/ormpoll/try/1`;
        try {
            const response = await axios.get(url);
            const jsonData = response.data;

            setVotes(jsonData.limitedUsers);
            setTableLength(jsonData.count);
            setLoading(false);

            await setRemaining(jsonData.remaining)

        } catch (err) {
            console.error(err.message);
        }
    };

    React.useEffect(() => {
        getTodos();
        setRows(10);
    }, []);

    React.useEffect(() => {//change th edocument title on load
        document.title = `Poll App | Voters List👀`;//setting the document title dynamically
    }, []);

    const fetchMoreData = async () => {
        setLoading(true);
        setRows(rows + 10);

        let url = `https://taghash-poll.onrender.com/ormpoll/try/${rows}`;
        const newresponse = await axios.get(url);
        const jsondata = newresponse.data;
        const newVotes = votes;

        setVotes([...newVotes, ...jsondata.limitedUsers]);
        await setRemaining(jsondata.remaining);
        setLoading(false);

    };

    return (
        <Container maxWidth='lg'>
            <Typography variant="h2" sx={{ mb: '1em', textAlign: "center" }}> Insights at a Glance: Exploring Poll Data in Detail! 🗂️</Typography>
            <TableContainer component={Paper}>
                <InfiniteScroll
                    dataLength={votes.length}
                    next={fetchMoreData}
                    hasMore={rows < tableLength}
                    loader={loading && <p style={{textAlign:'center'}}>Loading...</p>}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ fontWeight: 'bold' }}>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Choice</TableCell>
                                <TableCell align="left">Timestamp</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {votes.map((vote) => {
                                function beautifyDateTime(dateString) {
                                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                                    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
                                    return formattedDate;
                                }

                                const date = beautifyDateTime(vote.submissionDate);
                                return (
                                    <TableRow
                                        key={vote.userName}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, bgcolor: vote.choice ? '#aadd90' : '#f5c1bb' }}
                                    >
                                        <TableCell align="left">{vote.id}</TableCell>
                                        <TableCell align="left">{vote.userName}</TableCell>
                                        <TableCell align="left">{vote.choice ? `YES` : `NO`}</TableCell>
                                        <TableCell align="left">{date}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    {(remaining === 0) && <Typography variant="h6" sx={{ mt: '1em', textAlign: "center" }}>{loading ? `Fetching data...` :`~ End of the List ~`}</Typography>}
                </InfiniteScroll >
            </TableContainer>
        </Container >
    );
}