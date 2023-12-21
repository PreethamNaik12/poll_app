import { configureStore } from '@reduxjs/toolkit';
import graphDataReducer from '../features/graphData/graphDataSlice';

const store = configureStore({
    reducer: {
        graph: graphDataReducer,
    },
    // Other configuration options can be added here
});

export default store;
