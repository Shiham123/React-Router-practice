import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/home.jsx';
import Contact from './components/contact';
import Posts from './components/posts';
import PostDetails from './components/postDetails.jsx';
import Users from './components/users.jsx';
import UserDetails from './components/userDetails.jsx';

import './css/main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '/contact', element: <Contact /> },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts />,
      },
      {
        path: '/post/:postId',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails />,
      },
      {
        path: '/users',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users />,
      },
      {
        path: '/users/:userId',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <UserDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
