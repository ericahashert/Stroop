import { React} from "react";

function Comments ({ comment }) {
  // const [comments, setComments] = useState({});
  // const [errors, setErrors] = useState(false);
  // const params = useParams();
  // const history = useHistory();
//   console.log(comment)
  return (
    <>
      <div className="comments">
        <i>{comment.comment}</i>
        <p>{comment.user}</p>
        </div> 
    </>
  );
}

export default Comments;