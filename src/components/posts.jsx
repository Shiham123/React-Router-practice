import { useEffect, useState } from 'react';
import Post from './post';

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      {data.map((item, index) => {
        return <Post key={index} data={data} />;
      })}
    </div>
  );
};

export default Posts;
