import React from 'react'
import { Box, Button, ButtonGroup, Container, Divider, FormControl, IconButton, InputBase, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { poll } from '../../assets/images';
import { pages } from '../../constants';
import { Link } from 'react-router-dom';
import {ManageAccountsIcon, NightsStayIcon, LightModeIcon, CopyrightIcon} from '../../assets/icons/';

const Footer = () => {
    return (
        <>
            <Divider color='#fffff' />
            <Container maxWidth='xl' sx={{
                bgcolor: 'primary.dark',
                color: 'primary.contrastText',
                py: '2em'
            }}>
                <Box sx={{
                        display: {xs:'flex',sm:'none'},
                        alignItems: 'flex-start',
                        flexWrap:'wrap'
                    }}>
                        <Box sx={{
                            width: "30px",
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'flex-start'
                        }}>
                            <img src={poll} alt="Incident Logo" width='100%' />
                        </Box>
                        <Link to='/' style={{ textDecorationLine: 'none' }}>
                            <Typography variant="h5" sx={{ ml: '0.5em', color: 'white', textDecorationLine: 'none' }}>POLL APP
                            </Typography>
                        </Link>
                    </Box>
                <Container maxWidth="lg" sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap:'wrap',
                    gap:'1em',
                    pt:{xs:'1em',sm:'0'}
                }}>
                    <Box sx={{
                        display: {xs:'none',sm:'flex'},
                        alignItems: 'flex-start',
                    }}>
                        <Box sx={{
                            width: "30px",
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'flex-start'
                        }}>
                            <img src={poll} alt="Incident Logo" width='100%' />
                        </Box>
                        <Link to='/' style={{ textDecorationLine: 'none' }}>
                            <Typography variant="h5" sx={{ ml: '0.5em', color: 'white', textDecorationLine: 'none' }}>POLL APP
                            </Typography>
                        </Link>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontSize: '17px', fontWeight: '500' }}>Quick Links</Typography>
                        <List disablePadding>
                            {pages.map((page) => (
                                <Link to={page.path} style={{ textDecorationLine: 'none' }}>
                                    <ListItem disablePadding>
                                        <ListItemText primary={page.title} sx={{
                                            textTransform: 'capitalize',
                                            fontSize: '15px',
                                            color: 'gray'
                                        }} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontSize: '17px', fontWeight: '500' }}>Quick Links</Typography>
                        <List disablePadding>
                            {pages.map((page) => (
                                <Link to={page.path} style={{ textDecorationLine: 'none' }}>
                                    <ListItem disablePadding>
                                        <ListItemText primary={page.title} sx={{
                                            textTransform: 'capitalize',
                                            fontSize: '15px',
                                            color: 'gray'
                                        }} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontSize: '17px', fontWeight: '500' }}>Quick Links</Typography>
                        <List disablePadding>
                            {pages.map((page) => (
                                <Link to={page.path} style={{ textDecorationLine: 'none' }}>
                                    <ListItem disablePadding>
                                        <ListItemText primary={page.title} sx={{
                                            textTransform: 'capitalize',
                                            fontSize: '15px',
                                            color: 'gray'
                                        }} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Box>
                    <Box sx={{ maxWidth: {md:'20%'} }}>
                        <Typography variant="h6" sx={{ fontSize: '17px', fontWeight: '500' }}>Subscribe to Our Updates</Typography>
                        <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: '500', color: 'gray' }}>Stay updated on new releases and features, guides, and case studies.</Typography>
                        <Paper
                            component="form"
                            sx={{
                                p: '0px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: 'primary.dark',
                                mt: '1em',
                                '&:hover': {
                                    backgroundColor: 'primary.main'
                                }
                            }}
                        >
                            <InputBase
                                sx={{
                                    ml: 1, flex: 1, color: 'primary.contrastText',
                                }}
                                placeholder="you@email.com"
                            />
                            <Divider sx={{ height: 28, m: 0.5, color: 'gray' }} orientation="vertical" />
                            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                <Typography variant="caption" sx={{
                                    color: 'whitesmoke',
                                    bgcolor: 'primary.light',
                                    borderRadius: '5px',
                                    padding: '2px 5px'
                                }}>Subscribe</Typography>
                            </IconButton>
                        </Paper>
                    </Box>
                </Container>
                <Container sx={{ display: 'flex', justifyContent: 'space-between', mt: '3em' }}>
                    <Box>
                        <Typography sx={{
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            color: 'gray'
                        }} ><CopyrightIcon fontSize='inherit' sx={{ mr: '0.4em' }} />~Tagahsh Submission</Typography>
                        <Typography variant="caption" sx={{ color: 'gray' }}>Meet Preetham G</Typography>
                        <IconButton aria-label="delete" size="large" href='https://github.com/PreethamNaik12/parashu' target="_blank">
                            <ManageAccountsIcon fontSize="inherit" color='whiteBtn' />
                        </IconButton>
                    </Box>
                    <ButtonGroup variant="outlined" color='whiteBtn' size='small' aria-label="outlined button group" sx={{
                        p: '1em', maxHeight:'40px'
                    }}>
                        <Button size='small' variant='contained'>
                            <NightsStayIcon />
                        </Button>
                        <Button>
                            <LightModeIcon />
                        </Button>
                    </ButtonGroup>
                </Container>
            </Container>
        </>
    )
}

export default Footer;