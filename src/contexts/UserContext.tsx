import React, { createContext, useReducer, useState } from 'react'
import { initialState, UseReducer } from '../reducers/UserReducer'



export const UserContext: any = createContext(null);

export default ({ children }: any) => {

    const [state, dispatch] = useReducer(UseReducer, initialState)


    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}