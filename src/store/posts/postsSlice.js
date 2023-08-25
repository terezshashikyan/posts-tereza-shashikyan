import {createSlice } from "@reduxjs/toolkit";
import {initialPosts } from "./initialState";


export const postsSlice = createSlice({
  name: "posts",
  initialState: initialPosts,
  reducers: {
    setPosts(state, action) {
      state.postsList = action.payload;
    },

    setPost(state, action) {
        state.post = action.payload;
      },

      createPost(state, action) {
        const newPostsList = [...state.postsList, action.payload];
  
        state.postsList = newPostsList;
      },

      setSavedPosts(state, action) {
        state.savedPosts = action.payload;
      },

  },
});