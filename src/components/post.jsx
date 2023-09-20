import { Link } from 'react-router-dom';

const Post = (props) => {
  const { post } = props;
  const { id, title } = post;

  return (
    <div>
      <div className="border-4 border-blue-500 rounded-lg m-4">
        <h1 className="text-xl p-4 m-4">{title}</h1>
        <Link
          to={`/post/${id}`}
          className="bg-blue-500 text-white rounded-lg p-2 m-2 capitalize"
        >
          <button>show details</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
