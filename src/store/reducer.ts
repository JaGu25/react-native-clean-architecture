import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../domain/user'

export interface GlobalState {
    global: State
}

interface State {
    isFetching: boolean,
    pendingFetching: number,
    user: User
}

const initialState: State = {
    isFetching: false,
    pendingFetching: 0,
    user: { name: "", email: "", isLogged: false }
}

export const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<User>) {
            state.user = action.payload
        },
        fetching(state) {
            state.pendingFetching++;
        },
        stopFetching(state) {
            state.pendingFetching--;
        },
    }
})

export const { addUser, fetching, stopFetching } = GlobalSlice.actions

export default GlobalSlice.reducer