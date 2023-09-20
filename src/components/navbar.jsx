import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="mt-4">
      <Link
        to="/"
        className="text-xl p-2 bg-blue-800 text-white rounded-lg m-2"
      >
        Home
      </Link>
      <Link
        to="/contact"
        className="text-xl p-2 bg-blue-800 text-white rounded-lg m-2"
      >
        contact
      </Link>
      <Link
        to="/posts"
        className="text-xl p-2 bg-blue-800 text-white rounded-lg m-2"
      >
        posts
      </Link>
    </div>
  );
};

export default Navbar;
