// src/components/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { Box, Button, CircularProgress, TextField } from '@mui/material';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        first_name: '',
        last_name: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            setLoading(true);
            const response = await api.post('myapp/register/', formData);
            setMessage(response.data.message);

            // Encode the username and email for URL safety
            const encodedUsername = encodeURIComponent(formData.username);
            const encodedEmail = encodeURIComponent(formData.email);

            // Navigate to the check-email route with username and email as query parameters
            navigate(`/check-email?username=${encodedUsername}&email=${encodedEmail}`);
        } catch (error) {
            console.error('Registration failed', error);
            if (error.response) {
                setError(JSON.stringify(error.response.data));
            } else if (error.request) {
                setError('No response from server. Please try again later.');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ m: 'auto', display: 'flex', justifyContent: 'center', maxWidth: '23%', flexDirection: 'column' }}>
            <form onSubmit={handleSubmit}>
                <h2 style={{textAlign:'center'}}>Register</h2>
                {error && <p style={{ color: 'red', textAlign:'center' }}>{error}</p>}
                {message && <p style={{ color: 'green', textAlign:'center' }}>{message}</p>}
                <div>
                    <TextField
                        type="text"
                        id="username"
                        name="username"
                        variant="filled"
                        label="Username"
                        value={formData.username}
                        required
                        onChange={handleChange}
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
                        variant="filled"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label='Email'
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
                </div>
                <div>
                    <TextField
                        variant="filled"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        label='Enter a password'
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
                        variant="filled"
                        type="password"
                        id="password2"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                        required
                        label='Confirm password'
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
                        variant="filled"
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        label='First Name'
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
                        variant="filled"
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        label='Last Name'
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
                <Box sx={{display:'grid'}}>
                        <Box><Button disabled={loading} type="submit" variant="contained" color="success" sx={{float:'right'}}>
                            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Register'}
                            </Button></Box>
                        <Box sx={{textAlign:'center', marginTop:1}}>
                            Have an account? <Link to="/login" style={{color:'#d2d2d2'}}>Login</Link>
                        </Box>
                    </Box>
            </form>
        </Box>
    );
};

export default Register;