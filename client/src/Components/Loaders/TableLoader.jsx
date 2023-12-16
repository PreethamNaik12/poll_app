import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const TableLoader = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <CircularProgress />
        </Box>
    )
}

export default TableLoader