// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('protected/');
                setMessage(response.data.message);
            } catch (error) {
                console.error('Error fetching data:', error);
                if (error.response && error.response.status === 401) {
                    // Token might be invalid or expired
                    navigate('/login');
                }
            }
        };

        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/login');
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{message}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;