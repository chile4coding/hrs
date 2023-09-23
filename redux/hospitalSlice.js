import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hospitals: [],
  user: {},
};

const hospitalSlice = createSlice({
  name: "hospitals",
  initialState,
  reducers: {
    getHospitals: (state, action) => {
      state.hospitals = action.payload;
    },
    storeUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getHospitals, storeUser } = hospitalSlice.actions;
export default hospitalSlice.reducer;
