import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const VerifyEmail = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await api.get(`myapp/verify-email/${token}/`);
                setMessage(response.data.message);
                // Redirect to login page after successful verification
                setTimeout(() => navigate('/login'), 3000);
            } catch (error) {
                console.error('Email verification failed', error);
                if (error.response) {
                    setError(error.response.data.error);
                } else if (error.request) {
                    setError('No response from server. Please try again later.');
                } else {
                    setError('An unexpected error occurred. Please try again.');
                }
            }
        };

        verifyEmail();
    }, [token, navigate]);

    return (
        <div>
            <h2>Email Verification</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {message && <p>Redirecting to login page...</p>}
        </div>
    );
};

export default VerifyEmail;