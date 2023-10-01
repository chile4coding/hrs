import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hospitals: [],

  user: {},
  singleHospital: {}
};

const hospitalSlice = createSlice({
  name: "hospitals",
  initialState,
  reducers: {
    getHospital: (state, action) => {
      state.hospitals = action.payload;
    },
    storeUser: (state, action) => {
      state.user = action.payload;
    },
    getSingleHospital: (state, action) => {
      const hospital = state.hospitals.find(hos=>hos._id  === action.payload)
      state.singleHospital = hospital 
      
    },

  
 
  },
});

export const { getHospital, storeUser, getSingleHospital } = hospitalSlice.actions;
export default hospitalSlice.reducer;
