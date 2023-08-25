import { useEffect, useState } from "react";
import { PostCard } from "../../Components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { postsOp, postsSel } from "../../store/posts";


export const Posts = () => {

 
  const dispatch = useDispatch();
  const posts = useSelector(postsSel.postsListSelector);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //Important: When adding a post, resource will not be really updated on the server but it will be faked as if. As it is not a real server. 
  const createPost = () => {
    if (userId && title && body) {
      dispatch(
        postsOp.createPost({
          userId: +userId,
          title,
          body,
        })
      );
      setUserId('');
      setTitle('');
      setBody('');
    }
  };

  const savePost = (post) => {
      dispatch(postsOp.savePost(post));
  };

  

  useEffect(() => {
    dispatch(postsOp.getPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(postsOp.getSavedPosts());
  }, [dispatch]);    
   

  return (
    <div classname = 'posts-section'>
    <div className="addpost-section">
    <input value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={createPost}>Add post</button>
    </div>
    <div className="posts">    
      {posts.map((post) => (
        <>
        <PostCard post={post} key={post.id} savePost = {() => {savePost(post)}}/>
        </>
      ))}
    </div>
    </div>
  );
};