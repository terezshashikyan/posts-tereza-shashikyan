import { combineReducers } from "@reduxjs/toolkit";

import { postsSlice } from "./posts";


export const reducers = () =>
  combineReducers({
    posts: postsSlice.reducer,

  });