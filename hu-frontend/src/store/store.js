import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import teamsReducer from '../reducers/teamsReducer';
import paginationReducer from '../reducers/paginationReducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        teams: teamsReducer,
        pagination: paginationReducer
    }
},
    applyMiddleware(thunk))

export default store;