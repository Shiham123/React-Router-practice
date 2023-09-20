import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/home.jsx';
import Contact from './components/contact';
import Posts from './components/posts';

import './css/main.css';
import PostDetails from './components/postDetails.jsx';
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
        loader: ({ params }) => {
          console.log(params);
          return fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.postId}`
          );
        },
        element: <PostDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
