import { useDispatch, useSelector } from "react-redux";
import { postsOp, postsSel } from "../../store/posts";
import { useEffect} from "react";
import { PostCard } from "../PostCard";
import {Link} from 'react-router-dom';


export  const SavedPosts = () => {
  const dispatch = useDispatch();
  const savedPosts = useSelector(postsSel.savedPostsSelector);
  const unSavePost = (post) => dispatch(postsOp.unSavePost(post));

  
  useEffect(() => {
    dispatch(postsOp.getSavedPosts());
  }, [dispatch]);
                                      


 return  savedPosts && savedPosts.length !== 0 ?    (
      <div className="posts">
      {savedPosts.map((post) => (
        <>
        <PostCard post={post} key={post.id} savePost = {() => {unSavePost(post)}}/>
        </>
      ))} 
    </div>) :  <div><button> You do not have saved products. Go to <Link to={"/posts"}>Posts</Link> </button></div>
    
}