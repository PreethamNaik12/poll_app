// src/components/Login.js
import React, { useState } from 'react';
import api from '../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, CircularProgress, TextField } from '@mui/material';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            setLoading(true);
            const response = await api.post('token/', { username, password });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed', error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setError(`Login failed: ${error.response.data.detail || 'Unknown error'}`);
            } else if (error.request) {
                // The request was made but no response was received
                setError('No response from server. Please try again later.');
            } else {
                // Something happened in setting up the request that triggered an Error
                setError('An unexpected error occurred. Please try again.');
            }
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ m: 'auto', display: 'flex', justifyContent: 'center', maxWidth: '23%', flexDirection: 'column' }}>
            <form onSubmit={handleLogin}>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    <TextField
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        label="Username"
                        variant="filled"
                        fullWidth
                        sx={{
                            backgroundColor: 'grey.200', // Use MUI's grey color from theme
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'grey.500', // Change the color of the border
                                },
                                '&:hover fieldset': {
                                    borderColor: 'grey.700', // Change the color of the border on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main', // Change the color of the border when focused
                                },
                            },
                            borderRadius: 2, // Add a border radius
                            marginBottom: 2
                        }}
                    />
                </div>
                <div>
                    <TextField
                        type="password"
                        id="password"
                        value={password}
                        variant="filled"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        sx={{
                            backgroundColor: 'grey.200', // Use MUI's grey color from theme
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'grey.500', // Change the color of the border
                                },
                                '&:hover fieldset': {
                                    borderColor: 'grey.700', // Change the color of the border on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main', // Change the color of the border when focused
                                },
                            },
                            borderRadius: 2, // Add a border radius
                            marginBottom: 2
                        }}
                    />
                    <Box sx={{ display: 'grid' }}>
                        <Box><Button type="submit" variant="contained" color="success" sx={{ float: 'right' }} disabled={loading}>
                            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login'}
                        </Button></Box>
                        <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                            Don't have an account? <Link to="/register" style={{ color: '#d2d2d2' }}>Register here</Link>
                        </Box>
                        <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                            Account not active? <Link to="/reverify" style={{ color: '#d2d2d2' }}>Resend verification mail</Link>
                        </Box>
                    </Box>
                </div>
            </form>
        </Box>
    );
};

export default Login;