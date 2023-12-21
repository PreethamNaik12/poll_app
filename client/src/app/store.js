import { configureStore } from '@reduxjs/toolkit';
import graphDataReducer from '../features/graphData/graphDataSlice';
import tableDataReducer from '../features/table/tableDataSlice';

const store = configureStore({
    reducer: {
        graph: graphDataReducer,
        table: tableDataReducer,
    },
    // Other configuration options can be added here
});

export default store;
