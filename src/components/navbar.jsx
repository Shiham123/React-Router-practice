import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">contact</Link>
      <Link to="/posts">posts</Link>
      <Link to="/post">post</Link>
    </div>
  );
};

export default Navbar;
