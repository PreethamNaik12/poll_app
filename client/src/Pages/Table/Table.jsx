import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import { dummy } from '../../constants';

export default function BasicTable() {

    const isDeployed = process.env.REACT_APP_DEPLOYED === 'true';

    const [votes, setVotes] = React.useState(dummy);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/polls");
            const jsonData = await response.json();

            setVotes(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    React.useEffect(() => {
        getTodos();
    }, []);

    React.useEffect(() => {//change th edocument title on load
        document.title = `Poll App | Voters List👀`;//setting the document title dynamically
    }, []);

    return (
        <Container maxWidth='lg'>
            <Typography variant="h2" sx={{ mb: '1em', textAlign: "center" }}> Insights at a Glance: Exploring Poll Data in Detail! 🗂️</Typography>
            <TableContainer component={Paper}>
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

                            const date = beautifyDateTime(vote.submission_date);
                            console.log(date);
                            return (
                                <TableRow
                                    key={vote.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, bgcolor: vote.vote_choice ? '#aadd90' : '#f5c1bb' }}
                                >
                                    <TableCell align="left">{vote.id}</TableCell>
                                    <TableCell align="left">{vote.name}</TableCell>
                                    <TableCell align="left">{vote.vote_choice ? `YES` : `NO`}</TableCell>
                                    <TableCell align="left">{date}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {isDeployed && <Typography variant="body1" sx={{ bgcolor: '#bf7d7a', p: 2, borderRadius: '10px', mt: '2em' }}>This data has been hardcoded inorder to serve the needs for deployment, works dynamically only in local env for now</Typography>}
        </Container>
    );
}