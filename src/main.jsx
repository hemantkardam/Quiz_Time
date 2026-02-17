// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './index.css';
import App from './App.jsx';
import Quiz from './Components/Quiz.jsx';
import Home from './Components/Home.jsx';
import Result from './Components/Result.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
      {
        path: '/result',
        element: <Result />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
