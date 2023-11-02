import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { HowToRegRoundedIcon, GoogleIcon } from '../../assets/icons/'
import { poll } from '../../assets/images/'
import { pages } from '../../constants';




const settings = ['Profile', 'Account', 'Dashboard'];


function ResponsiveAppBar() {


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="static" sx={{ bgcolor: 'primary.dark', padding: { xs: '0', md: '1em' } }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to='/'>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', height: '40px', }}>
                            <img src={poll} alt="Incident Logo" style={{ width: '100%' }} />
                        </Box>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                display: { xs: 'none', lg: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                ml:'1em'
                            }}
                        >
                            POLL APP
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                bgColor: 'gray',
                            }}
                        >
                            {pages.map((page) => (
                                <Link to={page.path} style={{ textDecoration: 'none' }}>
                                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" sx={{
                                            color: 'black',
                                            textTransform: 'capitalize',
                                            textAlign: 'center',
                                        }}>{page.title}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', height: '50px', width: '100%' }}>
                        <img src={poll} alt="" sx={{ width: '100%' }} />
                    </Box>
                    {/* <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        INCIDENT
                    </Typography> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Link to={page.path} style={{ textDecoration: 'none' }}>
                                <Button
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        m: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {page.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="contained" startIcon={<GoogleIcon sx={{ display: { xs: 'none', md: 'flex' } }} />}

                            sx={{
                                color: 'primary.dark',
                                bgcolor: 'primary.contrastText',
                                padding: { xs: '0.5em', md: '0.5em 1.5em' },
                                fontSize: { xs: '0.8rem', md: '0.9rem' },
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                    color: 'primary.contrastText',
                                }
                            }}>Vote</Button>
                    {/* <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip> */}
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
