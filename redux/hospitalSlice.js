import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hospitals: [],
  recommendation: {},
  recomendationRating: {},
  recommendationLocation: {},
  user: {},
  singleHospital: {},
  specialist: {},
  appointments: {},
  recentAppoints: {},
  searchObjVal:[],
  searchFacility:[],
  facilities:[],
  rec:[]
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
    searchHospital: (state, action) => {


      const filteredArray = state.hospitals.filter((obj) =>
        obj.name.toLowerCase().includes(action.payload)||obj.city.toLowerCase().includes(action.payload)
      );
      
      state.searchObjVal = filteredArray;
    },
    searchHospialFacility: (state, action) => {
      const filteredArray = state.hospitals.flatMap((obj) => obj.facilities.filter(fac=>fac.name.toLowerCase().includes(action.payload)))
      
      
      state.searchFacility = filteredArray;
    },
    setRecomm: (state, action) => {
      state.rec = action.payload;
    },

    setFacilities:(state, action)=>{

      state.facilities = action.payload
    }
//     getRecentAppointments: (state, action) => {
// const recentApp = action.payload


// if(recentApp){
//   // const recent = recentApp?.sort(
//   //   (a, b) => new Date(b?.date) - new Date(a?.date)
//   // );
//   const notconcluded = recentApp
//     .filter((appoint) => appoint.status === "upcoming")
//     .slice(0 - 3);
//   state.recentAppoints = notconcluded;
// }
//       }

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
  searchHospital,
  searchHospialFacility,
  setRecomm,
  setFacilities,
  // getRecentAppointments,
} = hospitalSlice.actions;
export default hospitalSlice.reducer;
