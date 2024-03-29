import { configureStore } from '@reduxjs/toolkit'
import GlobalReducer from './reducer';

export const store = configureStore({
  reducer: {
    global: GlobalReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch