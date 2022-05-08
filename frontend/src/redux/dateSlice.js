import {createSlice} from '@reduxjs/toolkit';

export const dateSlice= createSlice({
  //the name of the slice:
    name:"date",
    initialState: {
        date:null
    },
    //state- we will update the state of the slice.
    //action- the data that is gonna be passed to us.
    reducers: {
      selectedDate: (state,action) => {
           //the user is gonna be updated by the data of the action's payload:
           state.date=action.payload;

       }  
    }
});
export const{selectedDate}=dateSlice.actions;
export const selectDate=(state) => state.date.date;//this will help us to grab the data of the user
export default dateSlice.reducer;