
import { postsSlice } from "./postsSlice";

const getPosts = () => {
    const { setPosts } = postsSlice.actions;
  
    return async (dispatch) => {
      try {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  
        dispatch(setPosts(await posts.json()));
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  const getPostById = (id) => {
    const { setPost } = postsSlice.actions;
  
    return async (dispatch) => {
      try {
        const post = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
  
        dispatch(setPost(await post.json()));
      } catch (error) {
        console.log(error);
      }
    };
  };

  const createPost = (body) => {
    return async (dispatch) => {
      const { createPost } = postsSlice.actions;
  
      try {
        const post = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
  
        dispatch(createPost(await post.json()));
        console.log(post)
      } catch (error) {
        console.log(error);
      }
    };
  };

  const getSavedPosts = () => {
    const { setSavedPosts } = postsSlice.actions;
  
    return  (dispatch) => {
      try {
        const savedPostsArray =  window.localStorage.getItem("savedPosts") !== null||undefined ? JSON.parse (window.localStorage.getItem("savedPosts")) : [] ;
        dispatch(setSavedPosts(savedPostsArray));
      } catch (error) {
        console.log(error);
      }
    };
  };

  const savePost = (savedPost) => {
    const { setSavedPosts } = postsSlice.actions;
  
    return  (dispatch) => {
      try {
        const savedPostsArray =  window.localStorage.getItem("savedPosts") !== null || undefined ? [...JSON.parse (window.localStorage.getItem("savedPosts"))] : [] ;
        dispatch(setSavedPosts([...savedPostsArray, savedPost]));
        window.localStorage.setItem("savedPosts", JSON.stringify ([...savedPostsArray, savedPost]));
        alert('saved')
      } catch (error) {
        console.log(error);
      }
    };
  };

  const unSavePost = (savedPost) => {
    const { setSavedPosts } = postsSlice.actions;
  
    return  (dispatch) => {
      try {
        const savedPostsArray =  window.localStorage.getItem("savedPosts") !== null || undefined ? [...JSON.parse (window.localStorage.getItem("savedPosts"))] : [] ;
        const updatedSavedPosts = savedPostsArray.filter(post => post.id !== savedPost.id)
        dispatch(setSavedPosts(updatedSavedPosts));
        window.localStorage.setItem("savedPosts", JSON.stringify (updatedSavedPosts));
        alert('unSaved')
      } catch (error) {
        console.log(error);
      }
    };
  };

  
  
  
  
  
  
  export const postsOp = {
    getPosts,
    getPostById,
    createPost, 
    getSavedPosts,
    savePost,
    unSavePost,
  };