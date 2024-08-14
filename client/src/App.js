import React from 'react';
import { Box, Container } from '@mui/material';
// eslint-disable-next-line
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate 
} from "react-router-dom";
import { Footer, Navbar, ProgressBar, StatusBar } from "./Components/"
import { Home, Events, About, Poll, PollCasted, Table, LineChart, BarChart, Visualize } from './Pages';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('access_token') !== null;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {


  return (
    <Router>
      <ProgressBar duration={0.2} height={3} bgcolor='#ffffff' color={'#ffffff'} />
      <Box sx={{ backgroundColor: "primary.dark", color: 'primary.contrastText' }}>
        <Navbar />
        <StatusBar />
        <Container maxWidth='xl' sx={{ padding: { xs: '0.5em', md: '2em' } }}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/events' element={<Events />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/poll' element={<Poll />} />
            <Route exact path='/success' element={<PollCasted />} />
            <Route exact path='/table' element={<Table />} />
            <Route exact path='/chartl' element={<LineChart />} />
            <Route exact path='/chartb' element={<BarChart />} />
            <Route exact path='/visualize' element={<Visualize />} />
            <Route path="/login" element={<Login />} />
            <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
        {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
