import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const { body } = user;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <p>{body}</p>
      <button
        className="bg-blue-500 m-2 p-2 text-white rounded-lg"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
