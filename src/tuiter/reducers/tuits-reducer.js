import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {createTuitThunk,updateTuitThunk,findTuitsThunk,deleteTuitThunk} from "../services/tuits-thunks";
const initialState = {
  tuits: [],
  loading: false
}
// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "image": "nasa.png",
//    };
   
// const templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
//     "title" : "Default title"
//    }
   
   const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    reducers: {
    // likeTuit(state, action) {
    //         const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
    //         state.tuits[index].liked = true;
    //         state.tuits[index].likes = state.tuits[index].likes + 1;
    // },
    // dislikeTuit(state, action) {
    //     const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
    //     if(state.tuits[index].likes != 0)
    //     {
    //         state.tuits[index].likes = state.tuits[index].likes - 1;
    //         if(state.tuits[index].likes === 0)
    //         {
    //             state.tuits[index].liked = false;
    //         }
    //     }
    // },
    //   deleteTuit(state, action) {
    //     const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
    //     state.tuits.splice(index, 1);
    //   },
    //   createTuit(state, action) {
    //     state.tuits.unshift({
    //       ...action.payload,
    //       ...templateTuit,
    //       _id: (new Date()).getTime(),
    //     })
    //     console.log(tuits);
    //   }
    },
    extraReducers: {
      [updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
    state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
  },
      [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
    },
      [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits .filter(t => t._id !== payload)
    },
      [findTuitsThunk.pending]:
         (state) => {
            state.loading = true
            state.tuits = [] },
      [findTuitsThunk.fulfilled]:
         (state, { payload }) => {
            state.loading = false
            state.tuits = payload },
      [findTuitsThunk.rejected]:
         (state, action) => {
            state.loading = false
            state.error = action.error
      }
    }
   });

//export const {createTuit, deleteTuit,likeTuit,dislikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
