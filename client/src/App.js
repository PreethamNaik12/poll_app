import React from 'react';
import { Box, Container } from '@mui/material';
// eslint-disable-next-line
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Footer, Navbar, ProgressBar, InitialLoader } from "./Components/"
import { Home, Events, About, Competitions, FAQ, Sponsers } from './Pages';

const App = () => {


  return (
    <Router>
      <ProgressBar duration={"0.2"} height="3.5" bgcolor="#ffffff" />
      <Box sx={{ backgroundColor: "primary.dark", color: 'primary.contrastText' }}>
        <Navbar />
        <Container maxWidth='xl' sx={{ padding: { xs: '0.5em', md: '2em' } }}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/events' element={<Events />} />
            <Route exact path='/competitions' element={<Competitions />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/faq' element={<FAQ />} />
            <Route exact path='/sponsors' element={<Sponsers />} />

            <Route exact path='/load' element={<InitialLoader />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
