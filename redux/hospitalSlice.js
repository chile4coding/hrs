import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hospitals: [],
  recommendation: {},
  recomendationRating: {},
  recommendationLocation: {},
  user: {},
  singleHospital: {},
  specialist:{},
  appointments:{}

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
      const hospital = state.hospitals.find(
        (hos) => hos._id === action.payload
      );
      state.singleHospital = hospital;
    },
    getRecommendation: (state, action) => {
      state.recommendation = action.payload;
    },
    getRecommendationByLoc: (state, action) => {
      state.recommendationLocation = action.payload;
    },
    getRecommendationByRating: (state, action) => {
      state.recomendationRating = action.payload;
    },
    getappointments: (state, action) => {
      state.appointments = action.payload;
    },
  },
});

export const {
  getHospital,
  storeUser,
  getSingleHospital,
  getRecommendation,
  getRecommendationByRating,
  getRecommendationByLoc,
  getappointments,
} = hospitalSlice.actions;
export default hospitalSlice.reducer;
