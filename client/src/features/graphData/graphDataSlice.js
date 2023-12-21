// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/graph'; // Import your API functions

const graphDataSlice = createSlice({
    name: 'data',
    initialState: {
        // Initial state here
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchDataStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        fetchDataFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const fetchData = createAsyncThunk('data/fetchData', async (_, { dispatch }) => {
    try {
        dispatch(fetchDataStart());
        const data = await api.getData(); // Call your API function here
        dispatch(fetchDataSuccess(data));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = graphDataSlice.actions;
export default graphDataSlice.reducer;
