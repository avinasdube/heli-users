import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    currentPage: 1,
    usersPerPage: 50,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        usersList: (state, action) => {
            state.users = [...action.payload];
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        gotoNextPage: () => { },
        gotoPrevPage: () => { },
    }
})

export const { usersList, setCurrentPage, gotoNextPage, gotoPrevPage } = paginationSlice.actions;
export default paginationSlice.reducer;
