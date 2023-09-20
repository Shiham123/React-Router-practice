import { Link } from 'react-router-dom';

const User = (props) => {
  const { user } = props;

  const { id, name, username, email } = user;

  return (
    <div className="border-4 border-blue-600 m-4 p-4">
      <h1>{name}</h1>
      <p>{username}</p>
      <a href="">{email}</a>
      <Link
        to={`/users/${id}`}
        className="bg-blue-500 m-2 p-2 text-white rounded-lg"
      >
        Show more
      </Link>
    </div>
  );
};

export default User;
