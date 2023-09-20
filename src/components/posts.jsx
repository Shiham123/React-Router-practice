import { useLoaderData } from 'react-router-dom';
import Post from './post';

const Posts = () => {
  const posts = useLoaderData();

  return (
    <>
      <h1>{posts.length}</h1>
      {posts.map((item, index) => {
        return <Post key={index} post={item} />;
      })}
    </>
  );
};

export default Posts;
