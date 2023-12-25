import { useEffect, useState } from 'react';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const StatusBar = () => {
    const isOnline = useOnlineStatus();
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        if (isOnline) {
            setOpen(true);
        } else {
            setOpen(true);
        }
    }, [isOnline])

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={isOnline ? 6000 : null}
                onClose={handleClose}
            >
                <Alert severity={isOnline ? `success` : `error`} sx={{ width: '100%' }}>
                    {isOnline ? `Online` : `Disconnected`}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default StatusBar;