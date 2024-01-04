import { Dispatch } from "@reduxjs/toolkit"
import { addUser, fetching, stopFetching } from "./reducer"


const login = (dispatch: Dispatch) => {
    try {
        dispatch(fetching());
        dispatch(addUser({
            email: "ANTONY@GMAIL.COM",
            name: "DIXON",
            isLogged: true
        }));
    } finally {
        dispatch(stopFetching());
    }
}

export const globalActions = {
    login
} 