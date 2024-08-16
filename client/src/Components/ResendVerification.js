// src/components/ResendVerification.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import api from '../services/api';
import { Navigate, useNavigate } from 'react-router-dom';

const ResendVerification = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await api.post('myapp/resend-verification/', { email });
            setSuccessMessage(response.data.message);
            setTimeout(() => navigate('/login'), 5000);
        } catch (error) {
            setErrorMessage(error.response?.data?.error || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" component="h1" gutterBottom>
                Resend Verification Email
            </Typography>
            {successMessage && <Alert severity="success">{successMessage}</Alert>}
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="filled"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    fullWidth
                    sx={{ mt: 2 }}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Send Verification Email'}
                </Button>
            </form>
        </Box>
    );
};

export default ResendVerification;
