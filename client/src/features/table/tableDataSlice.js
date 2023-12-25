// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './tableAPI'; // Import your API functions

const tableDataSlice = createSlice({
    name: 'tableData',
    initialState: {
        // Initial state here
        data: [],
        isLoading: false,
        nextPage: false,
        error: null,
    },
    reducers: {
        fetchDataStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action) => {
            state.isLoading = false;
            state.nextPage = action.payload.nextPage;
            const newData = [...state.data, ...action.payload.limitedUsers];
            state.data = newData;
        },
        fetchDataFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const fetchData = createAsyncThunk('tableData/fetchData', async (offset, { dispatch }) => {
    try {
        dispatch(fetchDataStart());

        const data = await api.getData(offset); // Call your API function here

        dispatch(fetchDataSuccess(data));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = tableDataSlice.actions;
export default tableDataSlice.reducer;
