import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types';

interface UserState {
    users: User[];
}

const initialState: UserState = {
    users: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        removeUsers: (state) => {
            state.users = [];
        }
    },
});

export const { setUsers, removeUsers } = userSlice.actions;

export default userSlice.reducer;