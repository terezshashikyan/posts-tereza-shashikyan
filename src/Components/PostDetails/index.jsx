import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postsOp, postsSel } from "../../store/posts";
import './styles.css';



export const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(postsSel.postSelector);



  useEffect(() => {
    if (id) {
      dispatch(postsOp.getPostById(+id));
    }
  }, [dispatch, id]);

  return (
    <>
      {post?.title ? (
        <section className = 'postdetails-section'>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>User Id: {post.userId}</p>
          <p>Post Id: {post.id}</p>
        </section>
      ) : (
        <h1>Post not found</h1>
      )}
    </>
  );
};