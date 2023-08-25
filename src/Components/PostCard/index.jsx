
import { useNavigate } from "react-router-dom";




export const PostCard = (props) => {
  const { title, body, id } = props.post;
  const {savePost} = props;
  const navigate = useNavigate();

  return (
    <div className="post-card" onClick={() => navigate(`${id}`)}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={() => savePost()}>Save post</button>
    </div>
  );
};

