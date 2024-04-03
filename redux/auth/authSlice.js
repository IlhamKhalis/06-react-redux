import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    
    reducers: {
        setLogin(state, action){
            if(action && action.payload && typeof action.payload.isLogin !== 'undefined'){
                state.isLogin = action.payload.isLogin;
            }
        },
    },
});

export const {setLogin} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
