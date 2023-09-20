import { useEffect, useState } from 'react';

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className="border-4 border-blue-500 rounded-lg m-4">
            <h1 className="text-xl p-4 m-4">{item.title}</h1>
            <button className="bg-blue-500 text-white rounded-lg p-2 m-2 capitalize">
              show more
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
