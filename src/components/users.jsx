import { useLoaderData } from 'react-router-dom';
import User from './user';

const Users = () => {
  const usersData = useLoaderData();

  return (
    <div>
      <h1>{usersData.length}</h1>
      {usersData.map((item, index) => {
        return <User key={index} user={item} />;
      })}
    </div>
  );
};

export default Users;
