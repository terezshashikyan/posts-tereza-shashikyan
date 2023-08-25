
import { useNavigate } from "react-router-dom";
import './styles.css';




export const PostCard = (props) => {
  const { title, body, id } = props.post;
  const {savePost,buttonText, key} = props;
  const navigate = useNavigate();

  return (
    <div className="post-card" onClick={() => navigate(`/posts/${id}`)} key = {key}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={(e) => {e.stopPropagation(); savePost()}}>{buttonText}</button>
    </div>
  );
};

