import React, {createContext, useContext, useReducer }from "react";
// createContext is responsible for making that data layer 
export const StateContext = createContext();
// child can access any component without parent state help 
// we are wrapping app into our data layer and here stateprovider is the data layer provider
export const StateProvider =({reducer, initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
);
export const useStateValue = ()=> useContext(StateContext);