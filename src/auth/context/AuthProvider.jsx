import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'
import { types } from '../types/types'




const init = () => {
   const user = JSON.parse(localStorage.getItem('user'));

   return {
    logged: !!user,
    user,
   }
}

export const AuthProvider = ({children}) => {


const [state, dispatch] = useReducer(authReducer, {}, init )

const login = (name = '') => {

    const user = {
        id: 'ABC',
        name: 'Franco Stoll'
    }

    const action = {
        types: types.login,
        payload: {
            id: 'ABC',
            name: name
        }
    } 
    localStorage.setItem('user', JSON.stringify( user ));
    dispatch(action);
}

const logout = () => {
    localStorage.removeItem('user');
    const action = {
        types: types.logout
    };
    dispatch(action)

    
}


  return (
    <AuthContext.Provider  value={{
        ...state,

        // Methods
        login: login,
        logout: logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
