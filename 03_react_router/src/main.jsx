<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider,createBrowserRouter} from 'react-router'
import App from './App.jsx'
import { Home, About, Contact, CreateAccount, Error, Signup, Login, User } from "./pages/index.js";
import './index.css'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
         path: "/",
         element: <Home />
      },
      {
         path: "/about",
         element: <About />
      },
      {
         path: "/contact",
         element: <Contact />
      },
      {
         path: "/authpage",
         element: <CreateAccount />,
         children: [
            {
               path:"signup",
               element: <Signup />
            },
            {
               path: "login",
               element: <Login />
            },
            {
               path: "user/:id",
               element: <User />
            }
         ]
      },
      {
         path: "/*",
         element: <Error />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(


    <StrictMode>
      <RouterProvider router={routers} />
    </StrictMode>

)
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router"; // 👈 use createHashRouter
import App from "./App.jsx";
import { Home, About, Contact, CreateAccount, Error, Signup, Login, User } from "./pages/index.js";
import "./index.css";

// 👇 Use createHashRouter instead of createBrowserRouter
const routers = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/authpage",
          element: <CreateAccount />,
          children: [
            {
              path: "signup",
              element: <Signup />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "user/:id",
              element: <User />,
            },
          ],
        },
        {
          path: "/*",
          element: <Error />,
        },
      ],
    },
  ],
  {
    basename: "/react/03_react_router/", // still needed for GH Pages subdir
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>
);
>>>>>>> 84c16d9 (first commit)
