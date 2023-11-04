import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    members: [],
};

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        addMembers: (state, action) => {

        }
    }
})

export const { addMembers } = teamSlice.actions;
export default teamSlice.reducer;