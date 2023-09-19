import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/home.jsx';
import Contact from './components/contact';
import Posts from './components/posts';
import Post from './components/post';

import './css/main.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '/contact', element: <Contact /> },
      { path: '/post', element: <Post /> },
      { path: '/posts', element: <Posts /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
