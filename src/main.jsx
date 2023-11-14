import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/GlobalStyle"
import HomePage from "./pages/HomePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GoalStore from './pages/GoalStore';
import MovieStreaming from './pages/MovieStreaming';
import FinancialSystem from './pages/FinancialSystem';
import HeaderPages from './components/HeaderPages';
import AllProjects from './pages/AllProjects';
import Pokedex from './pages/Pokedex';

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
        element: (
          <>
            <HeaderPages />
            <GoalStore />
          </>
        )
      },
      {
        path: "/financialsystem",
        element: (
          <>
            <HeaderPages />
            <FinancialSystem />
          </>
        )
      },
      {
        path: "/moviestreaming",
        element: (
          <>
            <HeaderPages />
            <MovieStreaming />
          </>
        )
      },
      {
        path: "/pokedex",
        element: (
          <>
            <HeaderPages />
            <Pokedex />
          </>
        )
      },
      {
        path: "/allprojects",
        element: (
          <>
            <HeaderPages />
            <AllProjects />
          </>
        )
      }
    ],
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>
);