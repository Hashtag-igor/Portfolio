import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/GlobalStyle"
import HomePage from "./pages/HomePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GoalStore from './pages/GoalStore';
import MovieStreaming from './pages/MovieStreaming';
import FinancialSystem from './pages/FinancialSystem';

const routes = [
  {
    path: "/", 
    element: <App />,                    
    children: [                           
      {
        path: "/",                         
        element: <HomePage />,
      },
      {
        path: "/goalstore",                         
        element: <GoalStore />,
      },
      {
        path: "/moviestreaming",                         
        element: <MovieStreaming />,
      },
      {
        path: "/financialsystem",                         
        element: <FinancialSystem />,
      },
    ],
  },
]

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>
);