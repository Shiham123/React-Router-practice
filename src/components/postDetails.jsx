import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();
  const { postId } = useParams();
  const navigate = useNavigate();

  const { id, title, body } = post;

  console.log(postId);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>Post details id : {id}</h3>
      <p>{title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button
        onClick={handleGoBack}
        className="bg-blue-500 text-white rounded-lg p-2 m-2 capitalize"
      >
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
