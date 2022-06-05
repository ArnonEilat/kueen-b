import {createSlice} from '@reduxjs/toolkit';

export const userSlice= createSlice({
  //the name of the slice:
    name:"user",
    initialState: {
        user: { name:"", mail: "", password: "", id: "" }
    },
    //state- we will update the state of the slice.
    //action- the data that is gonna be passed to us.
    reducers: {
       userDetails: (state,action) => {
           //the user is gonna be updated by the data of the action's payload:
           state.user=action.payload;

       }  
    }
});

export const{userDetails}=userSlice.actions;
export const selectUser=(state) => state.user.user;//this will help us to grab the data of the user
export default userSlice.reducer;