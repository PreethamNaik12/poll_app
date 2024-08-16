import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckEmail = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username');
    const email = searchParams.get('email');

    return (
        <div>
            <h2>Check Your Email</h2>
            <p>Hello {username},</p>
            <p>We've sent a verification email to: <strong>{email}</strong></p>
            <p>Please check your inbox and click on the verification link to complete your registration.</p>
        </div>
    );
};

export default CheckEmail;