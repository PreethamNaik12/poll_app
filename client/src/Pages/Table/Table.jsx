import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Container, Typography } from '@mui/material';
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/table/tableDataSlice';


export default function BasicTable() {

    const dispatch = useDispatch();
    const { data, isLoading, error, nextPage } = useSelector((state) => state.table);

    const [rows, setRows] = useState(10);

    const handleClick = async () => {
        try {
            if (!data.length) {
                // If not present, fetch the data
                await dispatch(fetchData(0));
            }

        } catch (err) {
            console.error(err.message);
        }
    }

    React.useEffect(() => {//change th edocument title on load
        document.title = `Poll App | Voters List👀`;//setting the document title dynamically
    }, []);

    const fetchMoreData = async () => {
        await setRows(rows + 10);

        dispatch(fetchData(rows));
    };

    return (
        <Container maxWidth='lg'>
            <Typography variant="h2" sx={{ mb: '1em', textAlign: "center" }}> Insights at a Glance: Exploring Poll Data in Detail! 🗂️</Typography>
            <TableContainer component={Paper}>
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={nextPage}
                    loader={isLoading && <p style={{ textAlign: 'center' }}>Loading...</p>}
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
                            {data.map((vote) => {
                                function beautifyDateTime(dateString) {
                                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                                    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
                                    return formattedDate;
                                }

                                const date = beautifyDateTime(vote.submissionDate);
                                return (
                                    <TableRow
                                        key={vote.id}
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
                    {!!data.length && !isLoading && <Typography variant="h6" sx={{ mt: '1em', textAlign: "center" }}>{nextPage ? `Scroll down to load more data...` : `~ End of the List ~`}</Typography>}

                    {!data.length && <Box sx={{ display: 'flex', justifyContent: 'center', p:1 }} >
                        <Button
                            variant="contained"
                            onClick={handleClick}
                            disabled={isLoading}
                        >Load Data
                        </Button>
                    </Box>}
                </InfiniteScroll >
            </TableContainer>
        </Container >
    );
}